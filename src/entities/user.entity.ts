import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Index,
  OneToMany,
} from 'typeorm';
import { UserProductEntity } from './user-product.entity';

@Index(['email'], { unique: true })
@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn({
    name: 'user_id',
  })
  public userId: number;

  @Column({
    type: 'integer',
    name: 'entity_id',
    nullable: false,
  })
  entityId: number;

  @Column({
    type: 'integer',
    name: 'auth_type',
    nullable: false,
    default: 1,
  })
  authType: number;

  @Column({
    default: true,
    nullable: false,
  })
  enabled: boolean;

  @Column({
    type: 'text',
    nullable: false,
  })
  name: string;

  @Column({
    type: 'text',
    nullable: false,
  })
  email: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  password: string;

  @Column({
    type: 'jsonb',
    nullable: false,
    default: {},
  })
  data: object;

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

  @OneToMany(() => UserProductEntity, (userProduct) => userProduct.user)
  userProducts: UserProductEntity[];
}
