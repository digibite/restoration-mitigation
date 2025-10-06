import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl text-emerald-700">
          Restoration & Mitigation Services
        </Link>
        <nav className="hidden md:flex gap-6 items-center text-sm">
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#locations">Locations</a>
          <a
            href="#contact"
            className="ml-4 px-4 py-2 bg-emerald-600 text-white rounded"
          >
            Call Now: 888.450.6580
          </a>
        </nav>
        <div className="md:hidden">
          <a
            href="tel:8884506580"
            className="px-3 py-2 bg-emerald-600 text-white rounded"
          >
            Call
          </a>
        </div>
      </div>
    </header>
  );
}
