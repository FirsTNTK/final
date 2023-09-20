
module.exports = (option) => (req, res, next) => {                   // เพิ่ม option => ? อันนี้หมายถึง ??
    var today = new Date();
    req.requestTime = today;
    console.log('myLogger | Time', today.toLocaleString());          // การที่เราจะให้แสดงเป็นตัวเลขวันเวลาต้องใช้ .toLocalString แล้วก็today เป็นตัวแปรที่เก็บค่า new Date()
    console.log(option);                                             // log ค่าที่ออกมาจากm middleware นั้นทำงาน
    next();                                                          // พอทำงานเสร็จจะไปทำงานหัวข้อถัดไป
}