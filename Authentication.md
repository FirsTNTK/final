Authentication การยืนยันตัวตนไว้พิสูจน์ตัวตนของเรา
ตัวที่เราทำง่ายที่สุดคือ what you know = password PIN

ควรเลือกตัวที่จะทำ Authentication ให้เหมาะสม


Authentication Password 
ใช้มากสุดบนโลก


ติดตั้ง
passport
jsonwebtoken
passport-local



๋JWT Authentication (Jason web token) 
โครงสร้าง 3 ส่วน แบ่งแยกด้วยตัวจุด
Header
Payload
Signature


**Header**
JWT
Algorithm

ตย.Header
{
    "alg": "HS256"
    "typ": "JWT"
}

**Payload**
Registered claims:
Public claims:
Private claims:

ตย.Payload
{
    "sub" : "123456789"
    "name" : "First Moka"
    "admin" : true
}


**Signature**
้สร้างขึ่นมาโดยเอาตัว Header and payload มา encode 64 url 
base64UrlEncode(header)
base64UrlEncode(payload)



1. Authentication ผ่าน password and username
- เราจะได้ตัว token มา
2. JWT Token Authentication การยืนยันผ่านตัว JWT
- เพือจะเอาข้อมูลในระบบไปใช้


การเขียน Authentication ใน nodejs เราจะใช้ package ที่ชื่อ 
passport

passport-jwt
passport-local

passport-local 
- Confligure Strategy
- Authentication เอาไปใส่ในส่วนของ middleware

passport-jwt



Token มากับ jwt