function validarEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
}

function solicitarEmail() {
    process.stdout.write('Digite um email para validar ( ou pressione Ctrl + C para sair ): ');
}

solicitarEmail();

process.stdin.on('data', (data) => {
    const email = data.toString().trim();
    
    if (validarEmail(email)) {
        console.log(`✅ "${email}" parece ser um email válido!`);
        process.exit();
    } else {
        console.log(`❌ "${email}" não parece ser um email válido. Tente novamente.\n`);
        solicitarEmail();
    }
});

process.on('SIGINT', () => {
    console.log('\nProcesso interrompido pelo usuário.');
    process.exit();
});