const bcrypt = require('bcrypt');
const db = require('../utils/database');

const create = async (user) => {
    const password = await bcrypt.hash(user.password, 10);
    try {
        await db.query(`INSERT INTO users (email, password) VALUES ('${user.email}', '${password}')`);
        return true;
    } catch {
        return false;
    }
}

const read = async (email, full = true) => {
    const user = await db.query(`select * from users where email='${email}'`)

    if (user.rows.length === 1) {
        if (full) return user.rows[0];

        const { password, token, ...usr} = user.rows[0];
        return usr;
    } else {
        if (full) return user.rows;

        return user.rows.map(({ password, token, ...usr}) => usr);
    }
}

const update = async (email, partial_user) => {
    /*eslint no-unused-vars: "off"*/
    const { id, password, ...user } = partial_user;
    const fields = Object.entries(user).map((field) => field.join(" = '") + "'").join(', ');

    return await db.query(`update users set ${fields} where email = '${email}'`)
}

const del = async (email) => {
    return await db.query(`select * from users where email='${email}'`);
}

module.exports = {
    create,
    read,
    update,
    del
}
