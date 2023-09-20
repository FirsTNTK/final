logging 
การจดบันทึก ใช้กับตัวแอพพลิเคชั่น กับ restApi
การจดเนี่ยมันบอกเหตุการและปัญหาที่เกิดขึ้นได้เวลาไหนเมื่อไหร่ใครที่ติดปัญหาจากการทำงาน
ติดตามการเกิดขขึ้นจดบันทึกทุกอย่างบนแอพพลิเคชั้นของเรา


คำสั่ง ติดตั้ง log4js
ืnpm install --save log4js


การใช้งาน 
var log4js = require('log4js');           เรียกมันมาใช้
var logger = log4js.getlogger();           และให้ใช้ method getlogger แทนไป logger
logger.level = 'debug'                      สามารถกำหนดตัว level ในการ log ได้
logger.debug("Some debug messages");



เราสามารถบันทึกได้ทั้ง Database หรือ File
แต่จะนิยมลงไฟล์มากกว่ากลับมาย้อนดูได้

การที่เรากำหนด level ไว้อันไหนอันต่ำกว่าจะแสดงออกมาทั้งหมด แล้วทำไมไม่อันสูงสุด เพราะ โค๊ดมันมีอยู่มากแล้ว log ใหญ่มาก ไว้เปิดดู error

lv log4js
OFF > FATAL > ERROR > WARN > INFO > DEBUG > TRACE > ALL 
ส่วนใหญ่จะใช้ error


ตย.การlogลงไฟล์
const log4js = require("log4js");
log4js.configure({
    appenders: {cheese: {type : "file", filename: "cheese.log"} },            appenders ที่ชื่อ cheese สร้างไฟล์ชื่อ cheese.log             
    categories: {default: {appenders:["cheese"], level : "error"} },           ให้ใช้ appender ที่ชื่อ cheese มากำหนด level
});

const logger = log4js.getLogger("cheese"); 



การที่ logger จะทำงานไม่ทำงานอยู่ที่ Lv ที่เรา set
ตอนที่เราจะบันทึก lv ไหน ตั้งให้ตรงกัน



appender log4js 
การตั้งค่า logger ส่ง output ไปที่ไหน


จะนิยมเก็บ log ในรูปแบบ dateFile ถ้ามีขนาดใหม่ มันจะตัดเป็นวันๆ แต่ถ้าข้อมูลน้อยใช้ file


Categories 
กลุ่มของ log event เหตุการของ log
สามารถสร้างได้มากกว่า 1 categories แต่ต้องมี default ด้วยนะ 
สามารถแบ่งเรื่องของ log ได้


layout เป็น function ของ appenders 
จะจัดรูปแบบ output ตามที่เราอยากได้
ถ้าไม่มีการประกาศมันก็จะมีสีสวยงามปกติ


ิbasic 
วัน เวลา categories ข้อความ

message Pass-Through
message มาให้เลย


pattern
สามารถกำหนดทุกอย่างได้เองเป็นที่นิยม
%r เวลา 
p log lv
c log category
h hostname
m log data 
d datetime
n บรรทัดใหม่
z process id
f full path firename ต้อง enablecallstack ก่อนเป็น true 




