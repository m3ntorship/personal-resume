import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LinksController } from './links.controller';
import { LinksService } from './links.service';
import { LinksSchema } from '../models/links.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Links', schema: LinksSchema }])],
  controllers: [LinksController],
  providers: [LinksService],
})

export class LinksModule {}