var express = require('express');
var app = express();



// สามารถเรียกใช้ middleware จากอีกไฟล์ มาใช้ โดยการ require แล้วใส่ให้กับตัวแปร  app.use(ตัวแปร);
var mw = require('./mymiddleware')
app.use(mw({option1: '1', option2: '2'}));  // เราสามารถป้อนตัวแปรให้กับ middleware ได้(ใช้เพื่อให้มันบอกเราว่ามีการทำงานผ่านตัวนี้) โดยให้พิม({ใส่ตัวแปร}) แต่ต้องไปแก้ตัวไฟล์ที่เรียกมาด้วย option



// เราสามารถแยก middleware อีกไฟล์แล้วอ้างอิงมาใช้ได้ เพื่อที่จะไม่ต้องเขียนโค๊ดซ้ำไว้วนใช้
// var myLogger = (req, res, next) => {
//     var today = new Date();
//     req.requestTime = today;
//     console.log('myLogger | Time', today.toLocaleString());         // การที่เราจะให้แสดงเป็นตัวเลขวันเวลาต้องใช้ .toLocalString แล้วก็today เป็นตัวแปรที่เก็บค่า new Date()
//     next();                                                          // พอทำงานเสร็จจะไปทำงานหัวข้อถัดไป
// }

// app.use(myLogger);   // ประกาศใช้ middleware จาก mylogger 





app.get('/', (req, res) => {
    res.send('Hello haha'+ req.requestTime); // เราสามารถใช้ค่าที่รับมาจาก middleware ส่งกลับไป respone ได้ด้วย
});

app.listen(3000, () => {
    console.log('Server start on port 3000!!');
});