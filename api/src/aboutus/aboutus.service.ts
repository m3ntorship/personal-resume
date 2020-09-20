import { Injectable } from '@nestjs/common';
import { Aboutus } from '../types/aboutus';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
export class AboutusService {
  constructor(@InjectModel('Aboutus') private readonly aboutusModel:Model<Aboutus>) {}

  async findOne(id: string): Promise<Aboutus> {
    return await this.aboutusModel.findOne({ _id: id })
  }

  async create(aboutus: Aboutus): Promise<Aboutus> {
    const newAbout = new this.aboutusModel(aboutus);
    return await newAbout.save();
  }
}