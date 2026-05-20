function doisArg(str1: string, str2: string): string {
    if(str1.length > str2.length) {
        return str1;
    } else {
        return  str2;
    }
}

console.log(doisArg('Flamengo', 'Atletico Mineiro'))
console.log(doisArg('Flamengo', 'Vasco'))

