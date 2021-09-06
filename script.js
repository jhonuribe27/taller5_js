
// const expresiones = {
// 	usuari: /^[a-zA-Z0]{10,20}$/, // Letras, numeros, guion y guion_bajo
// 	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
// 	password: /^.{4,12}$/, // 4 a 12 digitos.
// 	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
// 	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
// }
const datos = {
    nombre:'',
    apellido:'',
    direccion:'',
    primeraPalabra:'',
    usuario:false,
    password:false,
    rpassword:false,
    email:false,
    telefono:''
}

const nombreInput = document.querySelector('#nombre');
const apellidoInput = document.querySelector('#apellido');
const direccionInput = document.querySelector('#direccion');
const usuarioInput = document.querySelector('#usuario');
const passwordInput = document.querySelector('#password');
const rpasswordInput = document.querySelector('#rpassword');
const emailInput = document.querySelector('#email');
const telefonoInput = document.querySelector('#telefono');
const formulario = document.querySelector('#formulario');

nombreInput.addEventListener('input', leerTexto);
apellidoInput.addEventListener('input', leerTexto);
direccionInput.addEventListener('input', leerTexto);
usuarioInput.addEventListener('input', leerTexto);
passwordInput.addEventListener('input', leerTexto);
rpasswordInput.addEventListener('input', leerTexto);
emailInput.addEventListener('input', leerTexto);
telefonoInput.addEventListener('input', leerTexto);


formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();
    const direccionInput = document.querySelector('#direccion').value
    const palabraCortada = direccionInput.split(" ");
    const primeraPalabra = palabraCortada[0];
    
    const {nombre, apellido, direccion, usuario, password, rpassword, email, telefono} = datos;
     if (nombre === '' || apellido === '' || direccion === '' || usuario === '' || password === '' || rpassword === '' || email === '' || usuario === '') {
        mostrarAlerta('Todos los campos son obligatorios' ,'error')
        return;
    }else if (nombre.length > 25 ) {
        mostrarAlerta('Campo "Nombre" maximo de 25 caracteres', 'error');
        return;
    }else if (apellido.length > 25 ) {
        mostrarAlerta('Campo "Apellido" maximo de 25 caracteres', 'error');
        return;
    }else if (primeraPalabra !== 'cll' && primeraPalabra !== 'cra' && primeraPalabra !== 'av' && primeraPalabra !== 'anv' && primeraPalabra !== 'trans') {
        mostrarAlerta('La dirección debe iniciar con alguna de las siguientes palabras: "cll, cra, av, anv, trans"', 'error') ;
        return;
    }else if (/^[a-zA-Z]{10,20}$/.test(usuario) !== true) {
        mostrarAlerta('Expresion invalida, el CCUsuario no debe contener caracteres extraños', 'error') ;
        mostrarAlerta('O debe tener minimo 10 y maximo 20 caracteres', 'error');
        return;   
    }else if (/^[a-zA-Z]{15,20}$/.test(password) == true) {
        mostrarAlerta('Password debe contener caracteres especiales  [#,%,/,&] ', 'error') ;
        mostrarAlerta('O debe tener minimo 15 y maximo 20 caracteres', 'error');
        return;   
    }else if (password !== rpassword) {
        mostrarAlerta(' Las contraseñas no coinciden ', 'error') ;
        return;   
    }else if (email.length > 120) {
        mostrarAlerta('Campo "email" maximo de 120 caracteres', 'error') ;
        return;   
    }else if (/^[0-9]{7,14}$/.test(telefono) !== true) {
        mostrarAlerta('Campo "telefono" solo acepta numero o mas de 7 numeros', 'error') ;
        return;   
    }
  
    console.log(telefono)
    mostrarAlerta('Mensaje enviado correctamente');
    
    
});


function leerTexto(e) {
    datos[e.target.id] = e.target.value;  
}

function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if(error) {
        alerta.classList.add('error');
    } else {
        alerta.classList.add('correcto');
    } 

    formulario.appendChild(alerta);
    setTimeout(() => {
        alerta.remove();
    }, 7000);
}


//*----------------------------*//

function showDiv(){
    document.getElementById('mostrar').style.display = '';
}