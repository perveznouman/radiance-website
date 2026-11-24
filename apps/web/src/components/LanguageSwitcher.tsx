"use client";

import { usePathname, useRouter } from "@/i18n/navigation";

export default function LanguageSwitcher({
  current,
  label,
}: {
  current: string;
  label: string;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const next = current === "en" ? "ta" : "en";
  return (
    <button
      type="button"
      onClick={() => router.replace(pathname, { locale: next })}
      className="rounded-full border border-brand px-3 py-1 text-brand hover:bg-brand-soft"
    >
      {label}
    </button>
  );
}
