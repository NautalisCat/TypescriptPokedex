export function cleanInput(input) {
    const splitInput = input.split(" ").filter((word) => word !== "");
    const cleanArray = splitInput.map((word) => word.trim().toLowerCase());
    return cleanArray;
}
export function startREPL(state) {
    state.readline.prompt();
    state.readline.on("line", (line) => {
        const output = cleanInput(line);
        if (output.length === 0) {
            state.readline.prompt();
            return;
        }
        const commandName = output[0];
        const cmd = state.commands[commandName];
        if (cmd) {
            cmd.callback(state);
        }
        else {
            console.log("Unknown command");
        }
        state.readline.prompt();
    });
}
