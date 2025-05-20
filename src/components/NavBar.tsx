"use client";

import { useState } from "react";
import ThemeToggle from "@node-core/ui-components/Common/ThemeToggle";
import NavBar from "@node-core/ui-components/Containers/NavBar";
import GitHubIcon from "@node-core/ui-components/Icons/Social/GitHub";
import styles from "@node-core/ui-components/Containers/NavBar/index.module.css";
import type { FC } from "react";
import NodejsIcon from "@node-core/ui-components/Icons/Logos/Nodejs";

const navigationItems = Object.entries({
  learn: {
    link: "/learn",
    label: "Learn",
  },
  about: {
    link: "/about",
    label: "About",
  },
  download: {
    link: "/download",
    label: "Download",
  },
  blog: {
    link: "/blog",
    label: "Blog",
  },
  docs: {
    link: "https://nodejs.org/docs/latest/api/",
    label: "Docs",
  },
  contribute: {
    link: "https://github.com/nodejs/node/blob/main/CONTRIBUTING.md",
    label: "Contribute",
    target: "_blank",
  },
  certification: {
    link: "https://training.linuxfoundation.org/openjs/",
    label: "Certification",
    target: "_blank",
  },
});

const WithNavBar: FC = () => {
  // Use state to track the current theme
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Simplified toggle function
  const toggleCurrentTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div>
      <NavBar
        navItems={navigationItems.map(([, { label, link, target }]) => ({
          link,
          text: label,
          target,
        }))}
        pathname={"/"}
        as={"a"}
        Logo={NodejsIcon}
        sidebarItemTogglerAriaLabel={
          "components.containers.navBar.controls.toggle"
        }
      >
        <ThemeToggle
          onClick={toggleCurrentTheme}
          ariaLabel={"components.common.themeToggle.label"}
        />

        <a
          href="https://github.com/nodejs/node"
          aria-label="Node.js Github"
          className={styles.ghIconWrapper}
        >
          <GitHubIcon />
        </a>
      </NavBar>
    </div>
  );
};

export default WithNavBar;
