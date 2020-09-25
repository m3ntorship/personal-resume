import { Controller, Get } from '@nestjs/common';
import { AboutService } from './about.service';
import { About } from './entity/about.entity';

@Controller('about')
export class AboutController {
  constructor(private readonly aboutService: AboutService) {};

  @Get()
  async find(): Promise<About[]> {
    return this.aboutService.find();
  }
}
