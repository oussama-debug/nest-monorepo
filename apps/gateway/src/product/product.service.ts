import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'libs/database-products/src';

@Injectable()
export class ProductService {
  constructor(
    private readonly databaseService: PrismaService,
    private readonly jwtService: JwtService,
  ) {}
}
