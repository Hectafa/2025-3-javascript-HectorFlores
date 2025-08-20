const { ask } = require('../helpers/input.js');

async function main() {
    const frutas = ["melón", "sandía", "platano", "fresas", "nada", "manzana", "uva"];

    const cajon = Number(await ask('Qué cajón quieres abrir? (1-7) '));

    for (let i = 1; i<=5; i++){
        if(i == cajon){
            console.log('En el cajón ' + i + ' hay ' + frutas[i-1]);
        }
    }
}

main();