var express = require('express');
var router = express.Router();


router.use((req, res, next) => {
    console.log('Request URL :', req.originalUrl);
    console.log('Request Method :', req.method);
    next();
})

router.get('/', (req, res) => {
    res.send('Haha router')
})



router.get('/:username', (req, res) => {  //ถ้ามีการต่อท้ายของลิ้งจะทำงานลิ้งนี้บอกชื่อ
    res.send(req.params);    //ส่งข้อมูลกลับไปโดยข้อมูลที่ส่งกลับไปนั้นคือข้อมูลที่ client ส่งมา คือ req.params
})


module.exports = router;