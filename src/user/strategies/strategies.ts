import { ExtractJwt, Strategy } from "passport-jwt";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "../entities/user.entity";
import { Repository } from "typeorm";
import * as dotenv from "dotenv";
import { InterfacePayload } from "../interface/interfacPayload";

dotenv.config();

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private configService: ConfigService,
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get("SECRET_KEY")
    });
  }

  async validate(payload: InterfacePayload) {
    const user = await this.userRepository.findOneBy({
      firstname: payload.firstname
    });
    if (user) {
      delete user.password;
      delete user.salt;
      return user;
    } else {
      throw new UnauthorizedException();
    }
  }
}
