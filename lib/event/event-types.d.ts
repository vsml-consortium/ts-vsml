import { MetaNode } from '../dom/node';
import type { Event } from './index'

/**
 * User event
 */
export interface UserEvent extends Event {
  /**
   * The user id (UUID)
   */
  user_unique_id: string;
  /**
   * The user name
   */
  user_name: string;
  /**
   * The user avatar url of VRM format, wheather it is served over http or data uri.
   */
  user_avatar_url: string;
}

/**
 * User joined event
 */
export interface WorldJoinedEvent extends UserEvent {}
/**
 * User left event
 */
export interface WorldLeftEvent extends UserEvent {}

/**
 * Tree changed event. `target` is the direct node that was changed.
 */
export interface TreeChangedEvent extends Event {
  /**
   * The node that was changed, if detached or attached, or reordered.
   */
  changed_nodes: MetaNode[];
}
