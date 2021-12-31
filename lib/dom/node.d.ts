import { EventListenerCancellationToken, EventTarget, EventListener } from "../event/index";
import { EventNames, EventWithListenerType } from "../event/listeners";

/**
 * An interface querable with a selector.
 */
interface Querable {
  /**
   * Select the first element that matches the query. If no element matches, returns `null`.
   * @param query query string
   */
  querySelector(query: string): MetaNode | null;
  /**
   * Select all elements that match the query.
   * @param query query string
   */
  querySelectorAll(query: string): MetaNode[];
}

/**
 * A node in the DOM of the VSML.
 */
export interface MetaNode extends Querable, EventTarget {
  /**
   * joint content of descendant text nodes
   */
  textContent: string;
  /**
   * next sibling node in the same parent. `null` if this is the last node.
   */
  readonly nextSibling: MetaNode | null;
  /**
   * previous sibling node in the same parent. `null` if this is the first node.
   */
  readonly previousSibling: MetaNode | null;
  /**
   * parent node. `null` if this is the root node or detached.
   */
  readonly parentNode: MetaNode | null;

  /**
   * Append a node to the end of this node as a new child.
   * @param node a node to be inserted at the last position of this node's children
   */
  appendChild(node: MetaNode): MetaNode;
  /**
   * Get `nth` child of this node. `null` if the index is out of range.
   * @param index child index
   */
  getChild(index: number): MetaNode | null;
  /**
   * Remove this node from the tree
   */
  remove(): void;
  /**
   * Remove a node from the tree
   * @param node the node to be removed
   */
  removeChild(node: MetaNode): MetaNode;

  /**
   * Get an attribute value of this node. `null` if the attribute does not set.
   * @param name attribute name
   */
  getAttribute(name: string): string | null;
  /**
   * Get an attribute value of this node. `defaultValue` will be used if the attribute does not set.
   * @param name attribute name
   * @param defaultValue default value if the attribute does not set
   */
  getAttribute(name: string, defaultValue: string): string;
  /**
   * Get an attribute value of this node with the `namespace`. `null` if the attribute does not set.
   * @param namespace namespace of the attribute
   * @param name attribute name
   */
  getAttributeNS(namespace: string, name: string): string | null;
  /**
   * Get an attribute value of this node with the `namespace`. `defaultValue` will be used if the attribute does not set.
   * @param namespace namespace of the attribute
   * @param name attribute name
   * @param defaultValue default value if the attribute does not set
   */
  getAttributeNS(namespace: string, name: string, defaultValue: string): string;

  /**
   * Set an attribute value of this node.
   * @param name attribute name
   * @param value attribute value
   */
  setAttribute(name: string, value: string): void;
  /**
   * Set an attribute value of this node with the `namespace`.
   * @param namespace namespace of the attribute
   * @param name attribute name
   * @param value attribute value
   */
  setAttributeNS(namespace: string, name: string, value: string): void;

  addEventListener<Ev extends EventNames>(event: Ev, listener: EventWithListenerType[Ev]): EventListenerCancellationToken;
}

/**
 * Document tree of the VSML.
 */
export interface MetaDocument extends Querable {
  /**
   * Create a new vsml node.
   * @param tagName tag name
   */
  createNode(tagName: string): VSMLNode;
  /**
   * Create a new text node.
   * @param text text content
   */
  createTextNode(text: string): MetaNode;
}

export interface VSMLNode extends MetaNode {}
