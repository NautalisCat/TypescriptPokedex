import { State } from "./state.js";

export async function commandMap(state: State) {
  const locations = await state.pokeapi.fetchLocations(state.nextLocationsURL);
  state.nextLocationsURL = locations.next;
  state.prevLocationsURL = locations.previous;
  for (const places of locations.results) {
    console.log(places.name);
  }
}
