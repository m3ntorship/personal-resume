import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EstimateSchema } from 'src/models/estimate.schema';
import { EstimateController } from './estimate.controller';
import { EstimateService } from './estimate.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Estimate', schema: EstimateSchema }])],
  controllers: [EstimateController],
  providers: [EstimateService]
})
export class EstimateModule {}
