const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let sum = 0;
let elementos = 0;
let media = 0;

for(index = 0; index < numbers.length; index +=1) {
    sum += numbers[index];
    elementos = numbers.length;
    media = sum / elementos; 
}

console.log(media)