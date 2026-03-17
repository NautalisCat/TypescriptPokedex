import { State } from "./state.js";

export function commandHelp(state: State) {
  console.log("Welcome to the Pokedex!");
  for (const [name, cliObject] of Object.entries(state.commands)) {
    console.log(`${name}: ${cliObject.description}`);
  }
}
