const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
    fullscreen: true,
  });

  // Load your React app
  win.loadURL('http://localhost:3000');

  //   win.loadFile(path.join(__dirname, 'build', 'index.html'));

  // Go full screen
  win.setFullScreen(true);

  // Prevent exiting full screen
  win.on('enter-full-screen', () => {
    console.log('Entered full screen');
  });

  win.on('leave-full-screen', () => {
    console.log('Exited full screen');
    // Re-enter full screen
    win.setFullScreen(true);
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
