import { Injectable } from '@nestjs/common';
import { PrismaService, User } from 'libs/database-gateway/src';
import { CreateUserInput } from './inputs/input-create-user';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly databaseService: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async findUserByUsername(username: string): Promise<User | null> {
    return await this.databaseService.user.findUnique({
      where: { username: username },
    });
  }

  async createUser(input: CreateUserInput): Promise<User | null> {
    return await this.databaseService.user.create({
      data: input,
    });
  }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.findUserByUsername(username);
    if (user && (await bcrypt.compare(pass, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: User) {
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
