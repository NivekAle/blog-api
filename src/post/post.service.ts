import { HttpException, HttpStatus, Injectable } from "@nestjs/common";

import { Post } from "@prisma/client";

import { PrismaService } from "src/database/prisma.service";

@Injectable()
export class PostService {

	constructor(
		private prismaService: PrismaService
	) { }

	public async insert(data: Post, userId: number) {

		const author = await this.prismaService.user.findFirst({
			where: { id: data.authorId }
		});

		console.log(author);

		if (!author) {
			throw new HttpException(
				"Não foi realizar está ação. Usuário inválido.",
				HttpStatus.BAD_REQUEST,
				{
					cause: "authorId Inválido",
					description: "O authorId da requisição não foi encontrado."
				}
			);
		}

		try {
			// formatando a data que vem body da requisição;
			const formatted_date = `${data.published_in}T00:00:00.000Z`;

			await this.prismaService.post.create({
				data: {
					...data,
					authorId: userId,
					published_in: formatted_date
				}
			});

			return {
				statusCode: 1,
				message: "O post foi criado com sucesso!"
			};

		} catch (error) {
			throw new HttpException(
				"Não foi realizar está acção no momento, tente novamente mais tarde!",
				HttpStatus.BAD_REQUEST,
				{
					cause: "Inválido",
					description: "..."
				}
			);
		}

	}

	public async all(userId: number) {

		try {

			const result = await this.prismaService.post.findFirstOrThrow({
				where: {
					authorId: userId
				}
			});

			return result;

		} catch (error) {
			throw new HttpException(
				"Não foi possível encontrar o Artigo. Tente outro ou tente novamente mais tarde.",
				HttpStatus.BAD_REQUEST,
				{
					cause: "authorId Inválido",
					description: "O id da requisição não foi encontrado."
				}
			);
		}

	}

}