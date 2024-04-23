import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import { Head } from "./head";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex h-screen flex-col">
      <Head />
      <Navbar />
      <main className="container mx-auto max-w-7xl flex-grow px-6">
        {children}
      </main>
      <footer className="flex w-full items-center justify-center py-3">
        <Link
          isExternal
          className="flex items-center gap-1 text-current"
          href="https://shawilly.dev"
          title="nextui.org homepage"
        >
          <span className="text-default-600">created by </span>
          <p className="text-primary">shawilly</p>
        </Link>
      </footer>
    </div>
  );
}
