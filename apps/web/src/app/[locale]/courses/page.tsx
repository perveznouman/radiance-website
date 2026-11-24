import { use } from "react";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { courseKeys } from "@/config/site";

export default function CoursesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations("courses");
  return (
    <div>
      <h1 className="mb-6 text-4xl font-extrabold gradient-text">{t("title")}</h1>
      <div className="grid gap-4 sm:grid-cols-2">
        {courseKeys.map((k) => (
          <div key={k} className="card p-5">
            <h2 className="text-lg font-semibold text-brand-dark">
              {t(`items.${k}.title`)}
            </h2>
            <p className="mt-1 text-muted">{t(`items.${k}.desc`)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
