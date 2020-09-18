import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { NavsController } from './navs/navs.controller';
// import { NavsService } from './navs/navs.service';
import { NavsModule } from './navs/navs.module';
import { MongooseModule } from  '@nestjs/mongoose';
import config from './config/keys';

@Module({
  imports: [NavsModule, MongooseModule.forRoot(config.mongoURI)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
