const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритм і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];
//1.
const getPairs = (students) => {
    return [
        [students[0], students[2]],
        [students[1], students[3]],
        [students[4], students[5]]
    ];
}
const pairs = getPairs(students);

console.log(pairs);



//2.
const setStudentsProjects = (pairs, themes) => {
    let pairsThemes = [];

    for (let i = 0; i < pairs.length; i++)
        pairsThemes[i] = [pairs[i], themes[i]];
    return pairsThemes;
}
const pairsThemes = setStudentsProjects(pairs, themes);

console.log(pairsThemes);

//3.
const setStudentsMarks = (students, marks) => {
    let studentsMarks = [];

    for (let i = 0; i < students.length; i++)
        studentsMarks[i] = [students[i], marks[i]];
    return studentsMarks;
}
const studentsMarks = setStudentsMarks(students, marks);

console.log(studentsMarks);

//4.
const setPairsThemesMarks = (pairsThemes) => {
    let pairsThemesMarks = [];
    for (let i = 0; i < pairsThemes.length; i++) {
        const mark = Math.round(Math.random() * 5);
        pairsThemesMarks[i] = [pairsThemes[i].concat(mark)];
    }
    return pairsThemesMarks;
}
const pairsThemesMarks = setPairsThemesMarks(pairsThemes);

console.log(pairsThemesMarks);