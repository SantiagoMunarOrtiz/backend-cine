import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './interface/user.interface';


@Injectable()
export class UsuariosService {
  private users = [];

  // Crear un nuevo usuario
  createUser(createUserDto: CreateUserDto) {
    const newUser = { id: Date.now(), ...createUserDto };
    this.users.push(newUser);
    return newUser;
  }

  // Encontrar un usuario por su ID
  findUserById(id: number) {
    return this.users.find(user => user.id === id);
  }

  // Obtener todos los usuarios
  findAllUsers() {
    return this.users;
  }

  // Actualizar un usuario
  updateUser(id: number, updateUserDto: UpdateUserDto): any {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex !== -1) {
      this.users[userIndex] = { ...this.users[userIndex], ...updateUserDto };
      return this.users[userIndex];
    }
    return null;
  }

  // Soft delete de un usuario
  softDeleteUser(id: number) {
    const user = this.users.find(user => user.id === id);
    if (user) {
      user.isDeleted = true;
      return user;
    }
    return null;
  }
}
