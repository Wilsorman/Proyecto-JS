document.getElementById("contactForm").addEventListener("submit", (event) => {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;
    const motivo = document.getElementById("motivo").value;
    const puntuacion = document.getElementById("puntuacion").value;

    const formularioEnviadoExitosamente = true;

    if (formularioEnviadoExitosamente) {
        let datosContacto = JSON.parse(localStorage.getItem("datosContacto")) || [];

        if (typeof datosContacto !== "array") {
            datosContacto = [];
        }
        
        const datosContactoArray = {
            nombre,
            apellido,
            email,
            telefono,
            motivo,
            puntuacion
        };

        datosContacto.push(datosContactoArray);

        const datosContactoJSON = JSON.stringify(datosContacto);

        localStorage.setItem("datosContacto", datosContactoJSON);
        sessionStorage.setItem("datosTemp", datosContactoJSON);

        console.log(datosContactoArray);
        
        document.getElementById("nombre").value = "";
        document.getElementById("apellido").value = "";
        document.getElementById("email").value = "";
        document.getElementById("telefono").value = "";
        document.getElementById("motivo").value = "";
        document.getElementById("puntuacion").value = "";

        Swal.fire({
            title: '¡Alerta!',
            text: 'El formulario fue enviado correctamente',
            icon: 'success',
            confirmButtonText: 'OK'
        });
    }   
});
