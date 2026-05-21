function TresArgs(str1: string, str2: string, funcao: (x: string, y: string) => string): string{
    return funcao(str1, str2)
}
function somaStrs(x: string, b:string): string{
    return x + " " + b;
}
const result = TresArgs('Hello','World', somaStrs)
console.log(result);

