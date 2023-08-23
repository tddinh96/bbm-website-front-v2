"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export function MainNavStatic({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>) {
    const pathname= usePathname();
    const params = useParams();
    
    const routes =[
        {
            href: `/storage/`,
            label: 'Storage',
            active: pathname === `/storage`,
        },
        {
            href: `/launch/`,
            label: 'Launch',
            active: pathname === `/launch`,
        },
        {
            href: `/map/`,
            label: 'Map',
            active: pathname === `/map`,
        },
        {
            href: `/${params.storeId}/categories`,
            label: 'Event',
            active: pathname === `/${params.storeId}/categories`,
        },
    ];
    return(
        <nav
            className={cn("flex items-center space-x-4 lg:space-x-6", className)}
        >
            {routes.map((route)=> (
                <Link
                    key={route.href}
                    href ={route.href}
                    className={cn(
                        "text-sm font-medium transition-colors hover:text-primary",
                        route.active ? "text-black dark:text-blue-700" : "text-muted-foreground"
                    )}
                >
                    {route.label}
                </Link>
            ))}
        </nav>
    )
};