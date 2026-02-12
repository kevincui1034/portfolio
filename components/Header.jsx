import Link from "next/link";
import { Button } from "@/components/ui/button";
import Nav from "@/components/Nav";
import MobileNav from "@/components/MobileNav";

const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white">
            {/* desktop nav */}
            <div className="hidden xl:flex justify-center items-center gap-8">
                <Nav />
                <Button variant="outline" className="flex items-center gap-2 text-accent">
                    <Link href="/contact">Contact</Link>
                </Button>
                
            </div>
                <div className="xl:hidden flex justify-end items-center">
                    <MobileNav />
                </div>
        </header>
    );
};

    export default Header;