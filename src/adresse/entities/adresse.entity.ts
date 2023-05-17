import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { TimeStamps } from '../../Times/Timestamp.entity';
@Entity('addresse')
export default class AdresseEntity extends TimeStamps {
  @PrimaryGeneratedColumn('uuid')
  idaddresse: string;
  @Column()
  pays: string;
  @Column()
  province: string;

  @Column()
  ville: string;
  @Column()
  commune: string;
  @Column()
  quartier: string;

  @Column()
  avenue: string;
  @Column()
  num: string;
}
