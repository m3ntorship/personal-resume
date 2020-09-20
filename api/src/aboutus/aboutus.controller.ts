import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateAboutusDto } from './dto/create-aboutus.dto';
import { AboutusService } from './aboutus.service';
import { Aboutus } from '../types/aboutus';

@Controller('aboutus')
export class AboutusController {
  constructor(private readonly aboutusService: AboutusService) {};

  @Get(':id')
  findOne(@Param('id') id): Promise<Aboutus> {
    return this.aboutusService.findOne(id);
  }

  @Post()
  create(@Body() createAboutusDto: CreateAboutusDto): Promise<Aboutus> {
    return this.aboutusService.create(createAboutusDto);
  }
};
