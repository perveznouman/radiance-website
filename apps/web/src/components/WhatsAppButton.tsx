import { site } from "@/config/site";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${site.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-5 right-5 z-20 rounded-full bg-green-500 px-5 py-3 font-semibold text-white shadow-lg hover:bg-green-600"
    >
      WhatsApp
    </a>
  );
}
