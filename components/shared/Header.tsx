import Image from "next/image"
import LanguageToggle from "../LanguageToggle"

const Header = () => {
    return (
        <div className="w-full bg-white border-b border-slate-300 py-4 sticky top-0 z-50 flex justify-between items-center gap-5">
            <div className="container flex justify-between items-center gap-6">
                <div className="w-28 h-9 flex justify-start items-center overflow-hidden">
                    <Image
                        width={100}
                        height={27}
                        fetchPriority="high"
                        decoding="async"
                        priority
                        // Using a placeholder image URL for demonstration purposes 
                        src={"https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg"}
                        alt="10 Minute School Logo"
                    />

                </div>
                <LanguageToggle />
            </div>
        </div>
    )
}

export default Header