function multiplicationTable(list: number[]){
    list.map(number => {
        for (let multiplier = 0; multiplier < 11; multiplier++) {
            console.log(`${number} X ${multiplier} = ${number * multiplier}`)
        }
        console.log('-----------------------------')
    });
}

multiplicationTable([1, 5, 2])