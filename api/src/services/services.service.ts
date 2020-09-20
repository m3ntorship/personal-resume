import { Injectable } from '@nestjs/common';
import { Services } from '../types/services';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
export class ServicesService {
  constructor(@InjectModel('Services') private readonly servicesModel:Model<Services>) {}

  async findOne(id: string): Promise<Services> {
    return await this.servicesModel.findOne({ _id: id })
  }

  async create(services: Services): Promise<Services> {
    const newServices = new this.servicesModel(services);
    return await newServices.save();
  }
}