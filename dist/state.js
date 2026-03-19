import { createInterface } from "readline";
import { getCommands } from "./commands.js";
import { PokeAPI } from "./pokeapi.js";
export function initState() {
    const readline = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > ",
    });
    const commands = getCommands();
    const pokeapi = new PokeAPI();
    return {
        readline,
        commands,
        pokeapi,
        nextLocationsURL: null,
        prevLocationsURL: null,
    };
}
