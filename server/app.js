const express = require('express');
const morgan = require('morgan');
const data = require('./data.json');
const app = express();
const PORT = 3000;

app.use(morgan('dev'));
app.get('/', (req, res) => {
    res.status(200).send("It's working!");
});
app.get('/data', (req, res) => {
    res.status(200).json(data);
});
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`);
    });
}
module.exports = app;