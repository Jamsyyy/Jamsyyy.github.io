import Link from "next/link";

type NavLinkProps = {
  href: string;
  active: boolean;
  children: React.ReactNode;
};

export default function NavLink({
  href,
  active,
  children,
}: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`relative py-2 text-white transition-colors hover:text-blue-500 ${
        active
          ? "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-blue-500"
          : ""
      }`}
    >
      {children}
    </Link>
  );
}