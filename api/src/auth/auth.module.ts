import { LocalStrategy } from './strategies/local.strategy';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.strategy';
import { PrismaService } from 'src/prisma.service';
import { DatabaseModule } from 'src/database/database.module';
import { tokenProvider } from './tokens.provider';
import { usersProvider } from 'src/users/users.provider';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '24hrs' },
    }),
    UsersModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    DatabaseModule,
  ],
  providers: [
    ...tokenProvider,
    ...usersProvider,
    AuthService,
    LocalStrategy,
    JwtStrategy,
    PrismaService,
  ],
  exports: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
