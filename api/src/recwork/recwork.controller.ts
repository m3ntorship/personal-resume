import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateRecworkDto } from './dto/create-recwork.dto';
import { RecworkService } from './recwork.service';
import { Recwork } from '../types/recwork';

@Controller('recwork')
export class RecworkController {
  constructor(private readonly recworkService: RecworkService) {};

  @Get(':id')
  findOne(@Param('id') id): Promise<Recwork> {
    return this.recworkService.findOne(id);
  }

  @Post()
  create(@Body() createRecworkDto: CreateRecworkDto): Promise<Recwork> {
    return this.recworkService.create(createRecworkDto);
  }
};
