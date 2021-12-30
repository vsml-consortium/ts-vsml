export type EventListener<E = Event> = (event: E) => void;
export type EventListenerCancellationToken = number & { __isCancellationToken: true };

export interface EventTarget {
  addEventListener(event: string, listener: EventListener): EventListenerCancellationToken;
  removeEventListener(event: string, listener: EventListener): void;
  removeEventListener(event: string, token: EventListenerCancellationToken): void;
  dispatchEvent(event: Event): boolean;
}

export interface Event {
  stopPropagation(): void;
  preventDefault(): void;
  currentTarget: EventTarget;
  target: EventTarget;
}
