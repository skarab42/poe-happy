const { app } = require("electron");
const core = require("./core");

app.on("ready", () => core.init());
app.on("quit", () => core.quit());
