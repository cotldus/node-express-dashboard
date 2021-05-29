const connection = new WebSocket("ws://localhost:3000");
const logWindow = document.querySelector('#log-window');
const filePath = document.getElementById('logFilePath');

connection.onopen = function(event) {
    connection.send("Hello from the client!");
    if (filePath != undefined) {
        connection.send(filePath)
    }
  };
connection.onmessage = function(event){
    let str = event.data.toString('utf8');
    const logs = str.split("\n").join("<hr>");
};