import { createInterface } from "readline";
import { getCommands } from "./commands.js";
export function cleanInput(input) {
    const splitInput = input.split(" ").filter((word) => word !== "");
    const cleanArray = splitInput.map((word) => word.trim().toLowerCase());
    return cleanArray;
}
export function startREPL() {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > ",
    });
    rl.prompt();
    rl.on("line", (line) => {
        const output = cleanInput(line);
        if (output.length === 0) {
            rl.prompt();
            return;
        }
        const getRegistry = getCommands();
        const cmd = getRegistry[output[0]];
        if (cmd) {
            cmd.callback(getRegistry);
        }
        else {
            console.log("Unknown command");
        }
        rl.prompt();
    });
}
