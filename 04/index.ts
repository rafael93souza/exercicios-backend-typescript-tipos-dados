type Tag = {
    produto:string;
    lote:number;
    ano:number;
    qtd:number;
}

function tagGenerator(tag:Tag):string[]{
    const {ano,lote,qtd}= tag
    const tags:string[] = [];

    for (let i = 1; i <= qtd; i++) {
       const generatTag:string = `${lote}-${ano}-${String(i).padStart(3,"0")}`
        tags.push(generatTag)
    }
    return tags
}

console.log(tagGenerator(   {
    produto: 'CPU Dual Core 3.0GHZ',
    lote: 321,
    ano: 2022,
    qtd: 5
}))