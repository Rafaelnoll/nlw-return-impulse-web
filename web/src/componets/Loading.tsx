import { CircleNotch } from "phosphor-react";

export function Loading() {
    return (
        <div className="h-6 flex justify-center items-center w-full">
            <CircleNotch weight="bold" className="w-4 h-4 animate-spin" />
        </div>
    )
}