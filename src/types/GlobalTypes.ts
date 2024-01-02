import { BookType } from "./BookTypes";

type GlobalExtendedProps =  {
    linkName: string
}

export type IGlobalCardType = GlobalExtendedProps & BookType;