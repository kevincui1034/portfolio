"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SECTION_IDS = ["home", "about", "projects", "contact"];

const links = [
    { name: "home", path: "/", sectionId: "home" },
    { name: "about", path: "/", sectionId: "about" },
    { name: "projects", path: "/projects", sectionId: "projects" },
    { name: "contact", path: "/contact", sectionId: "contact" },
];

const Nav = () => {
    const pathname = usePathname();
    const router = useRouter();
    const isHome = pathname === "/";
    const [activeSection, setActiveSection] = useState("home");

    // Scroll spy: update active tab based on which section is in view
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

    const handleValueChange = (value) => {
        if (!value) return;
        if (isHome) {
            const el = document.getElementById(value);
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
                setActiveSection(value);
            }
        } else {
            router.push(value);
        }
    };

    const tabValue = isHome ? activeSection : (links.some((l) => l.path === pathname) ? pathname : "");

    return (
        <Tabs
            value={tabValue}
            onValueChange={handleValueChange}
            className="hidden xl:block"
        >
            <TabsList className="h-auto gap-1 rounded-xl bg-[#303030]/90 p-2 text-white">
                {links.map((link) => (
                    <TabsTrigger
                        key={link.sectionId}
                        value={isHome ? link.sectionId : link.path}
                        className="capitalize rounded-xl font-medium text-[14px] text-white hover:text-accent data-[state=active]:bg-primary data-[state=active]:text-accent data-[state=active]:shadow transition-all duration-300"
                    >
                        {link.name}
                    </TabsTrigger>
                ))}
            </TabsList>
        </Tabs>
    );
};

export default Nav;