import { use } from "react";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { site } from "@/config/site";

export default function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations("contact");
  return (
    <div className="max-w-2xl space-y-5">
      <h1 className="text-4xl font-extrabold gradient-text">{t("title")}</h1>
      <p>
        <strong>{t("address")}:</strong> {site.address}
      </p>
      <p>
        <strong>{t("phone")}:</strong>{" "}
        <a className="text-brand underline" href={`tel:${site.phone.replace(/\s/g, "")}`}>
          {site.phone}
        </a>
      </p>
      <p>
        <strong>{t("email")}:</strong>{" "}
        <a className="text-brand underline" href={`mailto:${site.email}`}>
          {site.email}
        </a>
      </p>
      <div className="flex flex-wrap gap-3">
        <a
          href={`https://wa.me/${site.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-green-500 px-5 py-2 font-semibold text-white hover:bg-green-600"
        >
          {t("whatsapp")}
        </a>
        <a
          href={site.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-brand px-5 py-2 font-semibold text-brand hover:bg-brand-soft"
        >
          {t("instagram")}
        </a>
        <a
          href={site.mapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-line-strong px-5 py-2 font-semibold hover:bg-hover"
        >
          {t("directions")}
        </a>
      </div>
      {site.mapsEmbedUrl && (
        <iframe
          src={site.mapsEmbedUrl}
          className="h-80 w-full rounded-xl border-0"
          loading="lazy"
          title="Map"
        />
      )}
    </div>
  );
}
