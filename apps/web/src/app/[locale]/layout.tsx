import type { Metadata } from "next";
import { Noto_Sans, Noto_Sans_Tamil } from "next/font/google";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ThemeToggle from "@/components/ThemeToggle";
import "../globals.css";

const latin = Noto_Sans({ subsets: ["latin"], variable: "--font-sans-latin" });
const tamil = Noto_Sans_Tamil({
  subsets: ["tamil"],
  variable: "--font-sans-tamil",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return { title: t("title"), description: t("description") };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  return (
    <html lang={locale} className={`${latin.variable} ${tamil.variable}`}>
      <body className="min-h-screen antialiased">
        <NextIntlClientProvider>
          <Header />
          <main className="mx-auto max-w-5xl px-4 py-10">{children}</main>
          <Footer />
          <WhatsAppButton />
          <ThemeToggle />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
