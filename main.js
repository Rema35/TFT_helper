const { app, BrowserWindow, ipcMain } = require('electron');

let overlayWindow;

function createOverlayWindow() {
  // Créer une nouvelle fenêtre de type superposition
  overlayWindow = new BrowserWindow({
    width: 400,
    height: 300,
    transparent: true,
    frame: false,
    alwaysOnTop: true,
    webPreferences: {
      nodeIntegration: true
    }
  });

  // Charger le contenu HTML dans la fenêtre de superposition
  overlayWindow.loadFile('overlay.html');

  // Masquer la fenêtre de superposition lorsqu'elle perd le focus
  overlayWindow.on('blur', () => {
    overlayWindow.hide();
  });
}

// Ouvrir la superposition lorsqu'on reçoit le message "open-overlay"
ipcMain.on('open-overlay', () => {
  createOverlayWindow();
});

// Créer la fenêtre principale de l'application
app.whenReady().then(() => {
    console.log("windows_Create");
  createWindow();
});

function createWindow() {
  // Créer une nouvelle fenêtre de type normale
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  // Charger le contenu HTML dans la fenêtre principale
  mainWindow.loadFile('index.html');
}