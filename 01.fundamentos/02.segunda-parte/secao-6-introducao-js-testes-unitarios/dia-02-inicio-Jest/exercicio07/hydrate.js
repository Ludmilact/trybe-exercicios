const hydrate = (string) => {

    const splitString = string.split('');
    let glass = 'copo';
    let glassOfWhater = 0;

    for (index = 0; index < splitString.length; index += 1) {
        const parsedCharacter = parseInt(splitString[index]);
        
        if (parsedCharacter) {
            glassOfWhater += parsedCharacter;
        }
    }

    if (glassOfWhater > 1) {
        glass = 'copos';
    }
    return `${glassOfWhater} ${glass} de água`
}
module.exports = { hydrate };