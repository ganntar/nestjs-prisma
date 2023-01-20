import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

//função que inicia o nest
async function bootstrap() {
  //cria a aplicação importando o appmodule com todos os modulos que foram importados
  const app = await NestFactory.create(AppModule);
  //inicia o aplicativo na porta 3000
  await app.listen(3000);
}
//executa a função para inciar a aplicação
bootstrap();
