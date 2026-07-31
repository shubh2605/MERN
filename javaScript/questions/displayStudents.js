const students = [
  {
    name: 'Aarav Sharma',
    email: 'aarav.sharma@example.com',
    course: 'BCA',
    year: 1,
    marks: 82,
    isGraduated: false,
  },
  {
    name: 'Diya Patel',
    email: 'diya.patel@example.com',
    course: 'BCA',
    year: 2,
    marks: 91,
    isGraduated: false,
  },
  {
    name: 'Vivaan Singh',
    email: 'vivaan.singh@example.com',
    course: 'BSc IT',
    year: 3,
    marks: 75,
    isGraduated: false,
  },
  {
    name: 'Ananya Verma',
    email: 'ananya.verma@example.com',
    course: 'BCA',
    year: 3,
    marks: 88,
    isGraduated: false,
  },
  {
    name: 'Aditya Mehta',
    email: 'aditya.mehta@example.com',
    course: 'BCom',
    year: 2,
    marks: 69,
    isGraduated: false,
  },
  {
    name: 'Ishita Desai',
    email: 'ishita.desai@example.com',
    course: 'BBA',
    year: 1,
    marks: 95,
    isGraduated: false,
  },
  {
    name: 'Rohan Gupta',
    email: 'rohan.gupta@example.com',
    course: 'BSc CS',
    year: 4,
    marks: 80,
    isGraduated: true,
  },
  {
    name: 'Sneha Joshi',
    email: 'sneha.joshi@example.com',
    course: 'BCA',
    year: 4,
    marks: 86,
    isGraduated: true,
  },
  {
    name: 'Karan Malhotra',
    email: 'karan.malhotra@example.com',
    course: 'BTech',
    year: 3,
    marks: 73,
    isGraduated: false,
  },
  {
    name: 'Meera Nair',
    email: 'meera.nair@example.com',
    course: 'BSc IT',
    year: 2,
    marks: 92,
    isGraduated: false,
  },
  {
    name: 'Arjun Kapoor',
    email: 'arjun.kapoor@example.com',
    course: 'BCA',
    year: 1,
    marks: 64,
    isGraduated: false,
  },
  {
    name: 'Priya Shah',
    email: 'priya.shah@example.com',
    course: 'BBA',
    year: 4,
    marks: 89,
    isGraduated: true,
  },
  {
    name: 'Rahul Yadav',
    email: 'rahul.yadav@example.com',
    course: 'BCom',
    year: 3,
    marks: 71,
    isGraduated: false,
  },
  {
    name: 'Neha Kulkarni',
    email: 'neha.kulkarni@example.com',
    course: 'BSc CS',
    year: 2,
    marks: 84,
    isGraduated: false,
  },
  {
    name: 'Kabir Roy',
    email: 'kabir.roy@example.com',
    course: 'BTech',
    year: 4,
    marks: 97,
    isGraduated: true,
  },
];

function displayAllStudents(students) {
  console.log(students);
}
displayAllStudents(students); 

console.log(`All students name:`);

function getStudentNames(students) {
  return students.map(s=>s.name);
}
console.log(getStudentNames(students));
