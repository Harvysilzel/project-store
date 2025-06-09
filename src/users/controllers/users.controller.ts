// En user.controller.ts
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, BadRequestException } from "@nestjs/common";
import { UsersService } from "../services/users.service";
import { CreateUserDto } from "../dto/user.dto";
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

@Controller('users')
export class UserController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async CreateUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.remove(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() createUserDto: CreateUserDto) {
    return this.usersService.update(id, createUserDto);
  }

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    const user = await this.usersService.findByEmail(body.email);
    if (!user) throw new BadRequestException('Usuario no encontrado');

    const passwordMatch = await bcrypt.compare(body.password, user.password);
    if (!passwordMatch) throw new BadRequestException('Contraseña incorrecta');

    const token = jwt.sign(
      { id: user.id, name: user.name, email: user.email },
      'tu_clave_secreta', // cambia esto por una env variable en producción
      { expiresIn: '1h' }
    );

    return {
      message: 'Login exitoso',
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    };
  }
}
