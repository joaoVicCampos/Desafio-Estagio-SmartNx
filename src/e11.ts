import { arr } from "./util.ts";

const pessoas =  arr.map((pessoa) => pessoa)
const ordenadas = pessoas.sort((a, b) => {
    if(a.idade !== b.idade){
        return b.idade - a.idade
    }
    return a.id - b.id
});
console.log(ordenadas);

