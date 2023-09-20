Sequelize เป็นการลดการใช้ ภาษา sql ลงและใช้ตัวนี้มากขึ้น
คือการmappingในตารางให้อยู่ในรูปแบบ object

คำสั่ง sequelize
สร้าง folder & file สำหรับ sequelize ทั้งหมด

**npx sequelize-cli init

สามารถสร้างแบบกำหนดเองได้ว่าอยากได้ตัวไหนใช้ : ตามด้วยตัวที่จะลง

**npx sequelize-cli init: (config,migrations,models,seeders)

// มันจะสร้างตามไฟล์config ชื่อจะตรงกับใน config ที่กำหนดไว้ development (รหัสและรูทให้ตรง)
สร้าง Database ตามไฟล์ config

**npx sequelize-cli db:create

ลบ Database ตามไฟล์ config

**npx sequelize-cli db:drop




โครงสร้าง folders & files
- config
เป็นตัวบอกว่าเชื่อมฐานข้อมูลยังไงอะไรบ้าง
- model
mapping ระหว่างฐานข้อมูล
- migrations
ไม่ว่าจะเป็นการเพิ่มข้อมูลฐาน collumn แก้ไขชนิดข้อมูล
- seeders
การซีดข้อมูลหรือเพิ่มข้อมูลผ่านไฟล์ seeders


sequelize meta จะเก็บชื่อไฟล์ที่มันทำงาน
คำสั่งในการสร้าง table ขึ้นมาและใส่ค่าต่างๆให้รับไปเป็นหัวข้อ
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,password:string,birthDate:date
// จะได้ไฟล์ model ที่เราใส่ไปในคำสั่ง มันจะสร้างบางตัวให้อัตโนมัติ
ื
คำสั่งให้มันทำงาน migrations
npx sequelize-cli db:migrate // ให้มันทำงาน
npx sequelize-cli db:migrate:undo // เลิกอ่านไฟล์นี้

คำสั่งในการนำเข้าข้อมูล seeder
npx sequelize-cli db:seed:all // ให้มันทำงานบันทึกค่าที่เราใส่
npx sequelize-cli db:seed:undo // ข้อมูลทั้งหมด

migration 
เป็นตัวการแก้ไขข้อมูลและตารางเพื่อที่จะเพิ่มคอลัมลบคอลัม ต่างๆการแก้ไข

seeder 
เป็นตัวการนำเข้าข้อมูลเป็น row

เขียนผ่าน sequelize จะ undo กับmigrate ง่ายกว่า

