import { Controller, Get, Post, Delete, Param } from '@nestjs/common';
import { FavoritosService } from './favoritos.service';

@Controller('favoritos')
export class FavoritosController {
  constructor(private readonly favoritosService: FavoritosService) {}

  @Post(':userId/:movieId')
  markAsFavorite(
    @Param('userId') userId: string,
    @Param('movieId') movieId: string,
  ) {
    return this.favoritosService.markAsFavorite(
      Number(userId),
      Number(movieId),
    );
  }

  @Delete(':userId/:movieId')
  unmarkAsFavorite(
    @Param('userId') userId: string,
    @Param('movieId') movieId: string,
  ) {
    return this.favoritosService.unmarkAsFavorite(
      Number(userId),
      Number(movieId),
    );
  }

  @Get(':userId')
  getUserFavorites(@Param('userId') userId: string) {
    return this.favoritosService.getUserFavorites(Number(userId));
  }
}
