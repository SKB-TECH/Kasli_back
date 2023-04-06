import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { TimeStamps } from "../../Times/timestamp.entity";

@Entity("comments")
export class CommentEntity extends TimeStamps {
  @PrimaryGeneratedColumn("uuid")
  idcomment: string;

  @Column()
  object: string;

  @Column()
  content: string;
}
