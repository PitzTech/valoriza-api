import {
	Entity,
	PrimaryColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
} from "typeorm"

import { v4 as uudi } from "uuid"

@Entity()
class User {
	@PrimaryColumn()
	readonly id: string

	@Column()
	name: string

	@Column()
	email: string

	@Column()
	admin: boolean

	@CreateDateColumn()
	created_at: Date

	@UpdateDateColumn()
	updatedAt: Date
}

export { User }
