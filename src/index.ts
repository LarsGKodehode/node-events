// Imports
import { logEvents } from "./utilities/logEvents";
import { EventEmitter } from "events";


// Global declaration
declare global {
  var __basedir: string;
};

// Global variables
global.__basedir = __dirname;

class TheEmitter extends EventEmitter {};

const emitter = new TheEmitter();

setTimeout(() => {
  emitter.emit("log", "Somthing changed");
}, 2000);

logEvents("Booting up");
logEvents("Do funky stuff");
logEvents("Shutting down");