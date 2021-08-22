import { getCustomRepository } from "typeorm"
import { TagsRepositories } from "../../db/repositories/TagsRepositories"

class CreateTagService {
	async execute(name: string) {
		const tagsRepositories = getCustomRepository(TagsRepositories)

		// Validation

		if (!name) throw new Error("Name not found")

		const tagAlreadyExists = await tagsRepositories.findOne({ name })
		if (tagAlreadyExists) throw new Error("Tag already exists")

		// END Validation

		const tag = tagsRepositories.create({
			name,
		})

		await tagsRepositories.save(tag)

		return tag
	}
}

export { CreateTagService }
