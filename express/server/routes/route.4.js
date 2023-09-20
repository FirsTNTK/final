var express = require("express");
var app = express();



var users = require("./users");
app.use("/users", users);   //"/users" เป็นการกำหนดพาทเริ่มต้นของ http ที่เรียกเข้า users อันหลังคือเอาค่าจากตัวแปรจากไฟล์ที่รับมาใช้กับตัวลิ้งนี้


app.listen(3000, () => {
    console.log('Server start on port 3000!');
});