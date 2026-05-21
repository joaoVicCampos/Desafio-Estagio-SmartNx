import { arr } from "./util.ts";

arr.forEach((pessoa) => {

    const nomeMaiusculo = pessoa.nome.charAt(0).toUpperCase() + pessoa.nome.slice(1);
    console.log(`Olá,${nomeMaiusculo}`);

})
    
    
