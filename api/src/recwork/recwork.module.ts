import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RecworkController } from './recwork.controller';
import { RecworkService } from './recwork.service';
import { RecworkSchema } from '../models/recwork.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Recwork', schema: RecworkSchema }])],
  controllers: [RecworkController],
  providers: [RecworkService],
})

export class RecworkModule {}