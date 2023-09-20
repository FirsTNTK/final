var express = require('express');
app = express();


// การใช้ Multi callback funciton จะมีความยืดหยุ่นในการทำงานเพื่อให้ทำสิ่งต่อๆไปได้



//เราสามารถประกาศตัวแปรมารับค่า call back function และนำไปใส่อีกตัวให้ทำงานได้
// var cb = (req,res, next) => {
//     console.log('This is call back array');
//     next();
// }

// app.get('/',cb, (req,res, next) => {   [array] คลอบ cb หรือ cb ปกติก็ได้


app.get('/', (req,res, next) => {
    console.log('haha1');
    // res.send('ew1')  การส่งข้อมูลกลับไปหา client มันสามารถส่งได้ครั้งเดียว respone ส่วนใหญ่จะส่งด้านล่างสุด
    next();
}, (req, res) => {
    console.log('haha2');
    res.send('ew2')
});



app.listen(3000, () => {
    console.log('Server start at port 3000!!')
});