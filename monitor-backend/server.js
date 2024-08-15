const express = require('express');
const cors = require('cors')
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
app.use(cors())
const port = 3000;
app.use(bodyParser.json());


app.post('/notify', (req, res) => {
    try {
        const newData = req.body;
        const data = fs.readFileSync('test.json', 'utf8')
        let json = JSON.parse(data);
        json?.push(newData);
        fs.writeFileSync('test.json', JSON.stringify(json, null, 2));
        res.send("success")
    } catch (e) {
        res.send("Fail")
    }

});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
