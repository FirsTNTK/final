var express = require("express");
var app = express();


// Query Parameters  เขียนได้ยากกว่าจะมีเครื่องหมาย ?username=olan&email=olan@gmail.com   จะใช้ ? ตามด้วยตัวแปรแต่ละตัวแล้วก็ value ของมัน
app.get('/users', (req, res) => {
    res.send(req.query.username) //สามารถเลือกเนื้อหาที่จะแสดงเจ่าะจงได้เป็นตัวๆตามหลัง.
})




// URL Parameters ปัจจุบันใช่ตัวนี้มากกว่าเพราะเป็นมิตรกับ user     http://localhost:3000//users/first/first@gmail.com
app.get('/users/:username/:email', (req, res) => {
    res.send(req.params.username);
})

app.listen(3000, () => {
    console.log('Start server on port 3000');
});
