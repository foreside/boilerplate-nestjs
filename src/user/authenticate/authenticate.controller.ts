import { AuthenticateService } from './authenticate.service';
import {
  Body,
  Controller,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { AuthenticateUserByPasswordRequestDTO } from './authenticate.dto';
import { ConfigService } from '@nestjs/config';
import { LoginStatus } from './dto/login-status.interface';

@Controller('authenticate')
export class AuthenticateController {
  constructor(
    private readonly configService: ConfigService,
    private readonly authenticateService: AuthenticateService,
  ) {}

  /**
   * @name AuthenticateUser
   * @description Authenticate a User with a user and password
   * @returns boolean
   */
  @Post()
  @HttpCode(200)
  async AuthenticateUser(
    @Body() body: AuthenticateUserByPasswordRequestDTO,
  ): Promise<LoginStatus> {
    const { username, password } = body;
    try {
      const token = await this.authenticateService.authenticateUser(
        username,
        password,
      );
      return { accessToken: token, username };
    } catch (error) {
      console.log('AuthenticateUser Error: ', error);
      throw new HttpException(
        'AuthenticateUser Error:' + error,
        HttpStatus.UNAUTHORIZED,
      );
    }
  }
}
