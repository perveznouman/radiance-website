import { useTranslations } from "next-intl";
import { site } from "@/config/site";

export default function Footer() {
  const t = useTranslations("footer");
  return (
    <footer className="mt-16 border-t border-line py-6 text-center text-sm text-muted">
      © {new Date().getFullYear()} {site.name}. {t("rights")}
    </footer>
  );
}
