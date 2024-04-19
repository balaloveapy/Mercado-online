import { Skeleton } from "@/components/ui/skeleton"
export function Skeletons() {
    return (
        <div>
            <Skeleton className="w-full h-8"></Skeleton>
            <div className="grid grid-cols-3 gap-6">
                {Array(9).fill(0).map((a,b) => (
                    <div className="mt-4 flex flex-col gap-2" key={b}>
                        <Skeleton className="w-[325.33px] h-[243.98px]" />
                        <Skeleton className="w-full h-6"/>
                        <Skeleton className="w-2/5 h-6"/>
                        <Skeleton className="w-full h-10"/>
                    </div>
                ))}
            </div>
        </div>
    )
}