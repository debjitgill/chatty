const app  = require('express')();

const server = require('http').createServer(app);

const io = require('socket.io')(server, {
    cors: {
        origin: "*",
        methods:["GET", "POST"],
        allowedHeaders: ["my-custom-header"],
        credentials: true
      }
})

io.on("connection", (socket)=>{
    console.log("-----------",socket);
    console.log("----connected-------");

    socket.on("chat", (payload)=>{
        console.log("What is payload", payload);
        io.emit("chat", payload)
    })
})

//app.listen(5000, ()=> console.log("server is active"));

server.listen(5000, ()=>{
    console.log("Server is listening is working on 5000...");
})