import { FC } from "react";

interface IHeaderProps {
    text: string
}

const Header: FC<IHeaderProps> = ({text}: IHeaderProps) => {
    return (
        <h1 className="scroll-m-20 text-center mt-5 text-4xl font-extrabold tracking-tight lg:text-5xl">
            {text}
        </h1>
    )
}

export default Header;