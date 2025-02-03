import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { AuthenticationService } from 'apps/gateway/src/authentication/authentication.service';
import { User } from 'libs/database/src';

@Injectable()
export class JwtGQLAuthenticationService {
  constructor(
    private authenticationService: AuthenticationService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.authenticationService.findUserByUsername(username);
    if (user) {
      const passwordIsValid = await bcrypt.compare(password, user.password);
      if (!passwordIsValid) return null;
      return user;
    }
    return null;
  }

  async login(user: User) {
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
      user: payload,
    };
  }
}
