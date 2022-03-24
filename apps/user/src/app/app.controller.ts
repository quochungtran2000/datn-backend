import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  @MessagePattern({ cmd: 'a' })
  getData(data: any) {
    console.log({ data });
    return this.appService.getData();
  }
}
