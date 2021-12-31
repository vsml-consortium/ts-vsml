export type EventListener<E = Event> = (event: E) => void;
export type EventListenerCancellationToken = number & { __isCancellationToken: true };

/**
 * Event target
 */
export interface EventTarget {
  /**
   * Attaches an event listener to the target.
   * @param event the name of events to listen for
   * @param listener listener function
   * @returns a cancellation token to remove the listener
   */
  addEventListener(event: string, listener: EventListener): EventListenerCancellationToken;
  /**
   * Removes an event listener listening to events with the name from the target.
   * @param event the name of events to detach listener
   * @param listener listener function to remove
   */
  removeEventListener(event: string, listener: EventListener): void;
  /**
   * Removes an event listener listening to events with the name from the target.
   * @param event the name of events to detach listener
   * @param token the result of `addEventListener`, when the listener is attached
   */
  removeEventListener(event: string, token: EventListenerCancellationToken): void;
  /**
   * Dispatches an event to the target.
   * @param event event to dispatch
   * @returns `true` if the event was executed, `false` otherwise
   */
  dispatchEvent(event: Event): boolean;
}

/**
 * The most common type of all events.
 */
export interface Event {
  /**
   * Stop event propagation to ascendant nodes.
   */
  stopPropagation(): void;
  /**
   * Prevent default action of the event.
   */
  preventDefault(): void;
  /**
   * Current target of the event.
   */
  currentTarget: EventTarget;
  /**
   * Source target of the event.
   */
  target: EventTarget;
}
