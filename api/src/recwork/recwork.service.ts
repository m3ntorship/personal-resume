import { Injectable } from '@nestjs/common';
import { Recwork } from '../types/recwork';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
export class RecworkService {
  constructor(@InjectModel('Recwork') private readonly recworkModel:Model<Recwork>) {}

  async findOne(id: string): Promise<Recwork> {
    return await this.recworkModel.findOne({ _id: id })
  }

  async create(recwork: Recwork): Promise<Recwork> {
    const newRecwork = new this.recworkModel(recwork);
    return await newRecwork.save();
  }
}