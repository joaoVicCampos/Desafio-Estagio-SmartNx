function doisArg(str1: string, str2: string): string {
    if(str1.length > str2.length) {
        return str1;
    } else if (str1.length < str2.length){
        return str2;
    } else {
        return 'As Strings tem o mesmo tamanho'
    }
}

console.log(doisArg('Flamengo', 'Atletico Mineiro'))
console.log(doisArg('Flamengo', 'Vasco'))
console.log(doisArg('Flamengo', 'Botafogo'))

