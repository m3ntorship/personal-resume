import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EstimateController } from './estimate.controller';
import { EstimateService } from './estimate.service';
import { EstimateSchema } from '../models/estimate.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Estimate', schema: EstimateSchema }])],
  controllers: [EstimateController],
  providers: [EstimateService],
})

export class EstimateModule {}