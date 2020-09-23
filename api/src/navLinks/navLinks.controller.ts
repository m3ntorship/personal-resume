import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateLinksDto } from './dto/create-navLinks.dto';
import { LinksService } from './navLinks.service';
import { Links } from '../types/navLinks';

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

  @Post()
  async create(@Body() createLinksDto: CreateLinksDto): Promise<Links> {
    return this.linksService.create(createLinksDto);
  }
};
