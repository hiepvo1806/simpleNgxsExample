import { User } from "./user";

export interface Book {
    bookname: string;
    author: string;
    borrower?: User;
}