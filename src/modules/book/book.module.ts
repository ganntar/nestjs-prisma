import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { PrismaService } from '../../database/prisma.service';

//A camada de modulo serve para integrar os modulos e expolos para outras camadas
@Module({
  //indica qual a controller desse modulo
  controllers: [BookController],
  /*
  Providers no NestJS são classes que contêm lógica de negócios e podem
  ser usadas para fornecer recursos e serviços para outras partes da aplicação.
  Eles são geralmente usados para abstrair as operações de banco de dados,
  comunicação com APIs externas, e outros serviços que são usados ​​em várias partes da aplicação.
  */ 
  //Os providers precisam ter injeção de dependencia para que possar ser usado em outras parte
  //da aplicação
  providers: [BookService, PrismaService],
})
export class BookModule {}
