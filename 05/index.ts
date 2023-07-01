function spelling(text: string):string{
    return text.split("").join("-")
}

console.log(spelling('programador'))