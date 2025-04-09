import http from 'k6/http';
import { check } from 'k6';
//import { open } from 'k6/fs';

///ระวังส่ง  SMS
export let options = {
  vus: 1, // จำนวนผู้ใช้งานเสมือน (Virtual Users) ที่จะทำงานพร้อมกัน คือ 5 คน
  duration: '1s', // ระยะเวลาการทดสอบทั้งหมด คือ 3 นาที
};

//const imageData = open('./assets/TEST.jpg', 'b');
// อ่านข้อมูลของรูปภาพทั้ง 20 ไฟล์
const image1Data = open('./assets/image1.jpg', 'b');
const image2Data = open('./assets/image2.jpg', 'b');
const image3Data = open('./assets/image3.jpg', 'b');
const image4Data = open('./assets/image4.jpg', 'b');
const image5Data = open('./assets/image5.jpg', 'b');
const image6Data = open('./assets/image6.jpg', 'b');
const image7Data = open('./assets/image7.jpg', 'b');
const image8Data = open('./assets/image8.jpg', 'b');
const image9Data = open('./assets/image9.jpg', 'b');
const image10Data = open('./assets/image10.jpg', 'b');
const image11Data = open('./assets/image11.jpg', 'b');
const image12Data = open('./assets/image12.jpg', 'b');
const image13Data = open('./assets/image13.jpg', 'b');
const image14Data = open('./assets/image14.jpg', 'b');
const image15Data = open('./assets/image15.jpg', 'b');
const image16Data = open('./assets/image16.jpg', 'b');
const image17Data = open('./assets/image17.jpg', 'b');
const image18Data = open('./assets/image18.jpg', 'b');
const image19Data = open('./assets/image19.jpg', 'b');
const image20Data = open('./assets/image20.jpg', 'b');

const bankAccountData = open('./assets/bankAccount.jpg', 'b');
const identityDocumentsData = open('./assets/identityDocuments.jpg', 'b');
const houseNumberPicturesData = open('./assets/houseNumberPictures.jpg', 'b');

export default function () {
  const url = 'https://api-nonmotor-claim.beta.thaivivat.co.th/api/claim'; // เปลี่ยนเป็น endpoint จริง

  const formData = {
    policyNbr: '5675934132674456',
    insuredName: 'แอน',
    insuredLastName: 'ทดสอบ',
    email: 'ann.pattanakun@gmail.com',
    tel: '0864755979',
    citizenNbr: '1234567890123',
    addressDetail: '123/4 ถนนทดสอบ แขวงทดสอบ เขตทดสอบ',
    provinceCode: '10',
    districtCode: '10*01',
    subDistrictCode: '360101',
    postCode: '36000',
    propertyType: 'House',
    damageDesc: 'ทดสอบ',
    damageAssets: 'ทดสอบ',
    incidentDate: '2025-04-05 12:47:00',
    consent: '{"privacyConsent":true,"marketingConsent":true,"sensitiveDataConsent":true}',

    'damagePictures[]': [
      http.file(image1Data, 'image1.jpg', 'image/jpg'),
      http.file(image2Data, 'image2.jpg', 'image/jpg'),
      http.file(image3Data, 'image3.jpg', 'image/jpg'),
      http.file(image4Data, 'image4.jpg', 'image/jpg'),
      http.file(image5Data, 'image5.jpg', 'image/jpg'),
      http.file(image6Data, 'image6.jpg', 'image/jpg'),
      http.file(image7Data, 'image7.jpg', 'image/jpg'),
      http.file(image8Data, 'image8.jpg', 'image/jpg'),
      http.file(image9Data, 'image9.jpg', 'image/jpg'),
      http.file(image10Data, 'image10.jpg', 'image/jpg'),
      http.file(image11Data, 'image11.jpg', 'image/jpg'),
      http.file(image12Data, 'image12.jpg', 'image/jpg'),
      http.file(image13Data, 'image13.jpg', 'image/jpg'),
      http.file(image14Data, 'image14.jpg', 'image/jpg'),
      http.file(image15Data, 'image15.jpg', 'image/jpg'),
      http.file(image16Data, 'image16.jpg', 'image/jpg'),
      http.file(image17Data, 'image17.jpg', 'image/jpg'),
      http.file(image18Data, 'image18.jpg', 'image/jpg'),
      http.file(image19Data, 'image19.jpg', 'image/jpg'),
      http.file(image20Data, 'image20.jpg', 'image/jpg'),
    ],
   
    //damagePictures: http.file(imageData, 'TEST.jpg', 'image/jpg'),
    bankAccount: http.file(bankAccountData, 'bankAccount.jpg', 'image/jpg'),
    identityDocuments: http.file(identityDocumentsData, 'identityDocuments.jpg', 'image/jpg'),
    houseNumberPictures: http.file(houseNumberPicturesData, 'houseNumberPictures.jpg', 'image/jpg'),


   
  };
  const res = http.post(url, formData);

  check(res, {
    'uploaded successfully': (r) => r.status === 200,
  });

  console.log(`Response status: ${res.status}`);
  console.log(`Body: ${res.body}`);
}
