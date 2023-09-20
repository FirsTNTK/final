var express = require('express');
var app = express();


app.use('/asset', express.static("public"))  //ในstatic มันคือชื่อ folder ของไฟล์ static ที่เราจะให้แสดง
// เราสามารถเพิ่ม routepath เริ่มต้นได้จากข้างหน้า /asset ต้องเข้าลิ้งผ่าน asset



app.listen(3000, () => {
    console.log('Server start successfully.');
})