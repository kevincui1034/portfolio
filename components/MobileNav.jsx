"use client";

import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { useEffect, useState } from "react";

const SECTION_IDS = ["home", "about", "projects", "contact"];

const links = [
    { name: "home", path: "/", sectionId: "home" },
    { name: "about", path: "/", sectionId: "about" },
    { name: "projects", path: "/projects", sectionId: "projects" },
    { name: "contact", path: "/contact", sectionId: "contact" },
];

const MobileNav = () => {
    const pathname = usePathname();
    const router = useRouter();
    const isHome = pathname === "/";
    const [open, setOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    // Scroll spy: update active section based on which section is in view (matches Nav.jsx)
    useEffect(() => {
        if (!isHome) return;

        const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean);
        if (sections.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (!entry.isIntersecting) continue;
                    const id = entry.target.id;
                    if (SECTION_IDS.includes(id)) {
                        setActiveSection(id);
                    }
                }
            },
            { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
        );

        sections.forEach((el) => el && observer.observe(el));
        return () => observer.disconnect();
    }, [isHome]);

    const handleLinkClick = (link) => {
        setOpen(false);
        if (isHome) {
            const el = document.getElementById(link.sectionId);
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
                setActiveSection(link.sectionId);
            }
        } else {
            router.push(link.path);
        }
    };

    const isActive = (link) =>
        isHome ? activeSection === link.sectionId : link.path === pathname;

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                {/* logos */}
                <div className="mt-32 mb-40 text-center text-2xl">
                    <Link href="/" onClick={() => setOpen(false)}>
                        <h1 className="text-4xl font-semibold">
                            Kevin<span className="text-accent"> .</span>
                        </h1>
                    </Link>
                </div>
                {/* nav links */}
                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map((link) => (
                        <button
                            type="button"
                            key={link.sectionId}
                            onClick={() => handleLinkClick(link)}
                            className={`text-xl capitalize hover:text-accent transition-all duration-300 ${isActive(link) ? "text-accent border-b-2 border-accent pb-0" : ""}`}
                        >
                            {link.name}
                        </button>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;