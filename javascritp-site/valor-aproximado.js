function valorAproximado(num, arr) {
    let valorProximo = arr[0];
    let valorSub = Math.abs(valorProximo - num);
    for (let i = 1; i < arr.length; i++) {
        let numAtual = arr[i];
        let diference = Math.abs(numAtual - num);
        if (diference < valorSub) {
            valorProximo = numAtual;
            valorSub = diference;
        }
    }
    return valorProximo;
}

console.log(valorAproximado(4, [1, 23, 45, 67, 12, 9, 6]));
