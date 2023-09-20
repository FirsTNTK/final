var express = require('express');
var app = express();
var mw = require('./mymiddleware');




// Aplication middleware  จะทำงานหมดไม่สน 
app.use(mw({option1: '1',option2: '2'}));


//  ที่อ้างอิงมาใช้ Route Middleware
var users = require('./users')


// Route Middleware  จะทำงานเฉพาะ route ของมัน
app.use('/users', users);




app.get('/', (req, res) => {
    res.send('Hello haha'); // เราสามารถใช้ค่าที่รับมาจาก middleware ส่งกลับไป respone ได้ด้วย
});

app.listen(3000, () => {
    console.log('Server start on port 3000!!');
});