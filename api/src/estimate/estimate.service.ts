import { Injectable } from '@nestjs/common';
import { Estimate } from '../types/estimate';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
export class EstimateService {
  constructor(@InjectModel('Estimate') private readonly estimateModel:Model<Estimate>) {}

  async findOne(id: string): Promise<Estimate> {
    return await this.estimateModel.findOne({ _id: id })
  }

  async create(estimate: Estimate): Promise<Estimate> {
    const newEstimate = new this.estimateModel(estimate);
    return await newEstimate.save();
  }
}