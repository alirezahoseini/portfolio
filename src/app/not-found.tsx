import { routing } from "@/i18n/routing";
import BaseLayout from "@/providers/BaseLayout";

export default function GlobalNotFound() {
  return (
    <BaseLayout locale={routing.defaultLocale}>
      <p>Not found</p>
    </BaseLayout>
  );
}
