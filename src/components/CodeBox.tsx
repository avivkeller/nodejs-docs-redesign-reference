import { getLanguageDisplayName } from "@node-core/mdx/utils";
import type { FC, PropsWithChildren } from "react";

import BaseCodeBox from "@node-core/ui-components/Common/BaseCodeBox";

type CodeBoxProps = { className?: string; showCopyButton?: string };

const MDXCodeBox: FC<PropsWithChildren<CodeBoxProps>> = ({
  children: code,
  className,
  showCopyButton,
}) => {
  const matches = className?.match(/language-(?<language>[a-zA-Z]+)/);
  const language = matches?.groups?.language ?? "";

  return (
    <BaseCodeBox
      onCopy={() => {}}
      copiedText="copiedText"
      copyText="copyText"
      language={getLanguageDisplayName(language)}
      showCopyButton={showCopyButton ? showCopyButton === "true" : undefined}
      className={className}
    >
      {code}
    </BaseCodeBox>
  );
};

export default MDXCodeBox;
