const formulario = prompt("Bienvenido, si desea dejar su información de contacto ingrese 'Y', de lo contrario ingrese 'N'").toLowerCase();

if (formulario === "y") {
    alert("Decidió dejar su información de contacto, por favor a continuación ingrese los siguientes datos:");

    class Contacto {
        constructor(nombre, apellido, email, telefono, motivo_contacto, puntuacion) {
            this.nombre = nombre;
            this.apellido = apellido;
            this.email = email;
            this.telefono = telefono;
            this.motivo_contacto = motivo_contacto;
            this.puntuacion = puntuacion
        }
    }

    const nombre = prompt("Ingrese su Nombre");
    const apellido = prompt("Ingrese su Apellido");
    let email = prompt("Ingrese su Email");
    while (!email.includes("@")) {
        alert("Ingrese un email válido.");
        email = prompt("Ingrese su Email");
    }
    let telefono = prompt("Ingrese su Teléfono");

    while (isNaN(telefono)) {
        alert("Ingrese un número de teléfono válido.");
        telefono = prompt("Ingrese su Teléfono");
    }

    const motivo_contacto = prompt("Ingrese el motivo por el cual se contactó");
    let puntuacion = null;



    while (puntuacion === null) {
        const valor = prompt("Del 1 al 10 cual fue su experiencia con la pagina *REQUERIDO*")

        if (!isNaN(valor) && valor >= 1 && valor <= 10) {
            puntuacion = valor;
        }

        else {
            alert("Por favor, ingrese un valor numérico válido.");
        }
        }
        const contacto = new Contacto(nombre, apellido, email, telefono, motivo_contacto, puntuacion);

        const funcion_new = prompt("¿Desea probar nuestra nueva calculadora de iva? ingrese nuevamente Y para aceptar de lo contrario N ").toLowerCase()

        if (funcion_new === "y") {
            let continuar = true
            while (continuar) {
                const precioSinIVA = parseFloat(prompt("Ingrese el precio sin IVA:"));

                if (!isNaN(precioSinIVA)) {
                    const preciofinal= calc_iva(precioSinIVA)
                    alert(`Precio con IVA: $${preciofinal}`);

                    const continuarRespuesta = prompt("¿Desea continuar calculando el IVA? (y/n)").toLowerCase();
                    if (continuarRespuesta === 'n') {
                        continuar = false;
                        alert("Muchas gracias por probar esta utilidad,esperamos que le haya sido util. \n Saludos!");

                    }

                }
                else {
                    alert("Por favor, ingrese un precio válido.");
                }
            }
        }
        else{
            alert("Esperamos que en algun momento desde probarla, saludos!");

        }
    }

else {
    alert("Saludos");
}

function calc_iva(precio){
    const iva = precio * (21 / 100);
    const precioConIVA = precio + iva;
    return precioConIVA
}