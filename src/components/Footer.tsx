export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-12">
      <div className="container mx-auto px-6 py-8 text-sm text-gray-600 flex justify-between flex-wrap gap-3">
        <div>
          © {new Date().getFullYear()} Restoration & Mitigation Services
        </div>
        <div>888.450.6580 • Licensed & Insured</div>
      </div>
    </footer>
  );
}
