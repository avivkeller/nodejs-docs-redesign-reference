// @ts-ignore
import { getLanguageDisplayName } from "@node-core/rehype-shiki";
import type { FC, PropsWithChildren } from "react";

import BaseCodeBox from "@node-core/ui-components/Common/BaseCodeBox";

type CodeBoxProps = { className?: string; showCopyButton?: string };

const MDXCodeBox: FC<PropsWithChildren<CodeBoxProps>> = ({
  children: code,
  className,
}) => {
  const matches = className?.match(/language-(?<language>[a-zA-Z]+)/);
  const language = matches?.groups?.language ?? "";

  return (
    <BaseCodeBox
      onCopy={() => {}}
      copiedText="copiedText"
      copyText="copyText"
      language={getLanguageDisplayName(language)}
      showCopyButton={true}
      className={className}
    >
      {code}
    </BaseCodeBox>
  );
};

export default MDXCodeBox;
