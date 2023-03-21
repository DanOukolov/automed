require("dotenv").config(); // this loads env vars

const express = require("express");
const cors = require("cors");
const path = require("path");
const { Configuration, OpenAIApi } = require("openai");

const app = express();
const port = 4000;

let APIKEY = process.env.AIKEY;
let ORGANIZATION = process.env.AIORG;
const configuration = new Configuration({
  organization: ORGANIZATION,
  apiKey: APIKEY,
});
const openai = new OpenAIApi(configuration);

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "../client/build")));

app.post("/triage", async (req, res) => {
  const { name, age, weight, prescriptions, insurance, symptoms } = req.body;

  const prompt = `Here is the array I want you to save and work with for the following prompt:
  [${[
    `"${name}"`,
    `"${age}"`,
    `"${weight}"`,
    `"${prescriptions}"`,
    `"${insurance}"`,
    `"${symptoms}"`,
  ].join(", ")}]

  You are to play the role of a medical receptionist,
   assistant, and scribe. I am going to give you an array with some information
   with which I want you to produce medical encounternote complete with a properly
   coded CPT code.
   For example, here is an example array and subsequent note:
  ["Daniel Oukolov", "10/10/2001", "180lbs", "Amoxycilin", "Blue Cross Blue Shield", "I have a soar throat and aching back and I still haven't been healed by my antibiotics"]
   Index 0 of this array is the patient name, index 1 is the DOB, index 2 is the weight, and index 3 is the prescription the patient takes, index 4 is the patient's insurance, and index 5 is the patient's chief complaint.
   The response for this array should look like this:

   Patient Name: Daniel Oukolov
   DOB: 10/10/2001
   Encounter Date: 03/16/2023

   Chief Complaint: Patient reports pain and swelling in his right knee after a fall during a soccer game.History of Present Illness: The patient reports that he
   fell during a soccer game yesterday and landed on his right knee. He reports immediate pain and swelling, which has
   worsened overnight.

   Medical History: The patient has a history of seasonal allergies and takes loratadine as needed. He denies any
   other medical conditions, surgeries, or hospitalizations.Physical Exam:Vital Signs:Blood Pressure: 120/80
   mmHgHeart Rate: 82 beats per minuteRespiratory Rate: 18 breaths per minuteTemperature: 98.6°F (37°C)General:
   The patient is alert and oriented, in no acute distress.Musculoskeletal: Inspection of the right
   knee reveals swelling and tenderness over the medial joint line. There is no evidence of deformity
  or crepitus. The patient is able to bear weight but with a limp. The left knee is normal.Assessment
    and Plan:The patient is diagnosed with a possible medial collateral ligament (MCL) sprain of the
        right knee. A radiologic examination of the right knee, using CPT code 73560, is ordered to rule
         out any bony injury. The patient is advised to rest, ice, compress, and elevate the affected
          leg and is prescribed non-steroidal anti-inflammatory drugs (NSAIDs) for pain relief.
          The patient is advised to follow up with an orthopedic specialist for further evaluation
          and management.Note: This encounter note is just an example and should not be used for
          medical diagnosis or treatment. A licensed healthcare provider should always be consulted for
          any medical concerns.

  All of the information provided in the example medical note above that is not discussed
  in the example array I gave you, I want you to fill in to complete the medical note with random answers just like the example did.
  For example, the physical exam should maintain all of the proper parameters of the example note but with random information filled in for what is not included in the array just
  like in the example above. Also, if I give you an array with an empty string, please also just autofill that information with something random.
  In other words, if index 0 of the array does not have string, just autofill the medical note with a random name.`;

  // console.log(prompt);
  // const response = await openai.createChatCompletion({
  //   model: "gpt-3.5-turbo",
  //   messages: [{ role: "user", content: prompt }],
  //   max_tokens: 300,
  // });
  // text =
  //   response.data.choices[0].message.content !== undefined
  //     ? response.data.choices[0].message.content
  //     : "Error!";

  // console.log(text);
  const text = `\n\nPatient Name: VEHBI\nDOB: 01/01/1980\nEncounter Date: 08/31/2021\n\nChief Complaint: Patient reports having trouble focusing and paying attention in school and at work.\n\nHistory of Present Illness: The patient reports that he has been experiencing difficulty focusing and paying attention in school and at work for the past few weeks. He reports feeling less productive and more easily distracted than usual.\n\nMedical History: The patient has a history of childhood asthma but has not required treatment in several years. He denies any other medical conditions, surgeries, or hospitalizations.\n\nPhysical Exam:\nVital Signs:\nBlood Pressure: 120/80 mmHg\nHeart Rate: 70 beats per minute\nRespiratory Rate: 16 breaths per minute\nTemperature: 98.2°F (36.8°C)\nGeneral:\nThe patient is alert and oriented, with normal speech and gait. He appears in no acute distress.\nNeurological: The patient is able to follow simple commands and is oriented to person, place, and time. There is no tremor, abnormal movements, or sensory deficits noted.\nPsychiatric: The patient is cooperative, with good eye contact and affect, and is alert to his surroundings.\nAssessment and Plan:\nThe patient is diagnosed with attention-deficit/hyperactivity disorder (ADHD). The clinician recommends cognitive-behavioral therapy (CBT) and medical management with a stimulant medication,"`;

  setTimeout(() => {
    res.json({ text });
  }, 3000);
});

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "client", "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
