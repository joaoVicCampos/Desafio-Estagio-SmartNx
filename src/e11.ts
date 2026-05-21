import { arr } from "./util.ts";

const pessoas =  arr.map((pessoa) => pessoa)
const ordenadas = pessoas.sort((a, b) => {
    if(a.idade !== b.idade){
        return a.idade - b.idade
    }
    return a.id - b.id
});
console.log(ordenadas);

