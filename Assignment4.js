const  csv = require('csvtojson');

async function students () {
    const students = await csv(). fromFile ('Student.csv')
    console.log(students);
}


async function studentsOfClass (std) {
    const students = await csv(). fromFile ('Student.csv')
    console.log(students.filter(student => student.Standard == std));
}

async function studentOfDivision (std,div) {
    const students = await csv(). fromFile ('Student.csv')
    console.log(students.filter(student => student.Standard == std && student.Division == div));
}

async function studentOF20Plus (std) {
    const students = await csv(). fromFile ('Student.csv')
    console.log(students.filter(student => student.Standard == std && student.Age >= 13));
}

async function marksOf1Div (std, sub) {
    const students = await csv(). fromFile ('Student.csv')
    let stdOfDiv = students.filter(student => student.Standard == std);
    let totalmarks = 0;
    stdOfDiv.map(mark => totalmarks += parseFloat(mark[sub]));
    console.log(totalmarks);
    console.log(totalmarks/stdOfDiv.length);
}


async function topperOfClass (std) {
    const students = await csv(). fromFile ('Student.csv')
    let stdOfDiv = students.filter(student => student.Standard == std);
    let total = stdOfDiv.map(student => 
        parseInt((parseInt(student.Maths) + parseInt(student.English) + parseInt(student.Chemistry))));
    let avg = total.map(total => parseInt(total / 3));
    let percentage = (total.map(total => parseInt((total / 300) * 100)));
    let names = stdOfDiv.map(student => student.Name);
    console.log(names,avg,percentage); 
    topper = percentage[0]; 
    percentage.map(student => {
        if (student > topper) {
            topper = student;
        }
    });
    console.log("Topper",topper);
}


//students();
//studentsOfClass(8);
//studentOfDivision(8,"B");
//studentOF20Plus(8);
//marksOf1Div(9,"Maths");s
//topperOfClass(10);
