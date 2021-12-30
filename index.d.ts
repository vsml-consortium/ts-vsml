export interface World {
}

declare global {
    var world: World & typeof globalThis;
}
