import { Injectable } from '@nestjs/common';
import { Header } from './entity/header.entity';
import { Model } from 'mongoose';
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class HeaderService {
  constructor(@InjectModel('Header') private readonly headerModel: Model<Header>) {}

  async findAll(): Promise<Header[]> {
    return await this.headerModel.find();
  }

  async findOne(id: string): Promise<Header> {
    return await this.headerModel.findOne({ _id: id })
  }
}
