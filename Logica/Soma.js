function somaAteN(n) {
    let soma = 0;
    for (let i = 1; i <= n; i++) {
        soma += i;
    }
    return soma;
}

process.stdout.write('Digite um número para calcular a soma até ele: ');
process.stdin.once('data', (data) => {
    const numero = parseInt(data.toString().trim());
    
    if (isNaN(numero) || numero < 0) {
        console.log('Por favor, digite um número válido (maior ou igual a 0).');
    } else {
        const resultado = somaAteN(numero);
        console.log(`A soma de 1 até ${numero} é: ${resultado}`);
    }
    
    process.exit();
});