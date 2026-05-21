async function buscarPeloCep(cep:string) {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const res = await fetch(url);
    const data = await res.json();

    console.log(
        `${data.logradouro}, ${data.bairro}, ${data.complemento}, ${data.localidade}/${data.uf}`); // A API não divulga número das casas, por isso complemento recebe vazio;
          }

buscarPeloCep('36025190')