export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";

  constructor() {}

  async fetchLocations(pageURL?: string | null): Promise<ShallowLocations> {
    let url = `${PokeAPI.baseURL}/location-area`;
    if (pageURL) {
      url = pageURL;
    }
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
  async fetchLocation(locationName: string): Promise<Location> {
    let url = `${PokeAPI.baseURL}/location-area/${locationName}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
}

export type ShallowLocations = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Result[];
};

export interface Result {
  name: string;
  url: string;
}

export type Location = {
  // add properties here
};
