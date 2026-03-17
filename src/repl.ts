import type { State } from "./state.js";

export function cleanInput(input: string): string[] {
  const splitInput = input.split(" ").filter((word) => word !== "");
  const cleanArray = splitInput.map((word: string) =>
    word.trim().toLowerCase(),
  );
  return cleanArray;
}

export function startREPL(state: State) {
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
    } else {
      console.log("Unknown command");
    }

    state.readline.prompt();
  });
}
