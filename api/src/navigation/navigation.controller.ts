import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateNavigationDto } from './dto/create-navigation.dto';
import { NavigationService } from './navigation.service';
import { Navigation } from '../types/navigation';

@Controller('navigation')
export class NavigationController {
  constructor(private readonly navigationService: NavigationService) {};

  @Get()
  findAll(): Promise<Navigation[]> {
    return this.navigationService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id): Promise<Navigation> {
    return this.navigationService.findOne(id);
  }

  @Post()
  async create(@Body() createNavigationDto: CreateNavigationDto): Promise<Navigation> {
    return this.navigationService.create(createNavigationDto);
  }

  @Delete(':id')
  delete(@Param('id') id): Promise<Navigation> {
    return this.navigationService.delete(id);
  }

  @Put(':id')
  update(@Body() updateNavigationDto: CreateNavigationDto, @Param('id') id): Promise<Navigation> {
    return this.navigationService.update(id, updateNavigationDto);
  }
};
