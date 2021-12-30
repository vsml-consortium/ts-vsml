import { EventTarget } from "../event";

interface Querable {
  querySelector(query: string): MetaNode | null;
  querySelectorAll(query: string): MetaNode[];
}

export interface MetaNode extends Querable, EventTarget {
  textContent: string;
  nextSibling: MetaNode | null;
  previousSibling: MetaNode | null;
  parentNode: MetaNode | null;

  appendChild(node: MetaNode): MetaNode;
  getChild(index: number): MetaNode | null;
  remove(): void;
  removeChild(node: MetaNode): MetaNode;

  getAttribute(name: string): string | null;
  getAttribute(name: string, defaultValue: string): string;
  getAttributeNS(namespace: string, name: string): string | null;
  getAttributeNS(namespace: string, name: string, defaultValue: string): string;

  setAttribute(name: string, value: string): void;
  setAttributeNS(namespace: string, name: string, value: string): void;
}

export interface MetaDocument extends Querable {
  createNode(tagName: string): VSMLNode;
  createTextNode(text: string): MetaNode;
}

export interface VSMLNode extends MetaNode {}
