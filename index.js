const express = require('express');
const app = express();
const XLSX = require('xlsx');
const workbook = XLSX.readFile('file.xlsx');
const sheet_name_list = workbook.SheetNames;

let data = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);

app.get('/data', (req, res) => {    
    res.send(data);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Listening on port...')); 