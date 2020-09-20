import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateServicesDto } from './dto/create-services.dto';
import { ServicesService } from './services.service';
import { Services } from '../types/services';

@Controller('services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {};

  @Get(':id')
  findOne(@Param('id') id): Promise<Services> {
    return this.servicesService.findOne(id);
  }

  @Post()
  create(@Body() createServicesDto: CreateServicesDto): Promise<Services> {
    return this.servicesService.create(createServicesDto);
  }
};
