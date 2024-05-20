import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

// export function Sidebar() {
//   return (
//     <aside className="border-r border-border">
//       <nav>
//         <a href=""></a>
//       </nav>
//     </aside>
//   );
// }

export type SideBarGenericProps<T = unknown> = {
  children: React.ReactNode;
  className?: string;
} & T;

export function Sidebar({ children, className }: SideBarGenericProps) {
  return (
    <aside
      className={cn([
        "border-r border-border flex flex-col space-y-6",
        className,
      ])}
    >
      {children}
    </aside>
  );
}

export function SidebarHeader({ children, className }: SideBarGenericProps) {
  return <h2 className={cn(["px-6", className])}>{children}</h2>;
}

export function SidebarHeaderTitle({
  children,
  className,
}: SideBarGenericProps) {
  return <header className={cn(["", className])}>{children}</header>;
}

export function SidebarMain({ children, className }: SideBarGenericProps) {
  return <main className={cn(["pt-6 px-3", className])}>{children}</main>;
}

export function SidebarNav({ children, className }: SideBarGenericProps) {
  return <nav className={cn(["", className])}>{children}</nav>;
}

export function SidebarNavHeader({ children, className }: SideBarGenericProps) {
  return <header className={cn(["", className])}>{children}</header>;
}

export function SidebarNavHeaderTitle({
  children,
  className,
}: SideBarGenericProps) {
  return (
    <span
      className={cn([
        "text-xs uppercase text-muted-foreground ml-3",
        className,
      ])}
    >
      {children}
    </span>
  );
}

export function SidebarNavMain({ children, className }: SideBarGenericProps) {
  return <main className={cn(["flex flex-col", className])}>{children}</main>;
}

type SidebarNavLinkProps = {
  href: string;
  active?: boolean;
};

export function SidebarNavLink({
  children,
  className,
  href,
  active,
}: SideBarGenericProps<SidebarNavLinkProps>) {
  return (
    <Link
      href={href}
      className={cn(["text-xs px-3 py-2 rounded-md", active && "bg-secondary", className])}
    >
      {children}
    </Link>
  );
}

export function SidebarFooter({ children, className }: SideBarGenericProps) {
  return (
    <footer className={cn(["p-6 mt-auto border-t border-border", className])}>
      {children}
    </footer>
  );
}
