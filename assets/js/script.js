function toggleMode() {
    x = document.querySelector('body');
    x.classList.toggle('white-mode');
    
}

let button = document.getElementById('abox');
button.onclick = toggleMode;