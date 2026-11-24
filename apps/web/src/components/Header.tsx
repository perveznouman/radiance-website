import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { site } from "@/config/site";
import LanguageSwitcher from "./LanguageSwitcher";

const links = [
  ["/", "home"],
  ["/about", "about"],
  ["/courses", "courses"],
  ["/gallery", "gallery"],
  ["/contact", "contact"],
] as const;

export default function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  return (
    <header className="sticky top-0 z-10 border-b border-line bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.jpg"
            alt=""
            width={700}
            height={480}
            priority
            className="h-10 w-auto rounded-md bg-white"
          />
          <span className="text-xl font-extrabold gradient-text">{site.name}</span>
        </Link>
        <nav className="flex flex-wrap items-center gap-4 text-sm font-medium">
          {links.map(([href, key]) => (
            <Link key={key} href={href} className="hover:text-brand">
              {t(key)}
            </Link>
          ))}
          <LanguageSwitcher current={locale} label={t("language")} />
        </nav>
      </div>
    </header>
  );
}
