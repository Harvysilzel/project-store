import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'hola mundo aqui no hay nada que ver!';
  }
}
