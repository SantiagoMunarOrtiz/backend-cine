@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.usuariosService.createUser(createUserDto);
  }

  @Get(':id')
  findUserById(@Param('id') id: string) {
    return this.usuariosService.findUserById(Number(id));
  }

  @Get()
  findAllUsers() {
    return this.usuariosService.findAllUsers();
  }

  @Patch(':id')
  updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usuariosService.updateUser(Number(id), updateUserDto);
  }

  @Delete(':id')
  softDeleteUser(@Param('id') id: string) {
    return this.usuariosService.softDeleteUser(Number(id));
  }
}
