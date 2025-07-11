import { Injectable } from '@nestjs/common';
import { PrismaService } from 'libs/database/src';
import { User } from '@app/database';
import { CreateUserInput } from './inputs/input-create-user';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UserAlreadyExistsGQLError } from '@app/common/graphql/gateway/errors/user-already-exists';

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly databaseService: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async findUserByUsername(username: string): Promise<User | null> {
    return await this.databaseService.user.findUnique({
      where: { username: username },
      include: {
        memberships: { include: { workspace: true } },
      },
    });
  }

  async findUserById(id: string): Promise<User | null> {
    return await this.databaseService.user.findUnique({
      where: { id },
      include: {
        memberships: { include: { workspace: true } },
      },
    });
  }

  async createUser(input: CreateUserInput): Promise<User | null> {
    const user = await this.findUserByUsername(input.username);
    if (user) throw new UserAlreadyExistsGQLError('username is already used');

    return await this.databaseService.user.create({
      data: {
        username: input.username.toLowerCase().trim(),
        password: await bcrypt.hash(input.password, 12),
        country: input.country,
      },
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
      access_token: this.jwtService.signAsync(payload),
      user: user,
    };
  }
}
