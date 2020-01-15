const express = require('express')
const app = express();
const PORT = 3000;


const userRoute = require('./auth/user-router');


app.use(express.json());
app.use('/auth', userRoute);

app.get('/', (req, res) => res.json({
    message: 'Welcome'
}))
app.listen(PORT, () => console.log(`Example app listening on port port!`))