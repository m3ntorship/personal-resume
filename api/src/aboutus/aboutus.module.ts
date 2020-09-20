import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AboutusController } from './aboutus.controller';
import { AboutusService } from './aboutus.service';
import { AboutusSchema } from '../models/aboutus.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Aboutus', schema: AboutusSchema }])],
  controllers: [AboutusController],
  providers: [AboutusService],
})

export class AboutusModule {}