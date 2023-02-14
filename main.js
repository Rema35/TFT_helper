const { app, BrowserWindow } = require('electron');

function createWindow() {
  // Créer une fenêtre de navigateur.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  // Charger l'index.html de l'application.
  win.loadFile('index.html');

  // Ouvre les DevTools (outils de développement).
  // win.webContents.openDevTools();

  // Émit lorsque la fenêtre est fermée.
  win.on('closed', () => {
    // Dé-référence l'objet window, normalement, vous stockeriez les fenêtres
    // dans un tableau si votre application supporte le multi-fenêtre. C'est le moment
    // où vous devez supprimer l'élément correspondant.
    win = null;
  });
}

// Cette méthode sera appelée quant Electron aura fini de s'initialiser
// et sera prêt à créer des fenêtres de navigation.
// Certaines APIs peuvent être utilisées uniquement quant cet événement est émit.
app.on('ready', createWindow);

// Quitte l'application quand toutes les fenêtres sont fermées.
app.on('window-all-closed', () => {
  // Sur macOS, il est courant pour une application et leur barre de menu
  // de rester active jusqu'à ce que l'utilisateur quitte explicitement avec Cmd + Q.
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // Sur macOS, il est courant de recréer une fenêtre d'application quand
  // l'icône du dock est cliquée et qu'il n'y a pas d'autres fenêtres d'ouvertes.
  if (win === null) {
    createWindow();
  }
});

// Dans ce fichier, vous pouvez inclure le reste de votre
// code spécifique du processus principal de votre application.




