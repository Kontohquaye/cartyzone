import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { UserInterface } from './interfaces/user.interface';
@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}
  async signIn(
    email: string,
    password: string,
  ): Promise<{ access_token: string; error: boolean; success: boolean }> {
    const existingUser: UserInterface = await this.usersService.findOne(email);
    if (!existingUser || existingUser.password !== password)
      throw new UnauthorizedException('Invalid credentials');
    const payload = { sub: existingUser.id, email: existingUser.email };
    // const { password: pwd, ...result } = existingUser;
    return {
      access_token: await this.jwtService.signAsync(payload),
      error: false,
      success: true,
    };
  }
}
