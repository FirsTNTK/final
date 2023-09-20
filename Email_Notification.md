ใช้ service ภายนอกในการส่ง email

sendGrid
มี cloud-base ในการส่งอีเมล server
sengrid มีบริการ 2 รูปแบบ
- email marketing
- email api

email marketing
สามารถสร้าง template ใส่รูปเพื่อความสวยงามดูรายละเอียด

email api **
เราจะเรียก send-grid ผ่าน email api จะรองรับหลายภาษา


คำสั่งติดตั้ง send-grid 
npm install --save @sendgrid/mail

คำสั่งอ่านไฟล์ env
ืnpm install dotenv


ต้อง verification sender 
ไม่งั้นเมลที่ส่งไปจะลงจั้ง เพื่อจะได้บอกว่าอีเมลที่ทกำการส่งนั้นมันมีอยู่จริงไม่ใช่เใลปลอม


เราสามารถสร้าง template ในการส่ง gmail ตอบกลับให้กับ client ได้
โดยใช้ template pug


ส่วนที่ user สมัครเข้ามาจะเป็น userroute 