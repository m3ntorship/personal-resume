import { Injectable } from '@nestjs/common';
import { Nav } from './interfaces/nav.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
export class NavsService {
  constructor(@InjectModel('Nav') private readonly navModel:Model<Nav>) {}

  async findAll(): Promise<Nav[]> {
    return await this.navModel.find()
  }

  async findOne(id: string): Promise<Nav> {
    return await this.navModel.findOne({ _id: id })
  }

  async create(nav: Nav): Promise<Nav> {
    const newNav = new this.navModel(nav);
    return await newNav.save();
  }
}
