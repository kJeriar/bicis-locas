function validateForm(){

	document.querySelectionAll(".form-signup span").forEach(function(e){
		e.remove()
	});

	/* todos los campos obligatorios */
	/* solo letras de la a a la z en nombre y apellido */
	/* la primera letra mayuscula */
	/* validar el email  :D*/
	/* contraseña de 6 caracteres */
	/* contraseña diferente a 123456 o 098754 o password */
	/* si algun campo presenta error hay q informar al usuario */

	/* validar contenedores */
	var letras = /^[A-Za]*$/;
	var correo = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    /*datos de la ficha */
	var nombre = document.getElementById("name").value;
	var apellido = document.getElementById("lastname").value;
	var email = document.getElementById("input-email").value;
	var password = document.getElementById("input-password").value;

	/* validar que los campos no queden vacios y contengan los elementos indicados */

	if (nombre.length == 0 || nombre == null) {
		var texto = document.createTextNode("te faltan campos por contestar");
		var contenedor = document.getElementByClassName("input-box")[0];
		var res = document.createElement("span");
		contenedor.appendChild(res);
		res.appendChild(texto);
		console.log(nombre + "campo vacio");

	}

 	if (apellido == null || apellido.length == 0) {
 		var texto = document.createTextNode("te faltan campos por contestar");
		var contenedor = document.getElementByClassName("input-box")[1];
		var res = document.createElement("span");
		contenedor.appendChild(res);
		res.appendChild(texto);
		console.log(apellido + "campo vacio");
	}

	if (email == null || email.length == 0) {
		var texto = document.createTextNode("te faltan campos por contestar");
		var contenedor = document.getElementByClassName("input-box")[2];
		var res = document.createElement("span");
		contenedor.appendChild(res);
		res.appendChild(texto);
		console.log(email + "campo vacio");
	}

	 if (password == null || password.length == 0) {
	 	var texto = document.createTextNode("te faltan campos por contestar");
		var contenedor = document.getElementByClassName("input-box")[3];
		var res = document.createElement("span");
		contenedor.appendChild(res);
		res.appendChild(texto);
		console.log(password + "campo vacio");
	}


	// limpia 
    document.getElementById("name").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("input-email").value = "";
    document.getElementById("input-password").value = "";
    document.getElementById("selector").value = "0";
    document.getElementById("input-social").value = "";
}
