export async function commandMapb(state) {
    if (!state.prevLocationsURL) {
        console.log("You are on the first page");
        return;
    }
    const prevLocations = await state.pokeapi.fetchLocations(state.prevLocationsURL);
    state.nextLocationsURL = prevLocations.next;
    state.prevLocationsURL = prevLocations.previous;
    for (const places of prevLocations.results) {
        console.log(places.name);
    }
}
