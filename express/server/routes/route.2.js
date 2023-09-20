var express = require("express");
var app = express();

// สามารถเรียกได้ปกติผ่านหน้าเว็บ http://localhost:3000
app.get('/', (req, res) => {
    res.send("get method");
});


// มีแค่ส่วน get ที่ผ่านเว็บได้โดยตรง สวนอื่นต้องผ่านแอพตัวกลางอย่างที่ใช้คือ postman


// ต้องเรียกผ่าน Postman 
app.post('/', (req, res) => {
    res.send("post method");
});





app.listen(3000, () => {
    console.log('Start server on port 3000');
});
