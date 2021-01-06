import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HeaderSchema } from 'src/models/header.schema';
import { HeaderController } from './header.controller';
import { HeaderService } from './header.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Header', schema: HeaderSchema }])],
  controllers: [HeaderController],
  providers: [HeaderService]
})
export class HeaderModule {}
