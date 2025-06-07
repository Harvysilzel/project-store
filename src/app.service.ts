import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'CREO QUE ESTAS AQUI POR UN ERROR';
  }
}
