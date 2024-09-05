import { Injectable } from '@nestjs/common';

interface Favorite {
  userId: number;
  movieId: number;
}

@Injectable()
export class FavoritosService {
  private favorites: Favorite[] = [];

  markAsFavorite(userId: number, movieId: number): Favorite {
    const isAlreadyFavorite = this.favorites.some(
      (favorite) => favorite.userId === userId && favorite.movieId === movieId,
    );
    if (!isAlreadyFavorite) {
      const newFavorite: Favorite = { userId, movieId };
      this.favorites.push(newFavorite);
      return newFavorite;
    }
    return null;
  }

  unmarkAsFavorite(userId: number, movieId: number): Favorite | null {
    const index = this.favorites.findIndex((favorite) => {
      return favorite.userId === userId && favorite.movieId === movieId;
    });
    if (index !== -1) {
      const [removedFavorite] = this.favorites.splice(index, 1);
      return removedFavorite;
    }
    return null;
  }

  getUserFavorites(userId: number): Favorite[] {
    return this.favorites.filter((favorite) => favorite.userId === userId);
  }
}
