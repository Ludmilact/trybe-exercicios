const newEmployees = () => {
    const employees = {
      id1: gerarEmail('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: gerarEmail('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: gerarEmail('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

const gerarEmail = (nome) => {
    const nomeDivisao = nome.split(' ');
    const nomeEmail = nomeDivisao.join('_');
    const nomeMinusculo = nomeEmail.toLowerCase();
    return `${nomeMinusculo}@trybe.com`;
}

console.log(newEmployees());
