import Link from "next/link";
import { Button } from "@/components/ui/button";
import Nav from "@/components/Nav";
import MobileNav from "@/components/MobileNav";

const Header = () => {
    return (
        <header className="sticky top-0 z-50 py-8 xl:py-12 text-white">
            {/* desktop nav */}
            <div className="hidden xl:flex justify-center items-center gap-8">
                <Nav />
                
            </div>
                <div className="xl:hidden flex justify-end items-center">
                    <MobileNav />
                </div>
        </header>
    );
};

    export default Header;