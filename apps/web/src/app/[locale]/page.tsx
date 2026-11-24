import { use } from "react";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { courseKeys, site } from "@/config/site";

export default function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations("home");
  const c = useTranslations("courses.items");

  return (
    <div className="space-y-16">
      <section className="hero p-8 sm:p-14">
        <h1 className="text-4xl font-extrabold leading-tight sm:text-6xl">
          <span className="gradient-text">{t("heroTitle")}</span>
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-soft">{t("heroText")}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/courses"
            className="btn-primary rounded-full px-7 py-3 font-semibold"
          >
            {t("ctaCourses")}
          </Link>
          <a
            href={`tel:${site.phone.replace(/\s/g, "")}`}
            className="rounded-full border border-line-strong px-7 py-3 font-semibold hover:bg-hover"
          >
            {t("ctaCall")}: {site.phone}
          </a>
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-3xl font-extrabold">{t("coursesTitle")}</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {courseKeys.map((k) => (
            <div key={k} className="card p-5">
              <h3 className="font-bold text-brand-dark">{c(`${k}.title`)}</h3>
              <p className="mt-2 text-sm text-muted">{c(`${k}.desc`)}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-3xl font-extrabold">{t("whyTitle")}</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {(["why1", "why2", "why3"] as const).map((k) => (
            <div key={k} className="card p-5 text-soft">
              {t(k)}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
