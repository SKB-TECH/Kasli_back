import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { post_enum } from "../interface/post_enum";
import { TimeStamps } from "../../Times/timestamp.entity";

@Entity("post")
export class PostEntity extends TimeStamps {
  @PrimaryGeneratedColumn("uuid")
  idpost: string;

  @Column()
  title: string;

  @Column({
    type: "enum",
    enum: post_enum,
    default: post_enum.MAISON
  })
  type: string;

  @Column()
  description: string;

  @Column({
    type: "int",
    nullable: true
  })
  like: number;

  @Column({
    type: "int",
    nullable: true
  })
  aime: number;

  @Column()
  photos: string;
}
