import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateUpdpostDto } from './dto/create-updpost.dto';
import { UpdpostService } from './updpost.service';
import { Updpost } from '../types/updpost';

@Controller('updpost')
export class UpdpostController {
  constructor(private readonly updpostService: UpdpostService) {};

  @Get(':id')
  findOne(@Param('id') id): Promise<Updpost> {
    return this.updpostService.findOne(id);
  }

  @Post()
  create(@Body() createUpdpostDto: CreateUpdpostDto): Promise<Updpost> {
    return this.updpostService.create(createUpdpostDto);
  }
};
