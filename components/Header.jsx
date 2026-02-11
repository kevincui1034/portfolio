import Link from "next/link";
import { Button } from "@/components/ui/button";
import Nav from "@/components/Nav";

const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className ="container mx-auto flex justify-between items-center">
                {/* logo */}
                <Link href="/">
                   <h1 className="text-4xl font-semibold">
                    Kevin<span className="text-accent"> Data Scientist</span>
                    </h1>
                </Link>

                {/* desktop nav */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Button variant="outline" asChild>
                        <Link href="/contact">Contact</Link>
                    </Button>
                </div>

                    {/* mobile nav */}
                    <div className="xl:hidden">
                        mobile nav
                    </div>
                </div>
            </header>
        );
    };

    export default Header;