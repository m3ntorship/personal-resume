import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NavsController } from './navs.controller';
import { NavsService } from './navs.service';
import { NavSchema } from './schemas/nav.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Nav', schema: NavSchema }])],
  controllers: [NavsController],
  providers: [NavsService],
})

export class NavsModule {}
