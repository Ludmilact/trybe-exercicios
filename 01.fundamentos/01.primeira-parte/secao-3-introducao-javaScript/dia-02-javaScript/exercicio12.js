let n = 5;
let symbol = '*';
let inputLine = '';
let inputPosition = n - 1;

for (let lineIndex = 0; lineIndex < n; lineIndex +=1){
    for(let columIndex = 0; columIndex < n; columIndex +=1) {
        if (columIndex < inputPosition) {
            inputLine = inputLine + ' '; 
        } else {
        inputLine = inputLine + symbol;
    }
}
   console.log(inputLine);
   inputLine = '';
   inputPosition -= 1;
};