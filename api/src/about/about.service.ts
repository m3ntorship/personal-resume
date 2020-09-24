import { Injectable } from '@nestjs/common';
import { About } from './entity/about.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AboutService {
  constructor(@InjectModel('About') private readonly aboutModel: Model<About>) {}

  async findAll(): Promise<About[]> {
    return await this.aboutModel.find();
  }

  async findOne(id: string): Promise<About> {
    return await this.aboutModel.findOne({ _id: id });
  }
}
