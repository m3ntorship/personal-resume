import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateNavDto } from './dto/create-nav.dto';
import { NavsService } from './navs.service';
import { Nav } from './interfaces/nav.interface';


@Controller('navs')
export class NavsController {
  constructor(private readonly navsService: NavsService) {}

  @Get()
  findAll(): Promise<Nav[]> {
    return this.navsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): Promise<Nav> {
    return this.navsService.findOne(id);
  }

  @Post()
  create(@Body() createNavDto: CreateNavDto): Promise<Nav> {
    return this.navsService.create(createNavDto);
  }

}
