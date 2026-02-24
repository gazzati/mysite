import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity({ name: "visits" })
export class Visit {
  @PrimaryGeneratedColumn({ type: "bigint" })
  id!: number

  @Column()
  ip!: string

  @Column({ nullable: true })
  country!: string

  @Column({ nullable: true })
  region!: string

  @Column({ nullable: true })
  city!: string

  @Column({ type: "decimal", precision: 10, scale: 4, nullable: true })
  latitude!: string

  @Column({ type: "decimal", precision: 10, scale: 4, nullable: true })
  longitude!: string

  @Column({ nullable: true })
  browser!: string

  @Column()
  ua!: string

  @Column({ nullable: true })
  os!: string

  @Column({ nullable: true })
  device!: string

  @CreateDateColumn()
  created_at!: Date

  @UpdateDateColumn()
  updated_at!: Date
}
