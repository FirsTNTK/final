Data Validation การตรวจสอบข้อมูล
ทำได้หลายจุด
ส่วนใหญ่มี 3 จุด
- client
- back-end
- database



express-validator  validator เป็น middleware ของ express

คำสั่งติดตั้ง express-validator
npm install --save express-validator


**Sanitizer validation
.trim()                           // .trim คือให้ไม่มีช่องว่างเลย นิยมใส่ในชุดข้อมูลที่เป็น string ถ้าอยากให้ด้านไหนด้านเดียวก็พิม r หรือ l ด้านหน้า
.normalizeEmail(),               // คำสั่ง normalizeEmail คือการรับค่าทั้งหมดเป็นตัวเล็ก ถ้าไม่มีค่าที่ใส่มาในฐานข้อมูลจะเป็นตามที่ใส่มา
.escape()                        // ไว้ดักจับอักขระพิเศษเพื่อแปลงมันเพื่อให้แสดงได้ถูกต้องนิยมใช้ใน api





คำสั่งไว้แนบ message บอกสิ่งที่เราจะบอกกับ user ที่ใช้ api ของเรา
.withMessage('ข้อความจะส่งกลับไป')                 // ในกรณี่จะบอกกับคนที่ใช้ในกรณี error ให้ส่ง message นี้กลับไป




Validation & Constraints
ตัว model ที่เราเรียกมาใช้ในการ validation ถ้ามันส่ง errors มันจะส่งผ่านตัวแปร  validationErrorItem และเอาค่าตัวแปรตัวนี้ส่งกลับไปหาผู้ใช้



เราสามารถ validation ผ่าน ฐานข้อมูลได้โดยผ่าน not-null(nn) unique-index(uq) 
ถ้าเราใส่ไม่ได้อาจจะมีข้อมูลที่ซ้ำกันในระบบ


Database: Check 
เป็นการให้มันแสดงข้อมูลที่เราอยากให้แสดงโดยมีเงื่อนไขที่เรากำหนด
คำสั่งใส่ในส่วนของ sql
** AlTER TABLE users ADD CHECK ()

length(ขื่อคอลัม)  เป็นการเช็คจำนวนตัวอักษร

ตย.
(length(password) => 4 and length(password) <= 20);           password ที่มีมากกว่าหรือเท่ากับ 4 และ password ที่มีน้อยกว่าหรือเท่ากับ 20


