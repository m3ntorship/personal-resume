import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateNavigationDto } from './dto/create-navigation.dto';
import { NavigationService } from './navigation.service';
import { Navigation } from '../types/navigation';

@Controller('navigation')
export class NavigationController {
  constructor(private readonly navigationService: NavigationService) {};

  @Get(':id')
  findOne(@Param('id') id): Promise<Navigation> {
    return this.navigationService.findOne(id);
  }

  @Post()
  create(@Body() createNavigationDto: CreateNavigationDto): Promise<Navigation> {
    return this.navigationService.create(createNavigationDto);
  }
};
