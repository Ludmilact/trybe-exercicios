const fs = require('fs').promises;

async function main() {
  await readAll();
  // const simpson = await getSimpsonsById(2);
  // console.log(simpson);
  // removeSimpsonsById();
 // returnSimpson();
   addNelsonToFamily();
  replaceNelsonToMaggie();
}

async function readAllSimpsons() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  return simpsons;
}
async function readAll() {
    simpsons = await readAllSimpsons();
    const strings = simpsons.map(({id, name}) => `${id} - ${name}`);
    strings.forEach((string) => console.log(string));
}

//Crie a função, realizar a leitura do arquivo e a conversão do JSON em objeto.
/* A palavra-chave `throw` dispara um erro que deve ser tratado por quem chamou nossa função.
        * Em funções `async`, utilizar `throw` faz com que a Promise seja rejeitada,
        * tendo como motivo o que passarmos para o `throw`.
        * Ou seja, a linha abaixo rejeita a Promise da nossa função com um Erro que tem a mensagem 'id não encontrado'
        */
async function getSimpsonsById(id) {
    simpsons = await readAllSimpsons();
    const searchSimpson = simpsons.find((simpson) => Number(simpson.id) === id );
    if(!searchSimpson) {
      throw new Error('id não encontrado');
    }
    return searchSimpson;
}

async function removeSimpsonsById() {
  simpsons = await readAllSimpsons()
  const newSimpsons = simpsons.filter((currentSimpson) => currentSimpson.id !== '10' && currentSimpson.id !== '6');
  await fs.writeFile('./simpsons.json', JSON.stringify(newSimpsons));
}

async function returnSimpson() {
  const familyIds = [1,2,3,4];

  simpsons = await readAllSimpsons()
  
  const returnSimpsonsId = simpsons.filter((simpson) => familyIds.includes(Number(simpson.id)));
  
  // escrevendo um novo arquivo json
  await fs.writeFile('./returnSimpsonsId.json', JSON.stringify(returnSimpsonsId));
}
async function addNelsonToFamily() {
  const fileContent = await fs.readFile('./returnSimpsonsId.json', 'utf-8');

  const returnSimpsonsId = JSON.parse(fileContent);
  // adicionando nova pessoa ao array
  returnSimpsonsId.push({id: '8', name: 'Nelson Muntz'});
  // escrevendo o conteúdo novo no arquivo novo
  await fs.writeFile('./returnSimponsId.json', JSON.stringify(returnSimpsonsId));
}

async function replaceNelsonToMaggie() {
  const fileContent = await fs.readFile('./returnSimpsonsId.json', 'utf-8');

  const simpsonsFamily = JSON.parse(fileContent);

  // filtramos p array para remover o personagem nelson
  const simpsonsWithoutNelson = simpsonsFamily.filter((simpson) => simpson.name !== '8');

  // com spread seria assim:
  // const simpsonsWithMaggie = [ ...simpsonsWithoutNelson, simpsonsWithMaggie ]

  const simpsonsWithMaggie = simpsonsWithoutNelson.concat([{id: '15', name: "Maggie Simpson" }]);
  return fs.writeFile('./returnSimpsonsId.json', JSON.stringify(simpsonsWithMaggie));
}
  main();