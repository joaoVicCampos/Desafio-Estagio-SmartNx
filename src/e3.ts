function ManyArgs(...args:  string[]): string{
    return args.join(" ");
}

const printStrs1 = ManyArgs("Eu", "gosto", "de", "comida", "japonesa");
const printStrs2 = ManyArgs("Hello", "World");

console.log(printStrs1);
console.log(printStrs2);





