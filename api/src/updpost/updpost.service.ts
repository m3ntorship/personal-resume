import { Injectable } from '@nestjs/common';
import { Updpost } from '../types/updpost';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
export class UpdpostService {
  constructor(@InjectModel('Updpost') private readonly updpostModel:Model<Updpost>) {}

  async findOne(id: string): Promise<Updpost> {
    return await this.updpostModel.findOne({ _id: id })
  }

  async create(updpost: Updpost): Promise<Updpost> {
    const newUpdpost = new this.updpostModel(updpost);
    return await newUpdpost.save();
  }
}