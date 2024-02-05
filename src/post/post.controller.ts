import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { Post as PostDTO } from "@prisma/client";
import { PostService } from "src/post/post.service";

@Controller("post")
export class PostController {

	constructor(
		private postService: PostService
	) {
		console.log("classe crianda sempre")
	}

	@Get(":id")
	public listAllPostByUserId(@Param("id") userId: number) {
		return this.postService.all(Number(userId));
	}

	@Post()
	public async create(@Body() post: PostDTO) {

		const result = await this.postService.insert(post, 1);

		return result;
	}

}