//Funcionalidad del reproductor de música
const audio = document.querySelector("#audio");
const playPauseBtn = document.querySelector("#play-pause-btn");
const seekBar = document.querySelector("#seek-bar");
const skipBtns = document.querySelectorAll("#skip-btn");
const fileInput = document.querySelector("#file-input");
let currentFile;

//Añadir los eventos a los botones de control.
playPauseBtn.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      playPauseBtn.textContent = "Pause";
    } else {
      audio.pause();
      playPauseBtn.textContent = "Play";
    }
  });
  
  skipBtns.forEach((skipBtn) => {
    skipBtn.addEventListener("click", () => {
      audio.currentTime += parseFloat(skipBtn.dataset.skip);
    });
  });
//Agregar la funcionalidad de cargar un archivo de audio
fileInput.addEventListener("change", () => {
    const file = fileInput.files[0];
    if (file.type.startsWith("audio/")) {
      const fileURL = URL.createObjectURL(file);
      audio.src = fileURL;
      audio.load();
      currentFile = file;
    } else {
      alert("Este archivo no se puede reproducir porque no es audio");
    }
  });
//Agregar la funcionalidad de actualizar la barra de búsqueda para mostrar el progreso de la reproducción de audio.
audio.addEventListener("timeupdate", () => {
    seekBar.value = audio.currentTime / audio.duration;
  });
  
  audio.addEventListener("loadedmetadata", () => {
    seekBar.max = audio.duration;
  });
  
function toggleDarkMode() {
	var body = document.body;
	body.classList.toggle("dark-mode");
}
  