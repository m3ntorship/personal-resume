import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServicesSchema } from 'src/models/services.schema';
import { ServicesController } from './services.controller';
import { ServicesService } from './services.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Services', schema: ServicesSchema }])],
  controllers: [ServicesController],
  providers: [ServicesService]
})
export class ServicesModule {}
