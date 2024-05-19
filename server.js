const path = require("path");
const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// const filePath = path.join(process.env.STORY_DIR, "story", "text.txt"); //__dirname

app.use(bodyParser.json());

app.get("/", (req, res) => {
  return res.send(`
  <div style="max-width: fit-content;
  margin-left: auto;
  margin-right: auto;">
    <h2 style="text-align: center;">Natsongpol Tongthongthip / tualim</h2>
    <h3 style="text-align: center;">ID: 65130495</h3>
    <img src="https://scontent.fbkk15-1.fna.fbcdn.net/v/t1.6435-1/82131518_2528995903866113_932934516656308224_n.jpg?stp=dst-jpg_p480x480&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Tt-FR0D5BfMQ7kNvgG7vv9D&_nc_ht=scontent.fbkk15-1.fna&oh=00_AYA_bEqjTLdabnjJ3yA3UU7jmoe-xmKVzivvpWUgt8mkLA&oe=66711CC7" style="width: 100%"/>
    <a href="/myresearch" style="text-align: center;">My Research</a> 
    <a href="/myresearchplan" style="text-align: center;">My Research Plan</a> 
   </div>  
    `);
});

app.get("/myresearch", (req, res) => {
  return res.send(`
    <p>เนื่องจากการสร้างเว็บไซต์มีความหลากหลายทางด้านสถาปัตยกรรมมากขึ้นแต่หลักๆ ที่เป็นที่นิยม จะมีแบบ MVC (Model view controller) ซึ่งมีการแบ่งการทำงานของเว็บไซต์อย่างชัดเจนโดย มีการกำหนด model หรือรูปแบบการทำงานของแอปพลิเคชั่นนั้นๆ ในส่วนของ model ส่วนต่อมาจะเป็น view ซึ่งก็คือส่วนของหน้าแสดงผลและส่วนสุดท้าย controller หรือก็คือส่วนควบคุม โดยในสถาปัตยกรรมในแบบ MVC การพัฒนาแอปพลิเคชั่นสามารถทำได้ต้นจนจบภายในโครงสร้างเดียว MVC แต่เดิมใช้กับแอปพลิเคชั่นที่เป็น Graphical User Interface (GUI) บน desktop แอปพลิเคชั่น
    แนวทาง MVC ถูกสร้างขึ้นจาก Trygve Reenskaug โดยเป้าหมายของการออกแบบ MVC เกิดจากการต้องการแก้ปัญหาของผู้ใช้ที่ต้องควบคุมข้อมูลที่ใหญ่และซับซ้อนโดยแบ่งส่วนออกไปเพื่อให้แต่ละส่วนทำงานในงานของตัวเอง ลักษณะเด่นๆ ของ MVC จะมีการแบ่งแยกที่ชัดเจนของ business logic, UI logic และ input logic และมีความง่ายในการจัดการ HTML และ URL MVC ยังพัฒนาเพื่อรองรับ Test Driven Development (TDD) หรือก็คือการพัฒนาแอปพลิเคชั่นที่ลดความเสี่ยงต่อความผิดพลาดที่จะทำให้เกิด bug และทำให้ code มีประสิทธิภาพมากขึ้นทำให้ performance ดีขึ้นอีกด้วย
    และอีกแบบคือสถาปัตยกรรมแบบ Front-end และ Back-end เป็นการสร้างเว็บแอปพลิเคชั่นแบบมีการแบ่งแยกการทำงานโดยแบ่งเป็น 2 ส่วนโดย Front-end จะรับหน้าที่ในการขอข้อมูลจาก Back-end และนำมาแสดงผลโดยเน้นความสำคัญด้านประสบการณ์การใช้งานของผู้ใช้ และอีกส่วนจะเป็น Back-end ที่ทำหน้าที่จัดการ การทำงานของแอปพลิเคชั่น โลจิคต่างๆ และส่งข้อมูลในแบบฟอร์มที่กำหนดไว้เพื่อสื่อสารกับ Front-end ในรูปแบบที่เรียกว่า API (Application Programming Interface) ซึ่งปัจจุบันกำลังเป็นที่นิยม ด้วยความสามารถที่จะขยายขีดจำกัดได้สะดวกและสามารถใช้ Back-end เพียงตัวเดียวสื่อสารกับแอปพลิเคชั่นหลาย หรืออุปกรณ์ได้อย่างหลากหลาย
    ทั้งนี้ปัญหาที่เกิดขึ้นคือในเมื่อมีภาษาที่มีประสิทธิภาพการเลือกสถาปัตยกรรมระหว่าง MVC หรือ Front-end/Back-end ว่าสถาปัตยกรรมไหนที่มีการทำงานได้ดีกว่าทั้งในด้านประสิทธิภาพหรือด้านการใช้ทรัพยากร ต่อการพัฒนาแอปพลิเคชั่นนึง แบบไหนมีความเหมาะสมกว่า ดังนั้นการวิจัยนี้จึงเกิดขึ้นมาเพื่อตรวจวัดและเปรียบเทียบประสิทธิภาพในด้านต่างๆ โดยมีการทำแอปพลิเคชั่นและแสดงผลในรูปแบบเดียวกันต่างกันเพียงแค่การใช้สถาปัตยกรรมซึ่งสามารถส่งผลในระยะยาว ทั้งเรื่อง Performance และเรื่องของ Scalability ที่เป็นเรื่องที่เกี่ยวกับธุรกิจโดยตรงจากการลงทุนโครงสร้าง หลีกเลี่ยงค่าใช้จ่ายที่ไม่มีความจำเป็นออกไปจากธุรกิจได้
    </p>
    <a href="/">Home</a>
    `);
});

app.get("/researchplan", (req, res) => {
  return res.send(`
    <table border="1"style="border-collapse: collapse;">
    <tr>
      <th>Work</th>
      <th>October</th>
      <th>November</th>
      <th>December</th>
      <th>January</th>
      <th>February</th>
      <th>March</th>
      <th>April</th>
      <th>May</th>
      <th>June</th>
      <th>July</th>
      <th>August</th>

    </tr>
    <tr>
      <td>ศึกษาปัญหา</td>
      <td>start</td>
      <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>literature review</td>  
        <td></td>
        <td>start</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>ออกแบบโครงสร้างการทดลอง</td>
        <td></td>
        <td></td>
        <td>start</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>ลงมือ coding สถาปัตยกรรม MVC</td>
        <td></td>
        <td></td>
        <td></td>
        <td>start</td>
        <td>start</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>

    </tr>
    <tr>
        <td>ลงมือ coding สถาปัตยกรรม Front-end/Back-end</td> 
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>start</td>
        <td>start</td>
        <td>start</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>ทดสอบ unit-test ทั้ง 2 แบบ</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>start</td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>ทดสอบการทำงานจริงและบันทึกผล</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>start</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>ประเมินผล</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>start</td>
        <td></td>
    </tr>
    <tr>
        <td>สรุป</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>start</td>
    </tr>
</tr>
  </table>
  <a href="/">Home</a>
`);
});

app.get("/rest/researchplan", (req, res) => {
  res.status(200).json({
    research: {
      work: {
        problem: "october",
        literature: "november",
        design: "december",
        codingmvc: "january, february",
        codingfrontendbackend: "march, april, may",
        unittest: "june",
        test: "july",
        result: "august",
        conclusion: "august",
      },
    },
  });
});

app.listen(3000);
