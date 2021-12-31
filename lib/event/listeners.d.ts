import { TreeChangedEvent, WorldJoinedEvent, WorldLeftEvent } from "./event-types";
import { EventListener } from "./index";

export type EventWithListenerType = {
  /**
   * Triggers when an player has been joined to the world.
   */
  'worldjoined': EventListener<WorldJoinedEvent>;

  /**
   * Triggers when an player has been left from the world.
   */
  'worldleft': EventListener<WorldLeftEvent>;

  /**
   * Triggers when the hierarchy tree was changed.
   */
  'treechanged': EventListener<TreeChangedEvent>;
}

export type EventNames = keyof EventWithListenerType;
