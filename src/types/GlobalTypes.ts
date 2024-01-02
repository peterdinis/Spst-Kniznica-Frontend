import { BookType } from "./BookTypes";
import { CategoryType } from "./CategoryTypes";

type GlobalExtendedProps =  {
    linkName: string;
    image?: string;
}

export type IGlobalCardType = GlobalExtendedProps & BookType & CategoryType;

export type EmptyProps = {
    text: string;
}