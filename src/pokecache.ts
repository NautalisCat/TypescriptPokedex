export type CacheEntry<T> = {
  createdAt: number;
  val: T;
};

export class Cache {
  //Pass a number parameter to the constructor() method and assign its value to this.#interval. Call this.#startReapLoop() in the constructor() method to get the loop started.
  constructor(intervalValue: number) {
    this.#interval = intervalValue;
    this.#startReapLoop();
  }
  #cache = new Map<string, CacheEntry<any>>();
  #reapIntervalId: NodeJS.Timeout | undefined = undefined;
  #interval: number;

  add<T>(key: string, val: T) {
    const newEntry = {
      createdAt: Date.now(),
      val: val,
    };
    this.#cache.set(key, newEntry);
  }
  get<T>(key: string) {
    const objectVal = this.#cache.get(key);
    return objectVal?.val;
  }
  #reap() {
    //Create a #reap() method to delete any entries that are older than the interval. It should loop through the cache and delete any entries that are older than Date.now() - this.#interval
    for (const [key, value] of this.#cache) {
      if (value.createdAt < Date.now() - this.#interval) {
        this.#cache.delete(key);
      }
    }
  }
  #startReapLoop() {
    //Create a #startReapLoop() method that uses setInterval() to call this.#reap() after a delay of this.#interval and store the interval ID in this.#reapIntervalId.
    this.#reapIntervalId = setInterval(() => this.#reap(), this.#interval);
  }
  stopReapLoop() {
    //Create a public (non-#) stopReapLoop() method that uses clearInterval() to stop the reap loop and set this.#reapIntervalId back to undefined.
    clearInterval(this.#reapIntervalId);
    this.#reapIntervalId = undefined;
  }
}
