"use client";

import MetaBar from "@node-core/ui-components/Containers/MetaBar";
import GitHubIcon from "@node-core/ui-components/Icons/Social/GitHub";
import type { FC } from "react";

const WithMetaBar: FC = () => {
  return (
    <MetaBar
      heading={"tableOfContents"}
      as={"a"}
      items={{}}
      headings={{ items: [] }}
    />
  );
};

export default WithMetaBar;
