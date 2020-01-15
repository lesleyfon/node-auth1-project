const express = require('express')
const app = express();
const PORT = 3000;
app.use(express.json());

app.get('/', (req, res) => res.json({
    message: 'Welcome'
}))
app.listen(PORT, () => console.log(`Example app listening on port port!`))