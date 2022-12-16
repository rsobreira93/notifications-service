import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['useful-cockatoo-12178-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'dXNlZnVsLWNvY2thdG9vLTEyMTc4JMg3kwfDpeENGCFGv8bbQBEPCei5Xakkano',
          password:
            'Jr8bV47PtwyyvrrTApqrI8EqIOD9h2ou8KnzPLjbl9qp4wFGd-MRWM3mV4hNPxdl84-XAg==',
        },
        ssl: true,
      },
    });
  }
  async onModuleDestroy() {
    await this.close();
  }
}
