export default function ContactForm() {
  const ACTION_URL = "https://formspree.io/f/FORMSPREE_ID"; // <- replace FORMSPREE_ID

  return (
    <form action={ACTION_URL} method="POST" className="grid gap-3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <input
          name="name"
          placeholder="Name *"
          required
          className="p-3 border rounded"
        />
        <input
          name="email"
          placeholder="Email *"
          required
          type="email"
          className="p-3 border rounded"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <input
          name="phone"
          placeholder="Phone *"
          required
          className="p-3 border rounded"
        />
        <select name="service" className="p-3 border rounded">
          <option>Emergency Services</option>
          <option>Water Damage Restoration</option>
          <option>Fire & Smoke Restoration</option>
          <option>Storm Damage</option>
          <option>Mold Remediation</option>
        </select>
      </div>
      <textarea
        name="message"
        placeholder="Describe issue or add notes"
        rows={4}
        className="p-3 border rounded"
      ></textarea>
      <button
        type="submit"
        className="px-4 py-2 bg-emerald-600 text-white rounded"
      >
        Submit
      </button>
    </form>
  );
}
