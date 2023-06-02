let chessPiece = 'rei';

switch (chessPiece.toLocaleLowerCase()) {
    case 'rei':
        console.log('Rei -> uma casa para qualquer direcao.');
        break;
    case 'bispo':
        console.log('Bispo -> para diagonais.');
        break;    
    case 'rainha':
        console.log('Rainha -> para diagonais, horizontais e verticais.');
        break;
    case 'cavalo':
        console.log('Cavalo -> "L" pode pular sobre outras peças.');
        break;
    case 'torre':
        console.log('Torre -> Horizontal e vertical.');
        break;
    case 'peão':
        console.log('Peão -> Uma casa pra frente, no primeiro movimento podem ser duas casa.');
        break;
    default:
        console.log('Erro, peça inválida!');
};