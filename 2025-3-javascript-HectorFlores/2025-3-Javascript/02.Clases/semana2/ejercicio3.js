const { ask } = require('../helpers/input.js');

async function main() {
    let opcion = '';
    let frutas = [];

    

    while(opcion !=='3'){
    opcion = await ask('Qué deseas hacer? \n1. Agregar una fruta. \n2. Elimnar una fruta \n3. Salir \nRespuesta: ');
        if(opcion =='1'){
            let frutaNueva = await ask('Qué fruta deseas agregar? ');
            frutas.push(frutaNueva);
            console.log('Fruta agregada: ', frutaNueva);
            console.log(`Frutas disponibles: `, frutas);
        }else if (opcion == '2'){
            if (frutas.length === 0){
                console.log('No hay frutas disponibles');
                continue;
            } else {
                let frutaMenos = await ask('Qué fruta deseas eliminar? ');
                let index = frutas.indexOf(frutaMenos);

                if(index!==-1) {
                    frutas.splice(index,1);
                    console.log(`${frutaMenos} ha sido eliminada`);
                } else {
                    console.log('No esta esa fruta');
                }
                
                console.log('Frutas disponibles', frutas);
            }
        } else if (opcion == '3'){
            console.log('Gracias, bai');
        } else {
            console.log('Opción inválida');
        }
    }
}

main();