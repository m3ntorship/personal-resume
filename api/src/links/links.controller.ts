import { Controller, Get, Param } from '@nestjs/common';
import { LinksService } from './links.service';
import { Links } from './entity/links.entity';

@Controller('links')
export class LinksController {
  constructor(private readonly linksService: LinksService) {};

  @Get()
  async findAll(): Promise<Links[]> {
    return this.linksService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Links> {
    return this.linksService.findOne(id);
  }
};
