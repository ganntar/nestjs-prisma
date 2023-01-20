import { Module } from '@nestjs/common';
import { BookModule } from './modules/book/book.module';

//Reune todos o modulos e controllers e providers utilizada no app
@Module({
  imports: [BookModule],
  controllers: [],
  providers: [],
})
//exporta tudo em uma unica classe app module
export class AppModule {}
