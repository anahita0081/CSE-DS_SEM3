const EventEmitter = require("events");

const myEmitter = new EventEmitter();

myEmitter.on("click", () => {
    console.log("Button was clicked!");
});

myEmitter.on("greet", (name) => {
    console.log("Hello " + name);
});
myEmitter.emit("click");
myEmitter.emit("greet", "Anahita");