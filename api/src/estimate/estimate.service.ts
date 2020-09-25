import { Injectable } from '@nestjs/common';
import { Estimate } from './entity/estimate.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class EstimateService {
  constructor(@InjectModel('Estimate') private readonly estimateModel: Model<Estimate>) {}

  async find(): Promise<Estimate[]> {
    return await this.estimateModel.find();
  }
}
