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

    const pairsThemes = [];

    for (let i = 0; i < pairs.length; i++) {
        pairsThemes[i] = [...pairs[i], themes[i]];
    }

    return pairsThemes;
}
const pairsThemes = setStudentsProjects(pairs, themes);

console.log(pairsThemes);

//3.
const setStudentsMarks = (students, marks) => {

    const studentsMarks = [];

    for (let i = 0; i < students.length; i++) {
        studentsMarks.push([students[i], marks[i]]);
    }

    return studentsMarks;
}

console.log(setStudentsMarks(students, marks));


//4.
const setPairsThemesMarks = (pairsThemes) => {

    const pairsThemesMarks = [];

    for (let i = 0; i < pairsThemes.length; i++) {
        const mark = Math.round(Math.random() * 5);
        pairsThemesMarks.push([pairsThemes[i], mark]);
    }

    return pairsThemesMarks;
}

console.log(setPairsThemesMarks(pairsThemes));