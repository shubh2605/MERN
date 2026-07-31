// To      : {aarav.sharma@example.com}
// Subject : Welcome to {JavaScript} Course

// Hello Aarav Sharma,

// We are happy to have you in our {JavaScript} course.
// We hope you enjoy learning with us.
// If you have any questions, feel free to contact us.

// Phone : {9876543210}

// Regards,
// Parul University

const student = [
  {
    name: "Aarav Sharma",
    email: "aarav.sharma@example.com",
    year: 1,
    course: "BCA",
    phone: "9876543210",
    isGraduated: false,
    examScore: [
      { subject: "Java", marks: 82 },
      { subject: "HTML", marks: 91 },
      { subject: "JavaScript", marks: 88 },
    ],
  },
  {
    name: "Priya Patel",
    email: "priya.patel@example.com",
    year: 2,
    course: "BSc IT",
    phone: "9876543211",
    isGraduated: false,
    examScore: [
      { subject: "Java", marks: 75 },
      { subject: "HTML", marks: 89 },
      { subject: "JavaScript", marks: 84 },
    ],
  },
  {
    name: "Rahul Verma",
    email: "rahul.verma@example.com",
    year: 3,
    course: "B.Tech",
    phone: "9876543212",
    isGraduated: false,
    examScore: [
      { subject: "Java", marks: 92 },
      { subject: "HTML", marks: 87 },
      { subject: "JavaScript", marks: 95 },
    ],
  },
];

function sendEmail(student) {
  let template = `
To : ${student.email}
Subject: Welcome to ${student.course} Course

Hello ${student.name},

We are happy to have you in our ${student.course} course.
We hope you enjoy learning with us.
If you have any questions, feel free to contact us.
Phone: ${student.phone}
Regards,
Parul University
`;
  console.log(template);
}
student.forEach(sendEmail);



let highestmarks=student.map((student)=>
  student.examScore.reduce((acc,curr)=>curr.marks + acc,0)
);
let sortarray=highestmarks.sort((a,b)=>b-a);

console.log(`Highest Marks: ${sortarray[0]}`);

