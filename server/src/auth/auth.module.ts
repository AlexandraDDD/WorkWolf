import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/user/users.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports:[
    UsersModule,
    JwtModule.register({
      secret: 'lsdksdlks',// достать из env
      signOptions:{
        expiresIn: '24h'
      }
    })

  ]
})
export class AuthModule {}
