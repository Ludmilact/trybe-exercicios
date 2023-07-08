const validNameAndAge = (name, age) => {
  if (!name && !age ) {
    throw new Error('Todas as informações são necessárias');
  }
}

const validAge = (age) => {
if (age < 18) {
  throw new Error('Ops, infelizmente nesse momento você não pode fazer as aulas');
  } 
}

const studentRegister = (name, age) => {
    
    try {
      validNameAndAge(name, age);
      validAge(age);
      return `${name}, seja bem-vindo(a) à AuTrybe!`;
    } catch(error) {
    return error.message;
  }
};

console.log(studentRegister('Ludmila', 0));
console.log(studentRegister('Ludmila', 20));