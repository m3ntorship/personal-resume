import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LinksController } from './navLinks.controller';
import { LinksService } from './navLinks.service';
import { LinksSchema } from '../models/navLinks.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Links', schema: LinksSchema }])],
  controllers: [LinksController],
  providers: [LinksService],
})

export class LinksModule {}