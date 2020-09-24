import { Injectable } from '@nestjs/common';
import { Links } from './entity/links.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
export class LinksService {
  constructor(@InjectModel('Links') private readonly linksModel:Model<Links>) {}

  async findAll(): Promise<Links[]> {
    return await this.linksModel.find();
  }

  async findOne(id: string): Promise<Links> {
    return await this.linksModel.findOne({ _id: id })
  }

  async create(links: Links): Promise<Links> {
    const newLink = new this.linksModel(links);
    return await newLink.save();
  }
}