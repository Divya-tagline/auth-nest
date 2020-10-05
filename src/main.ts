import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //app.setGlobalPrefix('api');
  //const server = 
   await app.listen(8080); 
  //console.log("address => " + server.address().address);
  //console.log("port => " + server.address().port);
  
}

bootstrap();
