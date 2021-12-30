import type { MetaDocument } from './lib/dom/node';

export interface World {
    document: MetaDocument;
}

declare global {
    var world: World & typeof globalThis;
}
