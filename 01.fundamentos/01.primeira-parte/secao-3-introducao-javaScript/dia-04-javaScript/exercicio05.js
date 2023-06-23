const school = {
    lessons: [
      {
        course: 'Python',
        students: 20,
        professor: 'Carlos Patrício',
        shift: 'Manhã',
      },
      {
        course: 'Kotlin',
        students: 10,
        professor: 'Gabriel Oliva',
        shift: 'Noite',
      },
      {
        course: 'JavaScript',
        students: 738,
        professor: 'Gustavo Caetano',
        shift: 'Tarde',
      },
      {
        course: 'MongoDB',
        students: 50,
        shift: 'Noite',
      },
    ]
  };

  // Crie uma função que obtenha o valor da chave de acordo com sua posição no array.

  const getValeuByNumber = (obj, index) => Object.values(obj)[index];

  console.log(getValeuByNumber(school, 0));

  // Crie uma função que retorne a soma do número total de estudantes em todos os cursos.

  const getStudents = (school) => {
    let count = 0;

    for(let index = 0;  index < school.lessons.length; index +=1) {
      count += school.lessons[index].students;
    }
      return count;
  }
  console.log(getStudents(school))

  /*Crie uma função que verifica se uma determinada chave existe em todos os elementos do array lessons. O retorno deve ser um booleano (true ou false). Essa função deve possuir dois parâmetros: o objeto e o nome da chave.
  */

  const verifyKey = (obj, nameKey) => {
  
    for (index = 0; index < obj.lessons.length; index += 1) {
      if (obj.lessons[index][nameKey] === undefined) {
        return false;
      }
    };
    return true;
  }
  console.log(verifyKey(school,'professor'));

  /*Crie uma função para alterar o turno para noite no curso de Python. Essa função deve ter três parâmetros: a base de dados a ser modificada, o nome do curso e o novo valor da chave.
  */

  const modificaTurno(obj, curso, valorkey) => {
    if(obj.curso.valorkey == "Python"){
      return obj.curso.valorkey.shift = valorkey;
    }
  } 