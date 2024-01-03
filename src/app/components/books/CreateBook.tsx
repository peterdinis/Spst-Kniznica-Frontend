"use client"

import { FC } from "react";
import Header from "../shared/Header";
import { useRouter } from "next/navigation";

const CreateBook: FC = () => {
    const router = useRouter();

    return (
        <>
            <Header text="Pridanie novej knihy" />
            <div>
                abc
            </div>
        </>
    )
}

export default CreateBook;