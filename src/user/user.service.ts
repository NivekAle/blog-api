import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma.service";

@Injectable()
export class UserService {

	constructor(
		private prismaService: PrismaService
	) { }

	public selectAll() {
		return this.prismaService.user.findMany();
	}

}