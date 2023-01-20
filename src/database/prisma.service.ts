import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

//Codigo copiado da documentação do Nest para o prisma
//Injeta a conexão com prisma client
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  //Injeta a conexão ao iniciar o modulo
  async onModuleInit() {
    await this.$connect();
  }

  //fecha a conexão antes de destruir o objeto de conexão
  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}

