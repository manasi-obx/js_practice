const  csv = require('csvtojson');
var fs = require('fs');

async function fileToJson (filename, data) {
    fs.appendFile(filename, JSON.stringify(data), function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
}

async function getStudents () {
    const students = await csv(). fromFile ('Student.csv');
    return students;
}

async function studentsOfClass (studentData, std) {
    return studentData.filter(student => student.Standard == std); 
}

async function studentOfClassAndDivision (StudentsOfSameClass,div) {
    return StudentsOfSameClass.filter(student => student.Division == div);
}

async function avgMarksOfSub (std,div,sub) {
    let studentData = await getStudents();
    let StudentsOfSameClass = await studentsOfClass(studentData, std);
    let stdOfDiv = await studentOfClassAndDivision (StudentsOfSameClass,div);
    let totalmarks = 0;
    stdOfDiv.map(mark => totalmarks += parseFloat(mark[sub]));
    console.log("Total Marks of " + sub + " of " + std + "th standard " + div + " divison = " + (totalmarks));
}

async function topperOfClass (std) {
    let studentData = await getStudents();
    let StudentsOfSameClass = await studentsOfClass(studentData, std);
    let percentageOfStudent = StudentsOfSameClass.map(student => {
        let total = parseFloat((parseFloat(student.Maths) + parseFloat(student.English) + parseFloat(student.Chemistry)));
        total = total.toFixed(2);
        let percentage = (total / 300) * 100;
        percentage = percentage.toFixed(2);
        student.percentage = percentage;
        return student;
    })

    percentageOfStudent.sort((a, b) => a.percentage - b.percentage);
    console.log("Topper ",percentageOfStudent[percentageOfStudent.length - 1]);
}


async function ageOfStudent (std) {
    let studentData = await getStudents();
    console.log("Age of students of class:" + std)
    studentData.filter(student => {
            let today = new Date();
            let stdName = student.Name;
            let birthDate = Date.parse(student.DOB);
            let age = Math.floor((today - birthDate)/(1000*60*60*24*365));
            if (student.Standard == std && age >= 12) {
                console.log(stdName,age);
            }
    })
}


// async function studentOF20Plus (std) {
//     const students = await csv(). fromFile ('Student.csv');
//     let group = (students.filter(student => student.Standard == std));
//     let groupDOB = group.map(student => student.DOB);
//     let yy = groupDOB.map(dob => dob.slice(6));
//     console.log(yy);
//     let today = new Date ();
//     let thisYear = today.getFullYear();
//     yy.map(year => {
//         if(year.length === 2 && (year >= 00 && year <= (thisYear - 2000))){
//             year = parseInt(year) + 2000;
//             let age = thisYear - year;
//             console.log(age);
//         } 
//         else if (year.length === 4){
//             let age = thisYear - parseInt(year);
//             console.log(age);
//         }
//         else {
//             year = parseInt(year) + 1900;
//             let age = thisYear - year;
//             console.log(age);
//         }
//     })
// }


//getStudents();
studentsOfClass(getStudents,8);
//studentOfClassAndDivision(studentsOfClass,"B");
//studentOF20Plus(10);
//avgMarksOfSub(9,"A","Maths");
//topperOfClass(10);
//ageOfStudent(10);
