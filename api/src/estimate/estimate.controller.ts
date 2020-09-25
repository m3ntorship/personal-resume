import { Controller, Get } from '@nestjs/common';
import { EstimateService } from './estimate.service';
import { Estimate } from './entity/estimate.entity';

@Controller('estimate')
export class EstimateController {
  constructor(private readonly estimateService: EstimateService) {}

  @Get()
  async find(): Promise<Estimate[]> {
    return this.estimateService.find();
  }
}
