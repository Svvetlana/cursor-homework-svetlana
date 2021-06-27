const students = [{
  name: "Tanya",
  course: 3,
  subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
  }
}, {
  name: "Victor",
  course: 4,
  subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
  }
}, {
  name: "Anton",
  course: 2,
  subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
  }
}];

//1.
const getSubjects = student => {
  let studentSubjects = Object.keys(student.subjects);

  studentSubjects = studentSubjects.map(subject =>
    subject[0].toUpperCase() + subject.substring(1).replaceAll("_", " ")
  );

  return studentSubjects;
}

console.log(getSubjects(students[0]));

//2.
const getAverageMark = student => {
  const studentSubjects = student.subjects;
  const allMarks = [];

  for (subject in studentSubjects) allMarks.push(...studentSubjects[subject]);

  return +getAverage(...allMarks).toFixed(2);
}

console.log(getAverageMark(students[1]));

//3.
const getStudentInfo = student => {
  let studentInfo = {
    course: student.course,
    name: student.name,
    averageMark: getAverageMark(student)
  }

  return studentInfo;
}

console.log(getStudentInfo(students[2]));

//4.
const getStudentsNames = students => {
  const studentNames = students.map(student => student.name)
    .map(student => student[0].toUpperCase() + student.slice(1)).sort();;

  return studentNames;
}

console.log(getStudentsNames(students));

//5.
const getBestStudent = students => {
  const maxAverageMark = Math.max(...students.map(student =>
    getAverageMark(student)));
  const bestStudents = [];

  for (student of students) if (maxAverageMark === getAverageMark(student))
    bestStudents.push(student.name);

  return bestStudents;
}

console.log(getBestStudent(students));




//6.
const calculateWordLetters = word => {
  const wordArray = word.split('')
  const letterRepeats = {};

  for (let i = 0; i < wordArray.length; i++) {
    if (letterRepeats[wordArray[i]]) {
      letterRepeats[wordArray[i]] = letterRepeats[wordArray[i]] + 1;
    } else {
      letterRepeats[wordArray[i]] = 1;
    }
  }
  
  return letterRepeats;
}

console.log(calculateWordLetters("test"));

//.Среднеарифметическое число
function getAverage(...numbers) {
  const filtered = numbers.filter(num => Number.isInteger(num));
  const sum = filtered.reduce((sum, number) => {

    return sum + number;
  }, 0);

  return sum / filtered.length;
}