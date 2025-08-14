function numerosUnicos(lista) {
    return lista.filter((numero) => {
        const contagem = lista.filter((n) => n === numero).length;
        return contagem === 1;
    });
}

process.stdout.write('Digite uma lista de números separados por vírgula (ex: 1,2,3,4,4,5): ');
process.stdin.once('data', (data) => {
    try {
        const input = data.toString().trim();
        const lista = input.split(',').map(num => {
            const numero = parseInt(num.trim());
            if (isNaN(numero)) {
                throw new Error(`"${num.trim()}" não é um número válido`);
            }
            return numero;
        });
        
        const resultado = numerosUnicos(lista);
        console.log(`Lista original: [${lista.join(', ')}]`);
        console.log(`Números únicos: [${resultado.join(', ')}]`);
        
    } catch (error) {
        console.log(`Erro: ${error.message}`);
        console.log('Por favor, digite apenas números separados por vírgula.');
    }
    
    process.exit();
});
