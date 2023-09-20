การทำ api ให้รองรับมากกว่า 1 ภาษา จะกี่ภาษาก็ได้แตต้องกำหนดค่าให้มัน

package ที่ใช้ i18n
คำสั่งติดตั้ง
npm install --save i18n

การใช้งานเหมือน middleware 
1.require มันมาก่อน
2.config ให้มันเราใช้กี่ภาษา
locales จะเป็น array บอกว่ากี่ภาษา [ 'th', 'en'], directory: _dirname + 'ตำแหน่งของไฟล์ภาษา',
queryParameter: 'lang' ส่งกลับมาเป็น lang , defaultLocale: 'th' กำหนด default ได้


มันจะใช้กับตัว req i18n__



จะทำงานเฉพาะส่วนที่ส่งให้กลับไป client 
ส่วนที่แก้ 
authenroute
userroute


validate ข้อมูลก็สามารถทำหลายภาษาได้
เราจะทำผ่านตัว withMessage