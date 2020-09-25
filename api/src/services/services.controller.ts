import { Controller, Get } from '@nestjs/common';
import { ServicesService } from './services.service';
import { Services } from './entity/services.entity';

@Controller('services')
export class ServicesController {
  constructor(private readonly servService: ServicesService) {};

  @Get()
  async find(): Promise<Services[]> {
    return this.servService.find();
  }
};
