type User = {
    nome: string;
    idade:number;
    status:boolean;
}
const usuarios:User[] = [

    {
        nome: "Guido",
        idade: 32,
        status: true,
    },
    {
        nome: "Dani",
        idade: 30,
        status: true,
    },
    {
        nome: "João",
        idade: 40,
        status: false,
    },
    {
        nome: "Guilherme",
        idade: 29,
        status: true,
    },
    {
        nome: "Ana",
        idade: 18,
        status: false,
    },
    {
        nome: "José",
        idade: 28,
        status: false,
    },
]

function getUserByName(list: User[] ,name: string){
    return list
    .filter(user => user.nome.toLowerCase().includes(name.toLowerCase()))
}

console.log(getUserByName(usuarios, 'Jo'));