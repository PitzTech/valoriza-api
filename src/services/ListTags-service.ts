import { getCustomRepository } from "typeorm"
import { TagsRepositories } from "../../db/repositories/TagsRepositories"

class ListTagsService {
	async execute() {
		const tagsRepositories = getCustomRepository(TagsRepositories)

		const tags = await tagsRepositories.find()

		return tags
	}
}

export { ListTagsService }
