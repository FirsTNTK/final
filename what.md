const { original: { code, sqlMessage } } = err;

**ตัวแปรทำไมถึงอยู่ใน object {}


findByPk

**มันคือหาตัวที่มี id ตามลำดับใช่มั้ย


req.params.id 

**คือสิ่งที่ client ส่งมาใช่มั้ย id


req.body 

**คือข้อมูลที่เป็นในรูปแบบ object ใช่มั้ย


let { page = 1, limit = 10, sort = "id", order = "asc", ...filter } = req.query; 

**ในส่วนของคำว่า order มันคืออะไร
แล้ว
**การที่ประกาศ let มารับตัวแปร { } ตัวแปรมีมากกว่า1ในรูปแบบ object ใช่มั้ย
แล้ว
**ส่งค่าตัวแปรทั้งหมดให้กับตัว req.query ใช่มั้ย



isLength({ min: 4, max: 20 })

**ในกรณีแบบนี้ทำไมถึงมี object ในนั้น เพราะมีตัวแปรมากกว่า1รึป่าว




ทำไม่stringใน .json ถึงใช้ single quote ไม่ได้


.withMessage((value, { req, location, path }) => {
    อ่านว่าอะไร




การที่เราส่งเอกสาร api ออกไป คนภายนอกจะใช้งานได้ยังไง ( เอาไปใช้ยังไง หรือใช้ไว้ในเว็บ และอันนั้นคือวิธีใช้)
