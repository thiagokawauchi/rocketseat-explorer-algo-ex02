let students = [
    {
        name: 'Ichirou',
        firstGrade: 7,
        secondGrade: 9
    },
    {
        name: 'Jirou',
        firstGrade: 3,
        secondGrade: 7
    },
    {
        name: 'Saburou',
        firstGrade: 10,
        secondGrade: 8
    },
    {
        name: 'Shirou',
        firstGrade: 1,
        secondGrade: 5
    }
]

/* 
function getAverage(firstGrade, secondGrade) {
    return (firstGrade + secondGrade) / 2 
} 

let average = getAverage
*/

let average = (firstGrade, secondGrade) => ((firstGrade + secondGrade) / 2)

for (let student of students) {
    alert(`A média do(a) aluno(a) ${student.name} é ${average(student.firstGrade, student.secondGrade).toFixed(1)}`)
    if (average(student.firstGrade, student.secondGrade) >= 7) {
        alert(`Parabéns ${student.name}! Você foi aprovado(a) no concurso!`)
    } else {
        alert(`Não foi desta vez, ${student.name}. Tente novamente!`)
    }
}
