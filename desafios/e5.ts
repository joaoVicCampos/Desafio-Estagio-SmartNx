const dic: Record<string, string | number>= {a: 4, e: 3 ,i: 1 , s: 5 };
const frase = 'T35t3 d3 35t4g1o';

let novaFrase = frase;

for (const i in dic) {
    novaFrase = novaFrase.replaceAll(String(dic[i]), i)

   
}
 console.log(novaFrase);


