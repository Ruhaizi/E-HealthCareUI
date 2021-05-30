import { IMedicineBase } from "./imedicinebase";

export class Medicine implements IMedicineBase {
  Id : number;
  Name : string;
  Price: number;
  Seller : string;
  Description:string;
  Category:string;
  Image?:string;

}
