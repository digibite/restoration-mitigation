import ServiceCard from "../components/ServiceCard";
import ContactForm from "../components/ContactForm";

const services = [
  {
    id: "water",
    title: "Water Damage Restoration",
    subtitle: "RESTORE + REVIVE",
    description:
      "24/7 extraction, drying, dehumidification, and structural drying.",
  },
  {
    id: "fire",
    title: "Fire & Smoke Damage",
    subtitle: "REFRESH + RECONSTRUCT",
    description:
      "Soot cleanup, odor removal, and coordination for rebuild and insurance.",
  },
  {
    id: "storm",
    title: "Storm & Wind Damage",
    subtitle: "RECOVER + REBUILD",
    description:
      "Roof tarps, structural stabilization, and full storm recovery services.",
  },
];

const locations = [
  "Atlanta, GA",
  "Austin, TX",
  "Baltimore, MD",
  "Boston, MA",
  "Charlotte, NC",
  "Dallas, TX",
  "Denver, CO",
  "Houston, TX",
  "Orlando, FL",
  "Phoenix, AZ",
  "Seattle, WA",
  "Tampa, FL",
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-emerald-700 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h1 className="text-3xl md:text-5xl font-bold">
                24/7 Emergency Restoration
              </h1>
              <p className="mt-4 max-w-2xl">
                Our teams provides emergency restoration for water, fire, storm
                damage and mold — rapid response in Marietta Georgia.
              </p>
              <div className="mt-6 flex gap-4">
                <a
                  href="#contact"
                  className="bg-white text-emerald-700 px-4 py-2 rounded"
                >
                  Request Help
                </a>
                <a
                  href="#services"
                  className="border border-white px-4 py-2 rounded"
                >
                  Our Services
                </a>
              </div>
            </div>
            <div className="flex-1 text-center">
              <div className="inline-block bg-white text-emerald-700 rounded-lg p-6 shadow">
                <div className="text-sm">24/7 EMERGENCY</div>
                <div className="mt-2 text-2xl font-bold">888.450.6580</div>
                <div className="mt-2 text-sm">Call Now</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold">Our Services</h2>
        <p className="text-gray-700 mt-2">
          Comprehensive residential and commercial restoration services.
        </p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s) => (
            <ServiceCard key={s.id} {...s} />
          ))}
        </div>
      </section>

      {/* Process */}
      <section id="process" className="bg-white py-8">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-semibold">Restoration Process</h2>
          <ol className="mt-4 space-y-3 text-gray-700 list-decimal list-inside">
            <li>Rapid assessment & containment</li>
            <li>Mitigation & drying</li>
            <li>Restoration & rebuild</li>
            <li>Final inspection & paperwork</li>
          </ol>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold">Testimonials</h2>
        <div className="mt-6 space-y-4">
          <blockquote className="p-4 bg-white shadow rounded">
            &ldquo;They were there quickly and handled the whole insurance
            process.&rdquo;{" "}
            <div className="mt-2 text-sm text-gray-600">— Whitney M.</div>
          </blockquote>
          <blockquote className="p-4 bg-white shadow rounded">
            &ldquo;What they did with our house was nothing short of a
            miracle.&rdquo;{" "}
            <div className="mt-2 text-sm text-gray-600">— Carl & Nancy O.</div>
          </blockquote>
        </div>
      </section>

      {/* Locations */}
      <section id="locations" className="bg-gray-50 py-8">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-semibold">Service Locations</h2>
          <p className="text-gray-700 mt-2">
            Strategically positioned centers to provide quick response across
            the US.
          </p>
          <ul className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-2 text-sm text-gray-700">
            {locations.map((loc) => (
              <li key={loc} className="bg-white p-2 rounded shadow-sm">
                {loc}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold">Contact Us / Request Help</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-gray-700">
              Call 24/7: <strong>888.450.6580</strong>
            </p>
            <p className="mt-4 text-gray-600">
              We work with insurance companies to coordinate claims and get your
              property restored quickly.
            </p>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
