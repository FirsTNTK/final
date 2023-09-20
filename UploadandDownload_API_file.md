Upload

เราจะใช้ pakage ของ node.js ที่ชื่อ Multer
เป็น middleware เอาไว้จัดการ multipart from data 
multer จะไม่จัดการอะไรถ้ามันไม่ได้มาจาก multipart from data

คำสั่งการติดตั้ง pakage multer
** npm install --save multer


ถ้ามาไฟล์เดียวให้ใช้
.single

ถ้ามามากกว่า 1 ให้ใช้
.array


ถ้าเรากำหนด destination ให้กับโฟล์เด้อที่ไม่มีอยู่จะ error ต้องสร้างให้มันก่อน





multer สามารถใช้ file filter ได้ อนุญาติไฟล์แบบที่เราจำกัดว่าแบบไหนได้บ้าง
method 
fileFilter: (req, file, cb) => {
    if(file.mimetype == 'image/png' || file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg' ) {

    } else {

    }
}


การที่จะให้คนอื่นใช้ไฟล์ภายนอกของเราได้ต้องไปกำหนดใน app.js 
ต้องกำหนด url ที่เรียกเข้ามา พร้อมกับตำแหน่งของ app.js อยู่ ก็จะเรียกออกไปใช้ได้



Download ไฟล์ excel ผ่าน api
ต้องติดตั้ง pakage
**npm install --save exceljs

excel
require exceljs มันมาใช้และ สร้าง workbook,worksheet และใส่ข้อมูลลงไป

csv     จะไม่สามารถใช้ autofilter style
require exceljs มันมาใช้และ สร้าง workbook,worksheet และใส่ข้อมูลลงไป แต่ตอนเรา writefile ออกไปเป็น csv

สามารถดูได้จาก exceljs ได้


