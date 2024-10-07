const app = require('express');
const bcrypt = require('bcrypt');
const userRouter = app.Router();
const userService = require('../services/user');
const jwt = require("jsonwebtoken");

// AUTH
userRouter.post('/register', async (req, res) => {
    if (!req.body.email) res.status(400).json({ error: "Поле email обязательно" });
    if (!req.body.password) res.status(400).json({ error: "Поле password обязательно" });

    const alreadyCreateUser = await userService.read(req.body.email);
    if (alreadyCreateUser.rows.length) {
        return res.status(400).json({ error: 'Пользователь с таким email уже существует'});
    }

    const user = await userService.create({ email: req.body.email, password: req.body.password })

    if (user) {
        return res.status(201).json();
    } else {
        return res.status(400).json({
            error: "Не удалось создать пользователя",
        });
    }
})

userRouter.post('/login', async (req, res) => {
    if (!req.body.email) res.status(400).json({ error: "Поле email обязательно" });
    if (!req.body.password) res.status(400).json({ error: "Поле password обязательно" });

    const user = await userService.read(req.body.email);

    if (!user.rows.length && user.rows[0].email !== req.body.email) {
        return res.status(404).json({
            error: "Пользователь не найден"
        })
    }

    const password = user.rows[0].password;

    if (bcrypt.compareSync(req.body.password, password)) {
        const access_token = jwt.sign({
            email: user.rows[0].email,
        }, 'secretKey', {
            expiresIn: '2h'
        })
        const refresh_token = jwt.sign({
            email: user.rows[0].email,
        }, 'secretKey', {
            expiresIn: '30d'
        })

        await userService.update(user.rows[0].email, { token: refresh_token});
        return res
            .cookie('refresh_token', refresh_token, { maxAge: 2592000000, httpOnly: true })
            .json({ access_token });
    } else {
        return res.status(400).json({ error: 'Неверный пароль' });
    }
})

userRouter.get('/refresh', async (req, res) => {
   const old_refresh_token = req.cookies['refresh_token'];

    if (!old_refresh_token) {
        return res.status(400).json({ error: 'Нет refresh токена'})
    }

    const email = jwt.decode(old_refresh_token).email;

    const access_token = jwt.sign({
        email,
    }, 'secretKey', {
        expiresIn: '2h'
    })
    const refresh_token = jwt.sign({
        email,
    }, 'secretKey', {
        expiresIn: '30d'
    })

    await userService.update(email, { token: refresh_token});
    return res.json({ access_token });
})

userRouter.get('/logout', async (req, res) => {
    if (!req.cookies['refresh_token']) {
        return res.status(400).json({ error: 'Нет refresh токена'})
    }

    const email = jwt.decode(req.cookies['refresh_token']).email;
    res.clearCookie('refresh_token');
    await userService.update(email, { token: null });
    return res.json();
})

const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, 'secretKey', (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }

            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

// USER
userRouter.get('/', authenticateJWT, async (req, res) => {
    return res.json(await userService.read(req.user.email, false));
})

module.exports = {
    router: userRouter
}
