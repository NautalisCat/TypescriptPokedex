import { createInterface } from "readline";

export function cleanInput(input: string): string[] {
  const splitInput = input.split(" ").filter((word) => word !== "");
  const cleanArray = splitInput.map((word: string) =>
    word.trim().toLowerCase(),
  );
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
    console.log(`Your command was: ${output[0]}`);
    rl.prompt();
  });
}
