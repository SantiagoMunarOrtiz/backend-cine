import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { AutenticacionModule } from './autenticacion/autenticacion.module';
import { FavoritosModule } from './favoritos/favoritos.module';

@Module({
  imports: [UsuariosModule, AutenticacionModule, FavoritosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
