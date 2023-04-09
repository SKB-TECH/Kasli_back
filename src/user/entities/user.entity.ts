import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { role, sexe, statut, type_compte } from "../user_enum/user_enum";

@Entity("user")
export class UserEntity {
  @PrimaryGeneratedColumn("uuid")
  iduser: string;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column({
    type: "enum",
    enum: sexe,
    default: sexe.HOMME
  })
  sexe: string;

  @Column()
  telephone: string;

  @Column()
  email: string;

  @Column({
    type: "enum",
    enum: type_compte,
    default: type_compte.SIMPLE
  })
  type: string;

  @Column()
  password: string;

  @Column({
    type: "enum",
    enum: role,
    default: role.USER
  })
  role: string;

  @Column({
    type: "enum",
    enum: statut,
    default: statut.ACTIVE
  })
  status: string;
  @Column()
  salt: string;
}
