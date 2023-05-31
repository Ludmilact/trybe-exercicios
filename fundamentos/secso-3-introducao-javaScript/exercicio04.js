let num1 = 10;
let num2 = 70;
let num3 = 100;
let triangulo;

let soma = num1 + num2 + num3;

if (soma == 180) {
    triangulo = true;
} else if (soma < 0) {
    triangulo = false;
} else { 
    triangulo = "Não é triangulo"
}
 console.log(triangulo);