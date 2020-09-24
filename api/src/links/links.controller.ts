import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { LinksDto } from './dto/links.dto';
import { LinksService } from './links.service';
import { Links } from '../types/links';

@Controller('links')
export class LinksController {
  constructor(private readonly linksService: LinksService) {};

  @Get()
  findAll(): Promise<Links[]> {
    return this.linksService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id): Promise<Links> {
    return this.linksService.findOne(id);
  }
};
