
/*Esta es la funcion que valida la entrada del usuario y encripta la contaseña del usuario*/

function desde(){


let usuario = document.getElementById("usuario").value;
let pass = document.getElementById("pass").value;
console.log(usuario);
/*Si se introduce un usuario diferente de "Enrique" entonces el usuario es incorrecto*/
if (usuario != "Enrique") {
	/* Si la condición se anterior se cuumple, se ejecutara el "alert" dentro del bloque*/

 alert("El usuario es incorrecto");
 return;

}
/*Si la contaseña es difernte de "123" entonces la contraseña es incorrecta*/
if (pass != 123) {

	/* Si la condicion se anterior se cuumple, se ejecutara el "alert" dentro del bloque*/

	alert("La contraseña es incorrecta, ingresa 123");
	return;

}
/*En esta linea se esta tomando ID "Encriptado" y se llama a la funcion "MD5"*/
/*La función "MD5" se encuentra en la carpeta rollups y se encarga de encriptar la conraseña */
document.getElementById("Encriptado").textContent = CryptoJS.MD5(pass);

}