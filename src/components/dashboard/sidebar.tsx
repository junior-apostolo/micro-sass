import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type DashboardSideBarGenericProps<T = unknown> = {
  children: React.ReactNode;
  className?: string;
} & T;

export function DashboardSidebar({ children, className }: DashboardSideBarGenericProps) {
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

export function DashboardSidebarHeader({ children, className }: DashboardSideBarGenericProps) {
  return <h1 className={cn(["px-6 py-3 border-b border-border", className])}>{children}</h1>;
}

export function DashboardSidebarHeaderTitle({
  children,
  className,
}: DashboardSideBarGenericProps) {
  return <header className={cn(["", className])}>{children}</header>;
}

export function DashboardSidebarMain({ children, className }: DashboardSideBarGenericProps) {
  return <main className={cn(["px-3", className])}>{children}</main>;
}

export function DashboardSidebarNav({ children, className }: DashboardSideBarGenericProps) {
  return <nav className={cn(["", className])}>{children}</nav>;
}

export function DashboardSidebarNavHeader({ children, className }: DashboardSideBarGenericProps) {
  return <header className={cn(["", className])}>{children}</header>;
}

export function DashboardSidebarNavHeaderTitle({
  children,
  className,
}: DashboardSideBarGenericProps) {
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

export function DashboardSidebarNavMain({ children, className }: DashboardSideBarGenericProps) {
  return <main className={cn(["flex flex-col", className])}>{children}</main>;
}

type DashboardSidebarNavLinkProps = {
  href: string;
  active?: boolean;
};

export function DashboardSidebarNavLink({
  children,
  className,
  href,
  active,
}: DashboardSideBarGenericProps<DashboardSidebarNavLinkProps>) {
  return (
    <Link
      href={href}
      className={cn(["text-sm px-3 py-2 rounded-md flex items-center", active && "bg-secondary", className])}
    >
      {children}
    </Link>
  );
}

export function DashboardSidebarFooter({ children, className }: DashboardSideBarGenericProps) {
  return (
    <footer className={cn(["p-6 mt-auto border-t border-border", className])}>
      {children}
    </footer>
  );
}
