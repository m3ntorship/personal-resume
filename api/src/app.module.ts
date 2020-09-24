import { APP_FILTER } from '@nestjs/core';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LinksModule } from './links/links.module'
import { MongooseModule } from  '@nestjs/mongoose';
import { HttpErrorFilter } from './shared/http-error.filter';
import { AboutModule } from './about/about.module';

@Module({
  imports: [LinksModule, MongooseModule.forRoot(process.env.MONGO_URI), AboutModule],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_FILTER,
    useClass: HttpErrorFilter
  }],
})
export class AppModule {}
