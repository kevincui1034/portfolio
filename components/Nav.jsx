"use client";

import { usePathname, useRouter } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const links = [
    { name: "about", path: "/" },
    { name: "projects", path: "/projects" },
    { name: "resume", path: "/resume" },
    { name: "contact", path: "/contact" },
];

const Nav = () => {
    const pathname = usePathname();
    const router = useRouter();

    return (
        <Tabs
            value={links.some((l) => l.path === pathname) ? pathname : ""}
            onValueChange={(value) => value && router.push(value)}
            className="hidden xl:block"
        >
            <TabsList className="h-auto gap-1 rounded-xl bg-white/10 p-2 text-white">
                {links.map((link) => (
                    <TabsTrigger
                        key={link.path}
                        value={link.path}
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