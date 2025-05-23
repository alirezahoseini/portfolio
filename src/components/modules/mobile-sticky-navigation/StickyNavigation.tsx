import React from "react"
import { useTranslations } from "next-intl"
import styles from "./sticky-navigation.module.css"
import NavigationLink from "./NavigationLink"

const StickyNavigation = () => {
  const t = useTranslations("Navigation")
  return (
    <nav
      id={styles.nav} 
      className="z-50 bg-gradient-to-t from-bg900-light dark:from-bg900-dark
      pointer-events-none min-h-16"
    >
      <ul
        className="bg-white dark:bg-zinc-900
       border-slate-200 border-solid border dark:border-zinc-700
       text-zinc-600 dark:text-zinc-100 lg:!hidden"
      >
        <NavigationLink href="/" className={styles.navItem}>
          {t("home")}
        </NavigationLink>

        <NavigationLink href="/about" className={styles.navItem}>
          {t("about")}
        </NavigationLink>

        <NavigationLink href="/projects" className={styles.navItem}>
          {t("projects")}
        </NavigationLink>

        <NavigationLink href="/contact" className={styles.navItem}>
          {t("contact")}
        </NavigationLink>

        <span 
          id={styles.navSlider}
          className="bg-zinc-200 dark:bg-zinc-800 pointer-events-none "
        >
        </span>
      </ul>
    </nav>
  )
}

export default React.memo(StickyNavigation)