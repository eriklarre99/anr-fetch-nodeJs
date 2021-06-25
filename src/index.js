const fetch = require('node-fetch')

const number_doc = 5066975;
const marito = 674198;
const URI = `https://anr.org.py/consulta/server.php?nro_doc=${number_doc}`
const URI_NEW = `https://anr.org.py/padron/server.php?nro_doc`;

const getData = URI_received => {
    fetch(`https://anr.org.py/consulta/server.php?nro_doc=${URI_received}`)
        .then(res => res.json())
        .then(json => {

            console.log(json);
            let template = `
            --------------------------------------------
                Nombre: ${json.data[0].nombre} 
                Apellido: ${json.data[0].apellido}
                Cedula: ${json.data[0].cedula} 
                Distrito: ${json.data[0].distrito}
                Departamento: ${json.data[0].departamento}
            -------------------------------------------- \n \n
            `
            console.log(template);
        });
}

let iterador = 0;
const getPeopleAnr = async URI_received => {
    try {
        const res = await fetch(`https://anr.org.py/padron/server.php?nro_doc=${URI_received}`)
        const json = await res.json()
        iterador++

        // if (json.data[0].departamento == 'MISIONES') {
        //     let template = `
        //     --------------------------------------------
        //         Consulta Nº: ${iterador}   CI: ${json.data[0].cedula} 

        //         Nombre: ${json.data[0].nombre} 
        //         Apellido: ${json.data[0].apellido}
        //         Cedula: ${json.data[0].cedula} 
        //         Distrito: ${json.data[0].distrito} 
        //         Departamento: ${json.data[0].departamento}
        //     --------------------------------------------
        // `
        //     console.log(template);
        // }

        // console.log(json);

        let template = `
            --------------------------------------------
                Consulta Nº: ${iterador}   CI: ${json.data[0].cedula} 

                Nombre: ${json.data[0].nombre} 
                Apellido: ${json.data[0].apellido}
                Cedula: ${json.data[0].cedula} 
                Distrito: ${json.data[0].distrito} 
                Departamento: ${json.data[0].departamento}
            --------------------------------------------
        `
        console.log(template);

    } catch (error) {
        // console.log(`\n Dato Nro. ${iterador} \nerror desde fetch -> ${error}`);
        console.log(`CI Nro: ${URI_received} -> No Afiliado.`);
    }
}

// getPeopleAnr(marito)
getPeopleAnr(number_doc)


const getAll_people = async () => {
    for (let i = 4000000; i < 4000100 ; i++) {
        await getPeopleAnr(i)
    }    
}

// getAll_people();