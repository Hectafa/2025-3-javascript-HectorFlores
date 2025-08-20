const { ask } = require('../helpers/input.js');

async function saludar(nombre) { 
    console.log(`Hola estimado(o): ${nombre}, espero que tengas un buen día...` );
}

async function main() {
    const personas = ["Pedro", "Juan", "María", "Ana", "Karla"];

    console.log("-------ascendente------");

    for(let i = 0; i<personas.length; i++){
        saludar(personas[i]);
    }

    console.log("------descendente------");

    for(let j = personas.length - 1; j>=0; j--) {
        saludar(personas[j]);
    }

    let limite = Number(await ask('Hasta que número quieres contar: '));
    let x = 1;
    while(x <= limite){
        console.log(x);
        x++;
    }
}

main();

