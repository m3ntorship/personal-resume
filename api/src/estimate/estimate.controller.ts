import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateEstimateDto } from './dto/create-estimate.dto';
import { EstimateService } from './estimate.service';
import { Estimate } from '../types/estimate';

@Controller('estimate')
export class EstimateController {
  constructor(private readonly estimateService: EstimateService) {};

  @Get(':id')
  findOne(@Param('id') id): Promise<Estimate> {
    return this.estimateService.findOne(id);
  }

  @Post()
  create(@Body() createEstimateDto: CreateEstimateDto): Promise<Estimate> {
    return this.estimateService.create(createEstimateDto);
  }
};
