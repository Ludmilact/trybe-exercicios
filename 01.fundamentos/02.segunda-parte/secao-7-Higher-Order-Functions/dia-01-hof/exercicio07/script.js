
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const compareAnswer = (rightAnswers, student_answers) => {
    if(rightAnswers === student_answers) {
        return 1;
    } if (student_answers === 'N.A') {
        return 0;
    }
    return -0.5;
}

const countPoints = (rightAnswers, student_answers, action) => {
    let contador = 0;
    for (let index = 0; index < rightAnswers.length; index += 1) {
        const actionReturn = action(rightAnswers[index], student_answers[index]);
        contador += actionReturn
    }
    return `Resultado final: ${contador} pontos.`;
}
console.log(countPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswer));