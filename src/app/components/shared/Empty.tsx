import { EmptyProps } from "@/types/GlobalTypes";
import { Ghost } from "lucide-react";
import { FC } from "react";

const Empty: FC<EmptyProps> = ({text}: EmptyProps) => {
    return (
       <div className="flex justify-center align-top mt-6">
        <Ghost className="animate-bounce animate-ease-linear animate-normal" />
        <p className="font-bold">{text}</p>
       </div>
    )
}

export default Empty;