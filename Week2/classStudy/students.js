{
  /*
   * Given the students array of objects
   * - group students in two arrays of male and female students
   * - convert marks to numbers
   * - find out average marks of both male and female students
   * - find out average marks of the entire class
   */
}
const students = [
  {
    name: 'Noah',
    gender: 'M',
    marks: '89.25',
  },
  {
    name: 'Olivia',
    gender: 'F',
    marks: '93.30',
  },
  {
    name: 'Wiliam',
    gender: 'M',
    marks: '84.50',
  },
  {
    name: 'Isabella',
    gender: 'F',
    marks: '76.00',
  },
  {
    name: 'Jacob',
    gender: 'M',
    marks: '81.75',
  },
  {
    name: 'Sofia',
    gender: 'F',
    marks: '94.00',
  },
  {
    name: 'David',
    gender: 'M',
    marks: '78.50',
  },
  {
    name: 'Grace',
    gender: 'F',
    marks: '85.00',
  },
];

let maleStudents = students.filter(student => student.gender === 'M');
let femaleStudents = students.filter(student => student.gender === 'F');
console.log(maleStudents);
console.log(femaleStudents);

let newStudent = students.map(student => {
  return {
    name: student.name,
    gender: student.gender,
    marks: +student.marks,
  };
});
console.log(newStudent);

let averageMarkMale =
  maleStudents.reduce((acc, cur) => acc + parseFloat(cur.marks), 0) / maleStudents.length;
console.log(averageMarkMale);

let averageMarkFemale =
  femaleStudents.reduce((acc, cur) => acc + +cur.marks, 0) / femaleStudents.length;
console.log(averageMarkFemale);

let averageMarkAll =
  students.reduce((acc, cur) => acc + parseFloat(cur.marks), 0) / students.length;
console.log(averageMarkAll);
