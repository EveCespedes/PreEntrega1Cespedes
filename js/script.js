function envioDomicilio () {
    let direccion = prompt ("Te podemos enviar los escabiosos a tu domicilio !! Ingresa tu direccion :");
    alert ( "Vamos a enviar tu producto a" + direccion +  "dentro del rango horario de 14 pm a 20 pm");
}



alert("Hola Bienvenidos a Escabioso")

let edadDelUsuario = prompt("Ingrese su edad")
let edadMayoritaria = 18


for (let i = 0; i < 3; i++) {
    if (edadDelUsuario == "") {
        alert("Por favor ingrese su edad !!!")
        console.log("No ingresaste tu edad")
        edadDelUsuario = prompt("Ingrese su edad")

    } else if (edadDelUsuario >= edadMayoritaria) {
        alert("Podes ingresar sos mayor a 18")
        console.log("Bienvenido")
        break
    } else if (edadMayoritaria >= edadDelUsuario) {
        alert("No podes ingresar, vuelve cuando cumplas 18 !!!")
        console.log("Fuera de aqui")
        break

    }
}


if (edadDelUsuario >= edadMayoritaria ) {


alert("Te ayudaremos a guiarte segun la plata que tengas a comprar el escabioso que te alcance")

let plataMinima = 5000
let plataMaxima = 10000
let cuantoDineroTienes = prompt("Ingrese la cantidad de dinero que tienes")



if (cuantoDineroTienes == "") {
    alert("Ingresa cuanto dienero tienes");
    console.log("No ingresaste tu dinero");
    cuantoDineroTienes = prompt("Ingrese la cantidad de dinero que tienes");
} else if (cuantoDineroTienes <= plataMinima) {
    alert("Te alcanza para Escabiosos gama media ")
    console.log("Te alcanza la gama media")


    let opcion = prompt("Elegi una opcion: n\ 1-Fernet 1888 n\ 2-Smirnoff n\ 3-Gordons n\ 4-Campari n\ 5-Sidra ");
    switch (opcion) {
        case "1":
            alert(" Elegiste Fernet 1888");
            break
        case "2":
            alert("Elegiste Smirnoff");
            break
        case "3":
            alert("Elegiste Gordons");
            break
        case "4":
            alert("Elegiste Campari");
            break
        case "5":
            alert("Elegiste Sidra");
            break;
        default:
            alert("No elegiste ninguna opcion")
            break

    }
    
} else if (cuantoDineroTienes >= plataMaxima) {
    alert("Te alcanza para escabiosos gama alta");
    console.log("Te alzanza para escabiosos gama alta")


    let opcionDos = prompt("Eleja una opcion: n\ 1-Whisky n\ 2-Ron n\ 3-vinos n\ 4-Absolut n\ 5-Chandon ");
    switch (opcionDos) {
        case "1":
            alert(" Elegiste Whisky");
            break
        case "2":
            alert("Elegiste Ron");
            break
        case "3":
            alert("Elegiste Vinos");
            break
        case "4":
            alert("Elegiste Absolut");
            break
        case "5":
            alert("Elegiste chandon");
            break;
        default:
            alert("No elegiste ninguna opcion")
            break

    }
    
}
}



envioDomicilio ()

alert("Gracias por tu compra");
console.log("Gracias por elegirnos")