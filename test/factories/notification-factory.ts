import { Content } from '@application/entities/content';
import {
  Notification,
  NotificationData,
} from '@application/entities/notification';

type Override = Partial<NotificationData>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    category: 'notification',
    content: new Content('some content'),
    recipientId: 'some-recipient',
    ...override,
  });
}
