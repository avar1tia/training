const fs = require('fs');

console.log('iniciado')

fs.readFile('text.txt', 'utf-8', (error, text) => {
    if (error) {
        console.log(`Error ${error}`);
    }else{
        console.log(text);
    }
});

console.log('finalizado');

fs.rename('text.txt', 'text_renombrado.txt', (error) => {
    if (error) {
        throw error;
    }else{
        console.log('renombrado!')
    }
})