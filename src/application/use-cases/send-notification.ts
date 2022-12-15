import { Injectable } from '@nestjs/common';
import { Content } from '../entities/content';
import { Notification } from '../entities/notification';
import { NotificationsRepository } from '../repositories/notifications-repository';

export interface SendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

export interface SendNotificationResponse {
  notification: Notification;
}

@Injectable()
export class SendNotification {
  constructor(private notificationRepository: NotificationsRepository) {}

  async execute({
    category,
    content,
    recipientId,
  }: SendNotificationRequest): Promise<SendNotificationResponse> {
    const notification = new Notification({
      category,
      content: new Content(content),
      recipientId,
    });

    await this.notificationRepository.create(notification);

    return {
      notification,
    };
  }
}
