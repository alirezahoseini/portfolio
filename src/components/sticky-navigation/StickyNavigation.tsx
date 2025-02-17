import React from "react";
import { useTranslations } from "next-intl";
import styles from "./sticky-navigation.module.css";
import NavigationLink from "./NavigationLink";

const StickyNavigation = () => {
  const t = useTranslations("Navigation");
  return (
    <nav id={styles.nav}>
      <ul>
        <NavigationLink href="/" className={styles.navItem}>
          {t("home")}
        </NavigationLink>

        <NavigationLink href={"/about"} className={styles.navItem}>
          {t("about")}
        </NavigationLink>

        <NavigationLink href={"/projects"} className={styles.navItem}>
          {t("projects")}
        </NavigationLink>

        <NavigationLink href={"/connect"} className={styles.navItem}>
          {t("connect")}
        </NavigationLink>

        <span id={styles.navSlider}></span>
      </ul>
    </nav>
  );
};

export default StickyNavigation;
