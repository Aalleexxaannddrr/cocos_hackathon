const express = require('express')
const app = express()
const { router: userRouter } = require('./routers/user');
const cookieParser = require("cookie-parser");

const router = express.Router()
app.use(express.json());
app.use(cookieParser());

app.use('/user', userRouter);
app.use('/', router);

router.get('/*', (_req, res) => {
  res.status(404).json({
    error: 'Запрос не может быть обработан, маршрут не найден'
  })
})

app.listen(3000, () => {
  console.log('_.-started-._')
})