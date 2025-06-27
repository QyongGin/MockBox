// Electron 앱 런타임 (Go 연동 포함)                

// main.js
const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.loadFile("index.html");
}

app.whenReady().then(createWindow);

const { ipcMain } = require("electron");

ipcMain.on("save-spec", (event, data) => {
  console.log("명세 수신됨:", data);
  // → 여기서 Go 코드 실행하거나 파일로 저장 가능
});

