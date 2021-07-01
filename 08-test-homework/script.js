//1.
class Student {
    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = [5, 4, 4, 5];
        this.dismissed = false;
    }

    //2.
    get getInfo() {
        return `Cтудент ${this.course}го курсу ${this.university}, ${this.fullName}`;
    }

    //3.
    get getMarks() {
        if (this.dismissed) {
            return null;
        }
        return this.marks;
    }
    //4.
    set setMarks(newMark) {
        if (this.dismissed) {
            return null;
        }
        return this.marks.push(newMark);
    }

    //5.
    getAverageMark() {
        return this.marks.reduce((sum, elem) => sum + elem) / this.marks.length;
    }

    //6.
    dismiss() {
        this.dismissed = true;
    }

    //7.
    recover() {
        this.dismissed = false;
    }
}

//Advanced
//1.
class BudgetStudent extends Student {
    constructor(university, course, fullName) {
        super (university, course, fullName);
        
        setInterval(() => this.getScholarship(), 30000);
    } 

    getScholarship(scholarship) {
        if (!this.dismissed && this.getAverageMark() >= 4) {
            return console.log(`Ви отримали 1400 грн. стипендії!`);
        }

            return console.log(`Ви не отримали стипендію!`);
    }
}
//Обычный
console.group(`Звичайний студент`);

//1.
const student = new Student(`Вищої школи Психотерапії м.Одеса`, 1, `Остап Бендер`);

//2.
console.log(`student.getInfo: `, student.getInfo);

//3.
console.log(`student.getMarks: `, student.getMarks);

//4.
student.setMarks = 5;
console.log(`student.getMarks: `, student.getMarks);

//5.
console.log(`student.getAverageMark: `, student.getAverageMark());

//6.
console.group(`Студента відраховано`)
student.dismiss();
console.log(`student.dismiss(): `, student.getMarks);
console.groupEnd();

//7.
console.group(`Студента поновлено`)
student.recover();
console.log(`student.getInfo: `, student.getInfo);
console.log(`student.recover(): `, student.getMarks);
console.log(`student.getAverageMark: `, student.getAverageMark());
console.groupEnd();
console.groupEnd();


//Advanced

console.group(`Студент, який отримує стипендію`);

//1.Со стипендией
const budgetStudent = new BudgetStudent(`Вищої школи Психотерапії м.Одеса`, 1, `Остап Родоманський`);
budgetStudent.marks = [5, 4, 4, 5];
budgetStudent.getScholarship(1400);
console.groupEnd();