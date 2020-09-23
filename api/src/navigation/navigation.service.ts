import { Injectable } from '@nestjs/common';
import { Navigation } from '../types/navigation';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
export class NavigationService {
  constructor(@InjectModel('Navigation') private readonly navigationModel:Model<Navigation>) {}

  async findAll(): Promise<Navigation[]> {
    return await this.navigationModel.find();
  }

  async findOne(id: string): Promise<Navigation> {
    return await this.navigationModel.findOne({ _id: id })
  }

  async create(navigation: Navigation): Promise<Navigation> {
    const newNavigation = new this.navigationModel(navigation);
    return await newNavigation.save();
  }

  async delete(id: string): Promise<Navigation> {
    return await this.navigationModel.findByIdAndRemove(id);
  }

  async update(id: string, navigation: Navigation): Promise<Navigation> {
    return await this.navigationModel.findByIdAndUpdate(id, navigation, { new: true })
  }
}