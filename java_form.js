function leer() {
    // Referencia por pseudoclase (formulario -> nombre)
    var nombre = document.forms["formulario"].elements[0].value;

    // Referencia por id (contraseña y checkbox)
    var clave = document.getElementById("pass").value;
    var aceptoTerminos = document.getElementById("casilla").checked;

    // Referencia por name (género)
    var generoInputs = document.getElementsByName("gender");
    var genero = ""; // inicializar para evitar 'undefined'
    for (var i = 0; i < generoInputs.length; i++) {
        if (generoInputs[i].checked) {
            genero = generoInputs[i].value;
            break;
        }
    }

    // Referencia por etiqueta (select -> carrera)
    var carrera = document.getElementsByTagName("select")[0].value;

    // Mostrar resultado
    document.getElementById("resultado").innerHTML =
        "Tu nombre es: " + nombre +
        "<br>Tu contraseña es: " + clave +
        "<br>Eres de la carrera de: " + carrera +
        "<br>Tu género es: " + genero +
        "<br>Términos y condiciones: " + (aceptoTerminos ? "Aceptados" : "No aceptados");
}
