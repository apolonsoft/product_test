import {
  Entity,
  Column,
  PrimaryColumn,
  ManyToOne,
  JoinColumn,
  Generated,
} from 'typeorm';
import { UserProductEntity } from './user-product.entity';
import { UserEntity } from './user.entity';

@Entity('summary_prod_text')
export class SummaryEntity {
  @PrimaryColumn({
    type: 'integer',
  })
  epoch: number;

  @Column({
    type: 'timestamp with time zone',
    nullable: true,
  })
  date: Date;

  @Column({
    type: 'uuid',
    name: 'search_uuid',
  })
  searchUuid: string;

  @Column({
    type: 'text',
    name: 'search_text',
  })
  searchText: string;

  @Column({
    type: 'character varying',
    length: 50,
    nullable: true,
  })
  asin: string;

  @Column({
    type: 'jsonb',
    nullable: false,
    name: 'child_asins',
  })
  childAsins: object;

  @Column({
    type: 'integer',
    nullable: true,
  })
  cnt: number;

  @Column({
    type: 'integer',
    nullable: true,
    name: 'p0_org_cnt',
  })
  p0OrgCnt: number;

  @Column({
    type: 'numeric',
    nullable: true,
    name: 'p0_org_pos',
  })
  p0OrgPos: number;

  @Column({
    type: 'numeric',
    nullable: true,
    name: 'p0_org_pos2',
  })
  p0OrgPos2: number;

  @Column({
    type: 'integer',
    nullable: true,
    name: 'p0_ads_cnt',
  })
  p0AdsCnt: number;

  @Column({
    type: 'numeric',
    nullable: true,
    name: 'p0_ads_pos',
  })
  p0AdsPos: number;

  @Column({
    type: 'numeric',
    nullable: true,
    name: 'p0_ads_pos2',
  })
  p0AdsPos2: number;

  @Column({
    type: 'integer',
    nullable: true,
    name: 'p1_org_cnt',
  })
  p1OrgCnt: number;

  @Column({
    type: 'numeric',
    nullable: true,
    name: 'p1_org_pos',
  })
  p1OrgPos: number;

  @Column({
    type: 'numeric',
    nullable: true,
    name: 'p1_org_pos2',
  })
  p1OrgPos2: number;

  @Column({
    type: 'integer',
    nullable: true,
    name: 'p1_ads_cnt',
  })
  p1AdsCnt: number;

  @Column({
    type: 'numeric',
    nullable: true,
    name: 'p1_ads_pos',
  })
  p1AdsPos: number;

  @Column({
    type: 'numeric',
    nullable: true,
    name: 'p1_ads_pos2',
  })
  p1AdsPos2: number;

  @Column({
    type: 'timestamp with time zone',
    name: '_date_inserted',
    nullable: true,
  })
  dateInserted: Date;

  @Column({
    type: 'timestamp with time zone',
    name: '_date_updated',
    nullable: true,
  })
  dateUpdated: Date;

  @Column({
    type: 'smallint',
    nullable: true,
  })
  ver: number;

  @ManyToOne(() => UserProductEntity, (userProduct) => userProduct.summaries)
  @JoinColumn({ name: 'asin' })
  userProduct: UserProductEntity;
}
