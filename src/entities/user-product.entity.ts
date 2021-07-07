import {
  Entity,
  Column,
  PrimaryColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { SummaryEntity } from './summary.entity';
import { UserEntity } from './user.entity';

@Entity('user_product')
export class UserProductEntity {
  @PrimaryColumn({
    name: 'user_id',
    nullable: false,
  })
  userId: number;

  @PrimaryColumn({
    type: 'character varying',
    length: 50,
    nullable: false,
  })
  asin: string;

  @Column({
    type: 'character varying',
    length: 50,
    nullable: true,
    name: 'asin_orig',
  })
  asinOrig: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  title: string;

  @Column('text', { array: true, name: 'search_texts' })
  searchTexts: string[];

  @Column({
    default: true,
    nullable: false,
  })
  enabled: boolean;

  @Column({
    type: 'timestamp with time zone',
    name: '_date_inserted',
    nullable: false,
    default: 'CURRENT_TIMESTAMP',
  })
  dateInserted: Date;

  @Column({
    type: 'timestamp with time zone',
    name: '_date_updated',
    nullable: false,
    default: 'CURRENT_TIMESTAMP',
  })
  dateUpdated: Date;

  @ManyToOne(() => UserEntity, (user) => user.userProducts)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @OneToMany(() => SummaryEntity, (sum) => sum.userProduct)
  summaries: SummaryEntity[];
}
