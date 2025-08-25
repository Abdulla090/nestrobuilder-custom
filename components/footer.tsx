"use client"

import { useLanguage } from "@/contexts/language-context"

export default function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full py-12 bg-muted/50 border-t border-primary/10">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">
              Nestro<span className="text-primary">Builder</span>
            </h3>
            <p className="text-sm text-muted-foreground max-w-md">{t("footer.description")}</p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">{t("contact.title")}</h3>
            <ul className="space-y-3">
              <li className="text-sm text-muted-foreground">
                <span className="font-medium">{t("contact.info.email")}:</span> nestrobuilder@gmail.com
              </li>
              <li className="text-sm text-muted-foreground">
                <span className="font-medium">{t("contact.info.phone")}:</span> +964(0)7516695482
              </li>
              <li className="text-sm text-muted-foreground">
                <span className="font-medium">{t("contact.info.address")}:</span> Erbil - Kurdistan
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-12 pt-8 border-t border-primary/10">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Nestro Builder. {t("footer.rights")}
          </p>
          <div className="mt-4 sm:mt-0 text-sm text-muted-foreground">{t("footer.designed")}</div>
        </div>
      </div>
    </footer>
  )
}
