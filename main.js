const { app, BrowserWindow, Notification } = require('electron')
const path = require('path')

const createWindow = () => {
  const win = new BrowserWindow({
    transparent: true, 
    backgroundColor: '#1f1f1f',
    
    titleBarStyle: 'hiddenInset',


    titleBarOverlay: {
      
      color: '#292a2e',
      transparent: true,
      symbolColor: 'rgba(47, 241, 151, 1)'
      
    },
    width: 800,
    height: 600,
    icon: __dirname + '/assents/img/logoapp.png',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    
    },
  
  })
  
  win.setMenu(null)
  

win.loadFile('index.html')
  ipcMain.handle('dark-mode:toggle', () => {
    if (nativeTheme.shouldUseDarkColors) {
      nativeTheme.themeSource = 'light'
    } else {
      nativeTheme.themeSource = 'dark'
    }
    return nativeTheme.shouldUseDarkColors
  })

  ipcMain.handle('dark-mode:system', () => {
    nativeTheme.themeSource = 'system'
  })
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
