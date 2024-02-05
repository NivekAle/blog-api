import { Module } from "@nestjs/common";

/*
 * User
*/
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { PrismaModule } from "src/database/prisma.module";

@Module({
	imports: [PrismaModule],
	controllers: [UserController],
	providers: [UserService]
})
export class UserModule { }
