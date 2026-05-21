const pessoa = {
    "nome": "Dev",
    "sobrenome": "smart",
    "idade": "26",
    "cargo": "analista de sistema",
    "documento": "123.345.678-90"
}

function deleteItem (objeto: any) {
    console.log(pessoa);
    const novoPessoa = {...objeto};
    delete novoPessoa.documento;
    console.log(novoPessoa);
}

deleteItem(pessoa)