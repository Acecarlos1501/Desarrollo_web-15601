function Calificaciones(){
    var calificacion1 = parseInt(document.getElementById("cal1").value); 
    var calificacion2 = parseInt(document.getElementById("cal2").value); 
    var calificacion3 = parseInt(document.getElementById("cal3").value);
    var resultado =(calificacion1+calificacion2+calificacion3)/3;
    var calificacion = document.getElementById("calificacion");
if(resultado>=7){
    calificacion.innerHTML="El alumno aprobo la asignatura "+resultado;
}else{
    calificacion.innerHTML="El alumno reprobo la asignatura "+resultado;
}
}

function toggleDarkMode() {
	var body = document.body;
	body.classList.toggle("dark-mode");
}
