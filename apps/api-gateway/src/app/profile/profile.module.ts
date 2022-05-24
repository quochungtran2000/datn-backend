import {Module} from "@nestjs/common";
import {ProfileController} from "./controllers/profile.controller";
import {PassportModule} from "@nestjs/passport";
import {JwtModule} from "@nestjs/jwt";
import {config} from "../config/configurations";
import {ProfileService} from "./services/profile.service";
import {CloudinaryService} from "./services/cloudinary.service";

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: config.jwt.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [ProfileController],
  providers: [ProfileService, CloudinaryService]
})
export class ProfileModule {}
