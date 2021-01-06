import { Injectable } from '@nestjs/common';
import { Services } from './entity/services.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ServicesService {
  constructor(@InjectModel('Services') private readonly servicesModel: Model<Services>) {};

  async find(): Promise<Services[]> {
    return await this.servicesModel.find().populate('cards');
  }
}
