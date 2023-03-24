function mayor(){

    var n1,n2, resultado ="";
    n1 = parseInt(document.getElementById("n1").value)
    n2 = parseInt(document.getElementById("n2").value)
    
    if(n1>n2){
        resultado = "El numero mayor es: "+n1;
    }else if(n1<n2){
        resultado = "El numero mayor es: "+n2;
    }else{
        resultado = "Las cantidades son iguales."
    }
    document.getElementById("resultado").innerHTML = resultado;
}

function toggleDarkMode() {
	var body = document.body;
	body.classList.toggle("dark-mode");
}

