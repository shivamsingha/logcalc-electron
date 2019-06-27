const { app, BrowserWindow } = require('electron');
const url = require('url');
const path = require('path');

let win;

function createWindow() {
  win = new BrowserWindow({ width: 800, height: 400 });
  win.setMenu(null);
  win.loadURL(
    url.format({
      pathname: path.join(__dirname, '../res/index.html'),
      protocol: 'file:',
      slashes: true
    })
  );
}

app.on('ready', createWindow);