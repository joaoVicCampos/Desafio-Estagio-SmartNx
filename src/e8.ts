import { arr } from "./util.ts";

const somaIdades = arr.reduce((acc, pessoa) => acc + pessoa.idade, 0)

console.log(somaIdades);
