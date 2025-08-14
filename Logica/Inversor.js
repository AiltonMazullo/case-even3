function inverterString(str) {
    let stringInvertida = '';
    for (let i = str.length - 1; i >= 0; i--) {
        stringInvertida += str[i];
    }
    return stringInvertida;
}

// Input do usuário de forma simples
process.stdout.write('Digite uma string para inverter: ');
process.stdin.once('data', (data) => {
    const entrada = data.toString().trim();
    
    if (entrada === '') {
        console.log('Por favor, digite uma string válida.');
    } else {
        const resultado = inverterString(entrada);
        console.log(`Entrada: "${entrada}" → Saída: "${resultado}"`);
    }
    
    process.exit();
});