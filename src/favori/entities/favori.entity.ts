import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { TimeStamps } from "../../Times/timestamp.entity";
import { mainson } from "../interfaces/maison_interface";

@Entity("preferences")
export class FavoriEntity extends TimeStamps {
  @PrimaryGeneratedColumn("uuid")
  idpreference: string;
  @Column({
    type: "simple-array",
    nullable: false
  })
  subject: string;
  @Column({
    type: "jsonb",
    default: []
  })
  criteres: mainson;
}
