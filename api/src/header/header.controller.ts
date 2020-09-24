import { Controller, Get, Param } from '@nestjs/common';
import { HeaderService } from './header.service';
import { Header } from './entity/header.entity';

@Controller('header')
export class HeaderController {
  constructor(private readonly headerService: HeaderService) {}

  @Get()
  async findAll(): Promise<Header[]> {
    return this.headerService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Header> {
    return this.headerService.findOne(id)
  }
}
