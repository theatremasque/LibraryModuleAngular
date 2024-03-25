import {Comment} from "./comment";

export interface Publication {
  typeTitle: string;
  id: number;
  title: string;
  description: string;
  year: number;
  pages: number;
  link: string;
  isWos: boolean;
  isScopus: boolean;
  isCopernicus: boolean;
  isApproved: boolean;
  comments?: Comment[]
}
