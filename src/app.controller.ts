import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return {
      message: 'hola mundo lo estoy haciendo bien',
    };
  }

  @Post()
  saveInfo(@Body() body: any){
    return{
      ...body,
    }
  }


}
