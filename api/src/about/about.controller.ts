import { Controller, Get, Param } from '@nestjs/common';
import { AboutService } from './about.service';
import { About } from './entity/about.entity';

@Controller('about')
export class AboutController {
  constructor(private readonly aboutService: AboutService) {}

  @Get()
  async findAll(): Promise<About[]> {
    return this.aboutService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<About> {
    return this.aboutService.findOne(id);
  }
}
