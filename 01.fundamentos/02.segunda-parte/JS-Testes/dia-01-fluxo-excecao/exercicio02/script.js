const notaMedia = (n1, n2, n3, n4) => {

  try {
  verifyNumber(n1,n2,n3,n4)
  const media = (n1 + n2 + n3 + n4) / 4;
  return media;
  }
  catch(erro) { 
    return erro.message;
  }
}

const verifyNumber = (n1,n2,n3,n4) => {

  if (isNaN(n1) || isNaN(n2) || isNaN(n3) || isNaN(n4)) {
    throw new error('Digite um número');
   }
}

console.log(notaMedia(10,10,10,11))