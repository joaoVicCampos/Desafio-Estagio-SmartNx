import { arr } from "./util.ts";

arr.forEach((pessoa) => {
    if (pessoa.idade < 25) {
        console.log(pessoa);
    }  
})