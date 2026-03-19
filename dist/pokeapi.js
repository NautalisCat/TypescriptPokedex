export class PokeAPI {
    static baseURL = "https://pokeapi.co/api/v2";
    constructor() { }
    async fetchLocations(pageURL) {
        let url = `${PokeAPI.baseURL}/location-area`;
        if (pageURL) {
            url = pageURL;
        }
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    async fetchLocation(locationName) {
        let url = `${PokeAPI.baseURL}/location-area/${locationName}`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
}
