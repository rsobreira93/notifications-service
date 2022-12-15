import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const content = new Content('Você recebeu uma nova solicitação de amizade');

    const notification = new Notification({
      content,
      recipientId: 'some-recipient',
      category: 'social',
    });

    expect(notification).toBeTruthy();
  });
});
