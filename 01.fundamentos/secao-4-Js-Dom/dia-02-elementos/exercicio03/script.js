/* PARTE 1 - Crie um irmão para elementoOndeVoceEsta.
 */
const element1 = document.getElementById('pai');
const newElement = document.createElement('section');
newElement.innerText = 'Irmão de "onde vc esta"';

element1.appendChild(newElement);

/* PARTE 2 - Crie um filho para elementoOndeVoceEsta.
*/
const ondeVcEsta = document.getElementById('elementoOndeVoceEsta');
const newElement1 = document.createElement('p');
newElement1.innerText = "filho de onde vc está";

ondeVcEsta.appendChild(newElement1);

/* PARTE 3 Crie um filho para primeiroFilhoDoFilho.
*/
const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
const newElement2 = document.createElement('p');
newElement2.innerText = "filho do filho do filho";

primeiroFilhoDoFilho.appendChild(newElement2);

/* PARTE 4 - A partir desse filho criado, acesse terceiroFilho.
*/
const terceiroFilho = newElement2.parentElement.parentElement.nextElementSibling;
console.log(terceiroFilho);