import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UpdpostController } from './updpost.controller';
import { UpdpostService } from './updpost.service';
import { UpdpostSchema } from '../models/updpost.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Updpost', schema: UpdpostSchema }])],
  controllers: [UpdpostController],
  providers: [UpdpostService],
})

export class UpdpostModule {}