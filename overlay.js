const {ipcRenderer } = require('electron');

document.getElementById("openOverlayButton").addEventListener('click', () => {
    // Envoyer un message à main.js pour ouvrir la superposition
    console.log("bouton_cliquer");
    ipcRenderer.send('open-overlay');
});