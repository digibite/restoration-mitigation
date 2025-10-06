import type { Service } from "../../types";

export default function ServiceCard({ title, subtitle, description }: Service) {
  return (
    <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
      <h3 className="text-lg font-semibold text-emerald-700">{title}</h3>
      {subtitle && <div className="text-sm text-gray-500">{subtitle}</div>}
      {description && (
        <p className="mt-3 text-gray-600 text-sm">{description}</p>
      )}
    </div>
  );
}
