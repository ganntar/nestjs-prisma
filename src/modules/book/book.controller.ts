import { Body, Controller, Get, Post } from '@nestjs/common';
import { Delete, Param, Put } from '@nestjs/common/decorators';
import { BookDTO } from './book.dto';
import { BookService } from './book.service';

//Controller o parametro passado é o nome do endpoint
//e indica a qual modulo esse controller pertence
@Controller('book')
export class BookController {
  //Passa no construtor o Service 
  constructor(private readonly bookService: BookService) {}

  //Metodo post 
  @Post()
  //indica que o metodo post vai receber um body
  //o body é do tipo BookDTO
  async create(@Body() data: BookDTO){
    //chama o bookService do arquivo service e passa a data
    return this.bookService.create(data)
  }

  //Metodo get
  @Get()
  //Traz todos os dados de book
  async findAll(){
    return this.bookService.findAll();
  }

  //metodo put
  //passa o parametro id 
  @Put(":id")
  //Pega o parametro id com @Param e coloca na variavel id
  //Pega o body e coloca na variavel data do tipo DTO
  async update(@Param("id") id: string, @Body() data: BookDTO){
    return this.bookService.update(id, data)
  }

  //metodo delete
  //passa o parametro id
  @Delete(":id")
  //Pega o parametro id com @Param e coloca na variavel id
  async delete(@Param("id") id: string){
    return this.bookService.delete(id);
  }
}
