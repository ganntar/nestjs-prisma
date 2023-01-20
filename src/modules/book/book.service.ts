import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { BookDTO } from './book.dto';

//Classe de serviço do book com o prisma 
@Injectable()
export class BookService {

  //declara o prisma no construtor
  constructor(private prisma: PrismaService) { }

  //Metodo create com o banco de dados 
  //Passa o data do tipo DTO
  async create(data: BookDTO) {
    //o prisma possui funções genericas como o findFirst
    //p book vem do prisma service e precisa ser declarado dentro do schema.prisma
    //o prisma faz a abstração do schema com a aplicação
    const bookExists = await this.prisma.book.findFirst({
      //o where pode ser passado como um objeto o prisma no final converte em sql
      where: {
        bar_code: data.bar_code
      }
    })

    //Verifica se existe o book se sim lança um error falando q o livro existe
    if (bookExists) {
      throw new Error('Book alredy exists');
    }
    //Caso o livro não exista cria um e retorna o livro
    const book = await this.prisma.book.create({
      data,
    });
    return book;
  }


  async findAll() {
    //outra função do prisma para busca de dados
    return this.prisma.book.findMany();
  }

  //função de atualizar recendo 2 parametros 
  async update(id: string, data: BookDTO) {
    //findUnique busca os livros por uma chave unica
    const bookExists = await this.prisma.book.findUnique({
      where: {
        id,
      },
    });

    if(!bookExists){
      throw new Error('Book does not exists!');
    }

    //Faz o update passando o data para atualizar e o id que é a chave do update
    return await this.prisma.book.update({
      data,
      where: {
        id
      }
    })

  }

  //Função delete similar a do update só que sem passar os parametros
  async delete(id: string){
    const bookExists = await this.prisma.book.findUnique({
      where: {
        id,
      }
    })

    if(!bookExists){
      throw new Error('Book does not exists!');
    }

    return await this.prisma.book.delete({
      where: {
        id,
      },
    })
  }
}
