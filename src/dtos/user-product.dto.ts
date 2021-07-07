export interface UserProductDto {
  userId: number;
  asin: string;
  asinOrig?: string;
  title?: string;
  enabled: boolean;
  searchTexts: string[];
}
