function validate() {
    var username = document.getElementById("username").value;//etiqueta id username
    const invitados = {
        '23008888': function () {
            //cesar

        },
        '42173645': function () {
            //lisbeth

        },
        '74950634': function () {
            //Thezero

        },
        '40831420': function () {
            //balak

        },
        '42887511': function () {
            //Gato
        },
        '22517904': function () {
            //octavia
        },
        '73600696': function () {
            //Mahily
        },
        '48823642': function () {
            //Bocho
        },
        '47206802': function () {
            //Jimy
        },
        'admin': function () {
            //ADMIN
        },
        '61163773': function () {
            //JuanRengifo
        },
        '72268378': function () {
            //BRENNIS CASTRO
        },
        '77387314': function () {
            //Andy Peñaloza
        },
        '75081930': function () {
            //Diego Checya
        },
        '71789677': function () {
            //Davis Lopez
        }
    }

    const variable = username;

    if (variable in invitados) {
        invitados[variable]();
        alert("Si estás en lista");
        window.open("/Restaurant/principal.html")
        //window.open("D:/TRABAJOS MIGUEL/PAGINAS WEB/HTML5/Plantillas/phishing/NETFLIX/Restaurant-Fabian")
    } else {
        alert("NO ESTAS EN LA LISTA \n \n*escribe sin dejar espacios");
    }
}

let noso = document.getElementById("nosotros")
var clies = document.getElementById("clientes")
noso.onclick = function () {
    alert("| 𝕊𝕖𝕔𝕔𝕚ó𝕟 𝕖𝕟 𝕕𝕖𝕤𝕒𝕣𝕣𝕠𝕝𝕝𝕠 |\n\n| 𝔸𝕢𝕦í 𝕚𝕣𝕒 𝕝𝕒 𝕗𝕠𝕥𝕠 𝕕𝕖 𝕝𝕠𝕤 𝕚𝕟𝕥𝕖𝕘𝕣𝕒𝕟𝕥𝕖𝕤 |")
    console.log("| 𝕊𝕖𝕔𝕔𝕚ó𝕟 𝕖𝕟 𝕕𝕖𝕤𝕒𝕣𝕣𝕠𝕝𝕝𝕠 |\n\n| 𝔸𝕢𝕦í 𝕚𝕣𝕒 𝕝𝕒 𝕗𝕠𝕥𝕠 𝕕𝕖 𝕝𝕠𝕤 𝕚𝕟𝕥𝕖𝕘𝕣𝕒𝕟𝕥𝕖𝕤 |")
}
clies.onclick = function () {
    alert("| Sección en Desarrollo |\n\n| Aqui irá imagenes de clientes posteriores |")
}

//SI LEES ESTO ERES ******
