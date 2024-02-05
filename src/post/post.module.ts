import { Module } from "@nestjs/common";

/*
 * Post
*/
import { PostService } from "./post.service";
import { PostController } from "src/post/post.controller";
import { PrismaModule } from "src/database/prisma.module";

@Module({
	imports: [PrismaModule],
	controllers: [PostController],
	providers: [PostService],
})
export class PostModule { }