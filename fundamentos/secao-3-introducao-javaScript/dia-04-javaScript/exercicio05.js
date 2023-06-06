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

  const getValeuByNumber = (obj, index) => Object.values(obj)[index];

  console.log(getValeuByNumber(school, 0));


  const getStudents = (school) => {
    let count = 0;

    for(let index = 0;  index < school.lessons.length; index +=1) {
        count += school.lessons[index].students;
    }
    return count;
  }
  console.log(getStudents(school))