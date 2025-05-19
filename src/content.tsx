// @ts-nocheck
import { CodeBox, CodeTabs, Blockquote, AlertBox } from "./components";

export default (
  <>
    <>
      <h1>{"Diagnostics Channel"}</h1>
      {"\n"}
      <AlertBox level="success" title="2">
        {"Stable"}
      </AlertBox>
      {"\n"}
      <p>
        {"The "}
        <code>{"node:diagnostics_channel"}</code>
        {
          " module provides an API to create named channels\nto report arbitrary message data for diagnostics purposes."
        }
      </p>
      {"\n"}
      <p>{"It can be accessed using:"}</p>
      {"\n"}
      <CodeTabs languages="mjs|cjs" displayNames="|" defaultTab="0">
        <CodeBox
          className="shiki nord language-mjs"
          style={{
            backgroundColor: "#2e3440ff",
            color: "#d8dee9ff",
          }}
          tabIndex="0"
        >
          <code>
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"import"}
              </span>
              <span
                style={{
                  color: "#8FBCBB",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" from"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" '"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"node:diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
          </code>
        </CodeBox>
        <CodeBox
          className="shiki nord language-cjs"
          style={{
            backgroundColor: "#2e3440ff",
            color: "#d8dee9ff",
          }}
          tabIndex="0"
        >
          <code>
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"const"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" ="}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {" require"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"node:diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
          </code>
        </CodeBox>
      </CodeTabs>
      <p>
        {
          "It is intended that a module writer wanting to report diagnostics messages\nwill create one or many top-level channels to report messages through.\nChannels may also be acquired at runtime but it is not encouraged\ndue to the additional overhead of doing so. Channels may be exported for\nconvenience, but as long as the name is known it can be acquired anywhere."
        }
      </p>
      {"\n"}
      <p>
        {
          "If you intend for your module to produce diagnostics data for others to\nconsume it is recommended that you include documentation of what named\nchannels are used along with the shape of the message data. Channel names\nshould generally include the module name to avoid collisions with data from\nother modules."
        }
      </p>
    </>
    {"\n"}
    <>
      <h2>{"Public API"}</h2>
    </>
    {"\n"}
    <>
      <h3>{"Overview"}</h3>
      {"\n"}
      <p>{"Following is a simple overview of the public API."}</p>
      {"\n"}
      <CodeTabs languages="mjs|cjs" displayNames="|" defaultTab="0">
        <CodeBox
          className="shiki nord language-mjs"
          style={{
            backgroundColor: "#2e3440ff",
            color: "#d8dee9ff",
          }}
          tabIndex="0"
        >
          <code>
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"import"}
              </span>
              <span
                style={{
                  color: "#8FBCBB",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" from"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" '"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"node:diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#707e99",
                }}
              >
                {"// Get a reusable channel object"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"const"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" channel"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" ="}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"channel"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"my-channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"function"}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {" onMessage"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"message"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {","}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" name"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" {"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#707e99",
                }}
              >
                {"  // Received data"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"}"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#707e99",
                }}
              >
                {"// Subscribe to the channel"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"subscribe"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"my-channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {","}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" onMessage"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#707e99",
                }}
              >
                {"// Check if the channel has an active subscriber"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"if"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {" ("}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"hasSubscribers"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {") "}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"{"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#707e99",
                }}
              >
                {"  // Publish data to the channel"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"  channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"publish"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"{"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"    some"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {":"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" '"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"data"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {","}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"  }"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"}"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#707e99",
                }}
              >
                {"// Unsubscribe from the channel"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"unsubscribe"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"my-channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {","}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" onMessage"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
          </code>
        </CodeBox>
        <CodeBox
          className="shiki nord language-cjs"
          style={{
            backgroundColor: "#2e3440ff",
            color: "#d8dee9ff",
          }}
          tabIndex="0"
        >
          <code>
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"const"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" ="}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {" require"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"node:diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#707e99",
                }}
              >
                {"// Get a reusable channel object"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"const"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" channel"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" ="}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"channel"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"my-channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"function"}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {" onMessage"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"message"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {","}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" name"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" {"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#707e99",
                }}
              >
                {"  // Received data"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"}"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#707e99",
                }}
              >
                {"// Subscribe to the channel"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"subscribe"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"my-channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {","}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" onMessage"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#707e99",
                }}
              >
                {"// Check if the channel has an active subscriber"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"if"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {" ("}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"hasSubscribers"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {") "}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"{"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#707e99",
                }}
              >
                {"  // Publish data to the channel"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"  channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"publish"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"{"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"    some"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {":"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" '"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"data"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {","}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"  }"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"}"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#707e99",
                }}
              >
                {"// Unsubscribe from the channel"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"unsubscribe"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"my-channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {","}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" onMessage"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
          </code>
        </CodeBox>
      </CodeTabs>
    </>
    {"\n"}
    <>
      <h4>
        <code>{"diagnostics_channel.hasSubscribers(name)"}</code>
      </h4>
      {"\n"}
      <ul>
        {"\n"}
        <li>
          <code>{"name"}</code>
          {" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type">
            <code>{"<string>"}</code>
          </a>
          {" | "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Symbol_type">
            <code>{"<symbol>"}</code>
          </a>
          {" The channel name"}
        </li>
        {"\n"}
        <li>
          {"Returns: "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type">
            <code>{"<boolean>"}</code>
          </a>
          {" If there are active subscribers"}
        </li>
        {"\n"}
      </ul>
      {"\n"}
      <p>
        {
          "Check if there are active subscribers to the named channel. This is helpful if\nthe message you want to send might be expensive to prepare."
        }
      </p>
      {"\n"}
      <p>
        {
          "This API is optional but helpful when trying to publish messages from very\nperformance-sensitive code."
        }
      </p>
      {"\n"}
      <CodeTabs languages="mjs|cjs" displayNames="|" defaultTab="0">
        <CodeBox
          className="shiki nord language-mjs"
          style={{
            backgroundColor: "#2e3440ff",
            color: "#d8dee9ff",
          }}
          tabIndex="0"
        >
          <code>
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"import"}
              </span>
              <span
                style={{
                  color: "#8FBCBB",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" from"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" '"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"node:diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"if"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {" ("}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"hasSubscribers"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"my-channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")) "}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"{"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#707e99",
                }}
              >
                {"  // There are subscribers, prepare and publish message"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"}"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
          </code>
        </CodeBox>
        <CodeBox
          className="shiki nord language-cjs"
          style={{
            backgroundColor: "#2e3440ff",
            color: "#d8dee9ff",
          }}
          tabIndex="0"
        >
          <code>
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"const"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" ="}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {" require"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"node:diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"if"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {" ("}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"hasSubscribers"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"my-channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")) "}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"{"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#707e99",
                }}
              >
                {"  // There are subscribers, prepare and publish message"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"}"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
          </code>
        </CodeBox>
      </CodeTabs>
    </>
    {"\n"}
    <>
      <h4>
        <code>{"diagnostics_channel.channel(name)"}</code>
      </h4>
      {"\n"}
      <ul>
        {"\n"}
        <li>
          <code>{"name"}</code>
          {" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type">
            <code>{"<string>"}</code>
          </a>
          {" | "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Symbol_type">
            <code>{"<symbol>"}</code>
          </a>
          {" The channel name"}
        </li>
        {"\n"}
        <li>
          {"Returns: "}
          <a href="diagnostics_channel.html#class-channel">
            <code>{"<Channel>"}</code>
          </a>
          {" The named channel object"}
        </li>
        {"\n"}
      </ul>
      {"\n"}
      <p>
        {
          "This is the primary entry-point for anyone wanting to publish to a named\nchannel. It produces a channel object which is optimized to reduce overhead at\npublish time as much as possible."
        }
      </p>
      {"\n"}
      <CodeTabs languages="mjs|cjs" displayNames="|" defaultTab="0">
        <CodeBox
          className="shiki nord language-mjs"
          style={{
            backgroundColor: "#2e3440ff",
            color: "#d8dee9ff",
          }}
          tabIndex="0"
        >
          <code>
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"import"}
              </span>
              <span
                style={{
                  color: "#8FBCBB",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" from"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" '"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"node:diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"const"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" channel"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" ="}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"channel"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"my-channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
          </code>
        </CodeBox>
        <CodeBox
          className="shiki nord language-cjs"
          style={{
            backgroundColor: "#2e3440ff",
            color: "#d8dee9ff",
          }}
          tabIndex="0"
        >
          <code>
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"const"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" ="}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {" require"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"node:diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"const"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" channel"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" ="}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"channel"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"my-channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
          </code>
        </CodeBox>
      </CodeTabs>
    </>
    {"\n"}
    <>
      <h4>
        <code>{"diagnostics_channel.subscribe(name, onMessage)"}</code>
      </h4>
      {"\n"}
      <ul>
        {"\n"}
        <li>
          <code>{"name"}</code>
          {" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type">
            <code>{"<string>"}</code>
          </a>
          {" | "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Symbol_type">
            <code>{"<symbol>"}</code>
          </a>
          {" The channel name"}
        </li>
        {"\n"}
        <li>
          <code>{"onMessage"}</code>
          {" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function">
            <code>{"<Function>"}</code>
          </a>
          {" The handler to receive channel messages"}
          {"\n"}
          <ul>
            {"\n"}
            <li>
              <code>{"message"}</code>
              {" "}
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types">
                <code>{"<any>"}</code>
              </a>
              {" The message data"}
            </li>
            {"\n"}
            <li>
              <code>{"name"}</code>
              {" "}
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type">
                <code>{"<string>"}</code>
              </a>
              {" | "}
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Symbol_type">
                <code>{"<symbol>"}</code>
              </a>
              {" The name of the channel"}
            </li>
            {"\n"}
          </ul>
          {"\n"}
        </li>
        {"\n"}
      </ul>
      {"\n"}
      <p>
        {
          "Register a message handler to subscribe to this channel. This message handler\nwill be run synchronously whenever a message is published to the channel. Any\nerrors thrown in the message handler will trigger an "
        }
        <a href="process.html#event-uncaughtexception">
          <code>{"'uncaughtException'"}</code>
        </a>
        {"."}
      </p>
      {"\n"}
      <CodeTabs languages="mjs|cjs" displayNames="|" defaultTab="0">
        <CodeBox
          className="shiki nord language-mjs"
          style={{
            backgroundColor: "#2e3440ff",
            color: "#d8dee9ff",
          }}
          tabIndex="0"
        >
          <code>
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"import"}
              </span>
              <span
                style={{
                  color: "#8FBCBB",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" from"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" '"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"node:diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"subscribe"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"my-channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {","}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" ("}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"message"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {","}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" name"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" =>"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" {"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#707e99",
                }}
              >
                {"  // Received data"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"}"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
          </code>
        </CodeBox>
        <CodeBox
          className="shiki nord language-cjs"
          style={{
            backgroundColor: "#2e3440ff",
            color: "#d8dee9ff",
          }}
          tabIndex="0"
        >
          <code>
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"const"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" ="}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {" require"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"node:diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"subscribe"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"my-channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {","}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" ("}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"message"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {","}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" name"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" =>"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" {"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#707e99",
                }}
              >
                {"  // Received data"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"}"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
          </code>
        </CodeBox>
      </CodeTabs>
    </>
    {"\n"}
    <>
      <h4>
        <code>{"diagnostics_channel.unsubscribe(name, onMessage)"}</code>
      </h4>
      {"\n"}
      <ul>
        {"\n"}
        <li>
          <code>{"name"}</code>
          {" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type">
            <code>{"<string>"}</code>
          </a>
          {" | "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Symbol_type">
            <code>{"<symbol>"}</code>
          </a>
          {" The channel name"}
        </li>
        {"\n"}
        <li>
          <code>{"onMessage"}</code>
          {" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function">
            <code>{"<Function>"}</code>
          </a>
          {" The previous subscribed handler to remove"}
        </li>
        {"\n"}
        <li>
          {"Returns: "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type">
            <code>{"<boolean>"}</code>
          </a>
          {" "}
          <code>{"true"}</code>
          {" if the handler was found, "}
          <code>{"false"}</code>
          {" otherwise."}
        </li>
        {"\n"}
      </ul>
      {"\n"}
      <p>
        {
          "Remove a message handler previously registered to this channel with\n"
        }
        <a href="#diagnostics_channelsubscribename-onmessage">
          <code>{"diagnostics_channel.subscribe(name, onMessage)"}</code>
        </a>
        {"."}
      </p>
      {"\n"}
      <CodeTabs languages="mjs|cjs" displayNames="|" defaultTab="0">
        <CodeBox
          className="shiki nord language-mjs"
          style={{
            backgroundColor: "#2e3440ff",
            color: "#d8dee9ff",
          }}
          tabIndex="0"
        >
          <code>
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"import"}
              </span>
              <span
                style={{
                  color: "#8FBCBB",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" from"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" '"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"node:diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"function"}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {" onMessage"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"message"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {","}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" name"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" {"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#707e99",
                }}
              >
                {"  // Received data"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"}"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"subscribe"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"my-channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {","}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" onMessage"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"unsubscribe"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"my-channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {","}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" onMessage"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
          </code>
        </CodeBox>
        <CodeBox
          className="shiki nord language-cjs"
          style={{
            backgroundColor: "#2e3440ff",
            color: "#d8dee9ff",
          }}
          tabIndex="0"
        >
          <code>
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"const"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" ="}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {" require"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"node:diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"function"}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {" onMessage"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"message"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {","}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" name"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" {"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#707e99",
                }}
              >
                {"  // Received data"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"}"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"subscribe"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"my-channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {","}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" onMessage"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"unsubscribe"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"my-channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {","}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" onMessage"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
          </code>
        </CodeBox>
      </CodeTabs>
    </>
    {"\n"}
    <>
      <h4>
        <code>{"diagnostics_channel.tracingChannel(nameOrChannels)"}</code>
      </h4>
      {"\n"}
      <AlertBox level="warning" title="1">
        {"Experimental"}
      </AlertBox>
      {"\n"}
      <ul>
        {"\n"}
        <li>
          <code>{"nameOrChannels"}</code>
          {" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type">
            <code>{"<string>"}</code>
          </a>
          {" | "}
          <a href="diagnostics_channel.html#class-tracingchannel">
            <code>{"<TracingChannel>"}</code>
          </a>
          {" Channel name or\nobject containing all the "}
          <a href="#tracingchannel-channels">{"TracingChannel Channels"}</a>
        </li>
        {"\n"}
        <li>
          {"Returns: "}
          <a href="diagnostics_channel.html#class-tracingchannel">
            <code>{"<TracingChannel>"}</code>
          </a>
          {" Collection of channels to trace with"}
        </li>
        {"\n"}
      </ul>
      {"\n"}
      <p>
        {"Creates a "}
        <a href="#class-tracingchannel">
          <code>{"TracingChannel"}</code>
        </a>
        {" wrapper for the given\n"}
        <a href="#tracingchannel-channels">{"TracingChannel Channels"}</a>
        {
          ". If a name is given, the corresponding tracing\nchannels will be created in the form of "
        }
        <code>{"tracing:${name}:${eventType}"}</code>
        {" where\n"}
        <code>{"eventType"}</code>
        {" corresponds to the types of "}
        <a href="#tracingchannel-channels">{"TracingChannel Channels"}</a>
        {"."}
      </p>
      {"\n"}
      <CodeTabs languages="mjs|cjs" displayNames="|" defaultTab="0">
        <CodeBox
          className="shiki nord language-mjs"
          style={{
            backgroundColor: "#2e3440ff",
            color: "#d8dee9ff",
          }}
          tabIndex="0"
        >
          <code>
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"import"}
              </span>
              <span
                style={{
                  color: "#8FBCBB",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" from"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" '"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"node:diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"const"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" channelsByName"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" ="}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"tracingChannel"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"my-channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#707e99",
                }}
              >
                {"// or..."}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"const"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" channelsByCollection"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" ="}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"tracingChannel"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"{"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"  start"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {":"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"channel"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"tracing:my-channel:start"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {","}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"  end"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {":"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"channel"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"tracing:my-channel:end"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {","}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"  asyncStart"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {":"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"channel"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"tracing:my-channel:asyncStart"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {","}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"  asyncEnd"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {":"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"channel"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"tracing:my-channel:asyncEnd"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {","}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"  error"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {":"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"channel"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"tracing:my-channel:error"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {","}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"}"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
          </code>
        </CodeBox>
        <CodeBox
          className="shiki nord language-cjs"
          style={{
            backgroundColor: "#2e3440ff",
            color: "#d8dee9ff",
          }}
          tabIndex="0"
        >
          <code>
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"const"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" ="}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {" require"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"node:diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"const"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" channelsByName"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" ="}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"tracingChannel"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"my-channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#707e99",
                }}
              >
                {"// or..."}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"const"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" channelsByCollection"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" ="}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"tracingChannel"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"{"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"  start"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {":"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"channel"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"tracing:my-channel:start"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {","}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"  end"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {":"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"channel"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"tracing:my-channel:end"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {","}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"  asyncStart"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {":"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"channel"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"tracing:my-channel:asyncStart"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {","}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"  asyncEnd"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {":"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"channel"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"tracing:my-channel:asyncEnd"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {","}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"  error"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {":"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"channel"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"tracing:my-channel:error"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {","}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"}"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
          </code>
        </CodeBox>
      </CodeTabs>
    </>
    {"\n"}
    <>
      <h3>
        {"Class: "}
        <code>{"Channel"}</code>
      </h3>
      {"\n"}
      <p>
        {"The class "}
        <code>{"Channel"}</code>
        {
          " represents an individual named channel within the data\npipeline. It is used to track subscribers and to publish messages when there\nare subscribers present. It exists as a separate object to avoid channel\nlookups at publish time, enabling very fast publish speeds and allowing\nfor heavy use while incurring very minimal cost. Channels are created with\n"
        }
        <a href="#diagnostics_channelchannelname">
          <code>{"diagnostics_channel.channel(name)"}</code>
        </a>
        {", constructing a channel directly\nwith "}
        <code>{"new Channel(name)"}</code>
        {" is not supported."}
      </p>
    </>
    {"\n"}
    <>
      <h4>
        <code>{"channel.hasSubscribers"}</code>
      </h4>
      {"\n"}
      <ul>
        {"\n"}
        <li>
          {"Returns: "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type">
            <code>{"<boolean>"}</code>
          </a>
          {" If there are active subscribers"}
        </li>
        {"\n"}
      </ul>
      {"\n"}
      <p>
        {
          "Check if there are active subscribers to this channel. This is helpful if\nthe message you want to send might be expensive to prepare."
        }
      </p>
      {"\n"}
      <p>
        {
          "This API is optional but helpful when trying to publish messages from very\nperformance-sensitive code."
        }
      </p>
      {"\n"}
      <CodeTabs languages="mjs|cjs" displayNames="|" defaultTab="0">
        <CodeBox
          className="shiki nord language-mjs"
          style={{
            backgroundColor: "#2e3440ff",
            color: "#d8dee9ff",
          }}
          tabIndex="0"
        >
          <code>
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"import"}
              </span>
              <span
                style={{
                  color: "#8FBCBB",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" from"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" '"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"node:diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"const"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" channel"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" ="}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"channel"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"my-channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"if"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {" ("}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"hasSubscribers"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {") "}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"{"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#707e99",
                }}
              >
                {"  // There are subscribers, prepare and publish message"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"}"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
          </code>
        </CodeBox>
        <CodeBox
          className="shiki nord language-cjs"
          style={{
            backgroundColor: "#2e3440ff",
            color: "#d8dee9ff",
          }}
          tabIndex="0"
        >
          <code>
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"const"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" ="}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {" require"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"node:diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"const"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" channel"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" ="}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"channel"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"my-channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"if"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {" ("}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"hasSubscribers"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {") "}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"{"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#707e99",
                }}
              >
                {"  // There are subscribers, prepare and publish message"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"}"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
          </code>
        </CodeBox>
      </CodeTabs>
    </>
    {"\n"}
    <>
      <h4>
        <code>{"channel.publish(message)"}</code>
      </h4>
      {"\n"}
      <ul>
        {"\n"}
        <li>
          <code>{"message"}</code>
          {" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types">
            <code>{"<any>"}</code>
          </a>
          {" The message to send to the channel subscribers"}
        </li>
        {"\n"}
      </ul>
      {"\n"}
      <p>
        {
          "Publish a message to any subscribers to the channel. This will trigger\nmessage handlers synchronously so they will execute within the same context."
        }
      </p>
      {"\n"}
      <CodeTabs languages="mjs|cjs" displayNames="|" defaultTab="0">
        <CodeBox
          className="shiki nord language-mjs"
          style={{
            backgroundColor: "#2e3440ff",
            color: "#d8dee9ff",
          }}
          tabIndex="0"
        >
          <code>
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"import"}
              </span>
              <span
                style={{
                  color: "#8FBCBB",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" from"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" '"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"node:diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"const"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" channel"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" ="}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"channel"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"my-channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"publish"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"{"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"  some"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {":"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" '"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"message"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {","}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"}"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
          </code>
        </CodeBox>
        <CodeBox
          className="shiki nord language-cjs"
          style={{
            backgroundColor: "#2e3440ff",
            color: "#d8dee9ff",
          }}
          tabIndex="0"
        >
          <code>
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"const"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" ="}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {" require"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"node:diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"const"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" channel"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" ="}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"channel"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"my-channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"publish"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"{"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"  some"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {":"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" '"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"message"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {","}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"}"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
          </code>
        </CodeBox>
      </CodeTabs>
    </>
    {"\n"}
    <>
      <h4>
        <code>{"channel.subscribe(onMessage)"}</code>
      </h4>
      {"\n"}
      <AlertBox level="danger" title="0">
        {"Deprecated: Use `diagnostics_channel.subscribe(name, onMessage)`"}
      </AlertBox>
      {"\n"}
      <ul>
        {"\n"}
        <li>
          <code>{"onMessage"}</code>
          {" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function">
            <code>{"<Function>"}</code>
          </a>
          {" The handler to receive channel messages"}
          {"\n"}
          <ul>
            {"\n"}
            <li>
              <code>{"message"}</code>
              {" "}
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types">
                <code>{"<any>"}</code>
              </a>
              {" The message data"}
            </li>
            {"\n"}
            <li>
              <code>{"name"}</code>
              {" "}
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type">
                <code>{"<string>"}</code>
              </a>
              {" | "}
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Symbol_type">
                <code>{"<symbol>"}</code>
              </a>
              {" The name of the channel"}
            </li>
            {"\n"}
          </ul>
          {"\n"}
        </li>
        {"\n"}
      </ul>
      {"\n"}
      <p>
        {
          "Register a message handler to subscribe to this channel. This message handler\nwill be run synchronously whenever a message is published to the channel. Any\nerrors thrown in the message handler will trigger an "
        }
        <a href="process.html#event-uncaughtexception">
          <code>{"'uncaughtException'"}</code>
        </a>
        {"."}
      </p>
      {"\n"}
      <CodeTabs languages="mjs|cjs" displayNames="|" defaultTab="0">
        <CodeBox
          className="shiki nord language-mjs"
          style={{
            backgroundColor: "#2e3440ff",
            color: "#d8dee9ff",
          }}
          tabIndex="0"
        >
          <code>
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"import"}
              </span>
              <span
                style={{
                  color: "#8FBCBB",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" from"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" '"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"node:diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"const"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" channel"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" ="}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"channel"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"my-channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"subscribe"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"message"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {","}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" name"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" =>"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" {"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#707e99",
                }}
              >
                {"  // Received data"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"}"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
          </code>
        </CodeBox>
        <CodeBox
          className="shiki nord language-cjs"
          style={{
            backgroundColor: "#2e3440ff",
            color: "#d8dee9ff",
          }}
          tabIndex="0"
        >
          <code>
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"const"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" ="}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {" require"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"node:diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"const"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" channel"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" ="}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"channel"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"my-channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"subscribe"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"message"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {","}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" name"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" =>"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" {"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#707e99",
                }}
              >
                {"  // Received data"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"}"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
          </code>
        </CodeBox>
      </CodeTabs>
    </>
    {"\n"}
    <>
      <h4>
        <code>{"channel.unsubscribe(onMessage)"}</code>
      </h4>
      {"\n"}
      <AlertBox level="danger" title="0">
        {"Deprecated: Use `diagnostics_channel.unsubscribe(name, onMessage)`"}
      </AlertBox>
      {"\n"}
      <ul>
        {"\n"}
        <li>
          <code>{"onMessage"}</code>
          {" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function">
            <code>{"<Function>"}</code>
          </a>
          {" The previous subscribed handler to remove"}
        </li>
        {"\n"}
        <li>
          {"Returns: "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type">
            <code>{"<boolean>"}</code>
          </a>
          {" "}
          <code>{"true"}</code>
          {" if the handler was found, "}
          <code>{"false"}</code>
          {" otherwise."}
        </li>
        {"\n"}
      </ul>
      {"\n"}
      <p>
        {
          "Remove a message handler previously registered to this channel with\n"
        }
        <a href="#channelsubscribeonmessage">
          <code>{"channel.subscribe(onMessage)"}</code>
        </a>
        {"."}
      </p>
      {"\n"}
      <CodeTabs languages="mjs|cjs" displayNames="|" defaultTab="0">
        <CodeBox
          className="shiki nord language-mjs"
          style={{
            backgroundColor: "#2e3440ff",
            color: "#d8dee9ff",
          }}
          tabIndex="0"
        >
          <code>
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"import"}
              </span>
              <span
                style={{
                  color: "#8FBCBB",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" from"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" '"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"node:diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"const"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" channel"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" ="}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"channel"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"my-channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"function"}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {" onMessage"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"message"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {","}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" name"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" {"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#707e99",
                }}
              >
                {"  // Received data"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"}"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"subscribe"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"onMessage"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"unsubscribe"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"onMessage"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
          </code>
        </CodeBox>
        <CodeBox
          className="shiki nord language-cjs"
          style={{
            backgroundColor: "#2e3440ff",
            color: "#d8dee9ff",
          }}
          tabIndex="0"
        >
          <code>
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"const"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" ="}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {" require"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"node:diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"const"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" channel"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" ="}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"channel"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"my-channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"function"}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {" onMessage"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"message"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {","}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" name"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" {"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#707e99",
                }}
              >
                {"  // Received data"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"}"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"subscribe"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"onMessage"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"unsubscribe"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"onMessage"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
          </code>
        </CodeBox>
      </CodeTabs>
    </>
    {"\n"}
    <>
      <h4>
        <code>{"channel.bindStore(store[, transform])"}</code>
      </h4>
      {"\n"}
      <AlertBox level="warning" title="1">
        {"Experimental"}
      </AlertBox>
      {"\n"}
      <ul>
        {"\n"}
        <li>
          <code>{"store"}</code>
          {" "}
          <a href="async_context.html#class-asynclocalstorage">
            <code>{"<AsyncLocalStorage>"}</code>
          </a>
          {" The store to which to bind the context data"}
        </li>
        {"\n"}
        <li>
          <code>{"transform"}</code>
          {" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function">
            <code>{"<Function>"}</code>
          </a>
          {" Transform context data before setting the store context"}
        </li>
        {"\n"}
      </ul>
      {"\n"}
      <p>
        {"When "}
        <a href="#channelrunstorescontext-fn-thisarg-args">
          <code>{"channel.runStores(context, ...)"}</code>
        </a>
        {
          " is called, the given context data\nwill be applied to any store bound to the channel. If the store has already been\nbound the previous "
        }
        <code>{"transform"}</code>
        {" function will be replaced with the new one.\nThe "}
        <code>{"transform"}</code>
        {
          " function may be omitted to set the given context data as the\ncontext directly."
        }
      </p>
      {"\n"}
      <CodeTabs languages="mjs|cjs" displayNames="|" defaultTab="0">
        <CodeBox
          className="shiki nord language-mjs"
          style={{
            backgroundColor: "#2e3440ff",
            color: "#d8dee9ff",
          }}
          tabIndex="0"
        >
          <code>
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"import"}
              </span>
              <span
                style={{
                  color: "#8FBCBB",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" from"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" '"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"node:diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"import"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" {"}
              </span>
              <span
                style={{
                  color: "#8FBCBB",
                }}
              >
                {" AsyncLocalStorage"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" }"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" from"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" '"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"node:async_hooks"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"const"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" store"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" ="}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" new"}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {" AsyncLocalStorage"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"()"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"const"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" channel"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" ="}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"channel"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"my-channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"bindStore"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"store"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {","}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" ("}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"data"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" =>"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" {"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"  return"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" {"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" data"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" }"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"}"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
          </code>
        </CodeBox>
        <CodeBox
          className="shiki nord language-cjs"
          style={{
            backgroundColor: "#2e3440ff",
            color: "#d8dee9ff",
          }}
          tabIndex="0"
        >
          <code>
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"const"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" ="}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {" require"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"node:diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"const"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" {"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" AsyncLocalStorage"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" }"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" ="}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {" require"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"node:async_hooks"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"const"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" store"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" ="}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" new"}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {" AsyncLocalStorage"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"()"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"const"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" channel"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" ="}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"channel"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"my-channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"bindStore"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"store"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {","}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" ("}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"data"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" =>"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" {"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"  return"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" {"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" data"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" }"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"}"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
          </code>
        </CodeBox>
      </CodeTabs>
    </>
    {"\n"}
    <>
      <h4>
        <code>{"channel.unbindStore(store)"}</code>
      </h4>
      {"\n"}
      <AlertBox level="warning" title="1">
        {"Experimental"}
      </AlertBox>
      {"\n"}
      <ul>
        {"\n"}
        <li>
          <code>{"store"}</code>
          {" "}
          <a href="async_context.html#class-asynclocalstorage">
            <code>{"<AsyncLocalStorage>"}</code>
          </a>
          {" The store to unbind from the channel."}
        </li>
        {"\n"}
        <li>
          {"Returns: "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type">
            <code>{"<boolean>"}</code>
          </a>
          {" "}
          <code>{"true"}</code>
          {" if the store was found, "}
          <code>{"false"}</code>
          {" otherwise."}
        </li>
        {"\n"}
      </ul>
      {"\n"}
      <p>
        {
          "Remove a message handler previously registered to this channel with\n"
        }
        <a href="#channelbindstorestore-transform">
          <code>{"channel.bindStore(store)"}</code>
        </a>
        {"."}
      </p>
      {"\n"}
      <CodeTabs languages="mjs|cjs" displayNames="|" defaultTab="0">
        <CodeBox
          className="shiki nord language-mjs"
          style={{
            backgroundColor: "#2e3440ff",
            color: "#d8dee9ff",
          }}
          tabIndex="0"
        >
          <code>
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"import"}
              </span>
              <span
                style={{
                  color: "#8FBCBB",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" from"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" '"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"node:diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"import"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" {"}
              </span>
              <span
                style={{
                  color: "#8FBCBB",
                }}
              >
                {" AsyncLocalStorage"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" }"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" from"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" '"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"node:async_hooks"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"const"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" store"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" ="}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" new"}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {" AsyncLocalStorage"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"()"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"const"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" channel"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" ="}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"channel"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"my-channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"bindStore"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"store"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"unbindStore"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"store"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
          </code>
        </CodeBox>
        <CodeBox
          className="shiki nord language-cjs"
          style={{
            backgroundColor: "#2e3440ff",
            color: "#d8dee9ff",
          }}
          tabIndex="0"
        >
          <code>
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"const"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" ="}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {" require"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"node:diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"const"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" {"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" AsyncLocalStorage"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" }"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" ="}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {" require"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"node:async_hooks"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"const"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" store"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" ="}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" new"}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {" AsyncLocalStorage"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"()"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"const"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" channel"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" ="}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"channel"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"my-channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"bindStore"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"store"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"unbindStore"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"store"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
          </code>
        </CodeBox>
      </CodeTabs>
    </>
    {"\n"}
    <>
      <h4>
        <code>{"channel.runStores(context, fn[, thisArg[, ...args]])"}</code>
      </h4>
      {"\n"}
      <AlertBox level="warning" title="1">
        {"Experimental"}
      </AlertBox>
      {"\n"}
      <ul>
        {"\n"}
        <li>
          <code>{"context"}</code>
          {" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types">
            <code>{"<any>"}</code>
          </a>
          {" Message to send to subscribers and bind to stores"}
        </li>
        {"\n"}
        <li>
          <code>{"fn"}</code>
          {" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function">
            <code>{"<Function>"}</code>
          </a>
          {" Handler to run within the entered storage context"}
        </li>
        {"\n"}
        <li>
          <code>{"thisArg"}</code>
          {" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types">
            <code>{"<any>"}</code>
          </a>
          {" The receiver to be used for the function call."}
        </li>
        {"\n"}
        <li>
          <code>{"...args"}</code>
          {" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types">
            <code>{"<any>"}</code>
          </a>
          {" Optional arguments to pass to the function."}
        </li>
        {"\n"}
      </ul>
      {"\n"}
      <p>
        {
          "Applies the given data to any AsyncLocalStorage instances bound to the channel\nfor the duration of the given function, then publishes to the channel within\nthe scope of that data is applied to the stores."
        }
      </p>
      {"\n"}
      <p>
        {"If a transform function was given to "}
        <a href="#channelbindstorestore-transform">
          <code>{"channel.bindStore(store)"}</code>
        </a>
        {
          " it will be\napplied to transform the message data before it becomes the context value for\nthe store. The prior storage context is accessible from within the transform\nfunction in cases where context linking is required."
        }
      </p>
      {"\n"}
      <p>
        {
          "The context applied to the store should be accessible in any async code which\ncontinues from execution which began during the given function, however\nthere are some situations in which "
        }
        <a href="async_context.html#troubleshooting-context-loss">
          {"context loss"}
        </a>
        {" may occur."}
      </p>
      {"\n"}
      <CodeTabs languages="mjs|cjs" displayNames="|" defaultTab="0">
        <CodeBox
          className="shiki nord language-mjs"
          style={{
            backgroundColor: "#2e3440ff",
            color: "#d8dee9ff",
          }}
          tabIndex="0"
        >
          <code>
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"import"}
              </span>
              <span
                style={{
                  color: "#8FBCBB",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" from"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" '"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"node:diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"import"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" {"}
              </span>
              <span
                style={{
                  color: "#8FBCBB",
                }}
              >
                {" AsyncLocalStorage"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" }"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" from"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" '"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"node:async_hooks"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"const"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" store"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" ="}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" new"}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {" AsyncLocalStorage"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"()"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"const"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" channel"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" ="}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"channel"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"my-channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"bindStore"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"store"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {","}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" ("}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"message"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" =>"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" {"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"  const"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" parent"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" ="}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" store"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"getStore"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"()"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"  return"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" new"}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {" Span"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"message"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {","}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" parent"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"}"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"runStores"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"{"}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {" some"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {":"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" '"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"message"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" },"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" ()"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" =>"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" {"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"  store"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"getStore"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"()"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
              <span
                style={{
                  color: "#707e99",
                }}
              >
                {" // Span({ some: 'message' })"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"}"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
          </code>
        </CodeBox>
        <CodeBox
          className="shiki nord language-cjs"
          style={{
            backgroundColor: "#2e3440ff",
            color: "#d8dee9ff",
          }}
          tabIndex="0"
        >
          <code>
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"const"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" ="}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {" require"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"node:diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"const"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" {"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" AsyncLocalStorage"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" }"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" ="}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {" require"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"node:async_hooks"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"const"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" store"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" ="}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" new"}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {" AsyncLocalStorage"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"()"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"const"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" channel"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" ="}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"channel"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"my-channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"bindStore"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"store"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {","}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" ("}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"message"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" =>"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" {"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"  const"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" parent"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" ="}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" store"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"getStore"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"()"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"  return"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" new"}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {" Span"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"message"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {","}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" parent"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"}"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"runStores"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"{"}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {" some"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {":"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" '"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"message"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" },"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" ()"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" =>"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" {"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"  store"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"getStore"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"()"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
              <span
                style={{
                  color: "#707e99",
                }}
              >
                {" // Span({ some: 'message' })"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"}"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
          </code>
        </CodeBox>
      </CodeTabs>
    </>
    {"\n"}
    <>
      <h3>
        {"Class: "}
        <code>{"TracingChannel"}</code>
      </h3>
      {"\n"}
      <AlertBox level="warning" title="1">
        {"Experimental"}
      </AlertBox>
      {"\n"}
      <p>
        {"The class "}
        <code>{"TracingChannel"}</code>
        {" is a collection of "}
        <a href="#tracingchannel-channels">{"TracingChannel Channels"}</a>
        {
          " which\ntogether express a single traceable action. It is used to formalize and\nsimplify the process of producing events for tracing application flow.\n"
        }
        <a href="#diagnostics_channeltracingchannelnameorchannels">
          <code>{"diagnostics_channel.tracingChannel()"}</code>
        </a>
        {" is used to construct a\n"}
        <code>{"TracingChannel"}</code>
        {". As with "}
        <code>{"Channel"}</code>
        {" it is recommended to create and reuse a\nsingle "}
        <code>{"TracingChannel"}</code>
        {
          " at the top-level of the file rather than creating them\ndynamically."
        }
      </p>
    </>
    {"\n"}
    <>
      <h4>
        <code>{"tracingChannel.subscribe(subscribers)"}</code>
      </h4>
      {"\n"}
      <ul>
        {"\n"}
        <li>
          <code>{"subscribers"}</code>
          {" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object">
            <code>{"<Object>"}</code>
          </a>
          {" Set of "}
          <a href="#tracingchannel-channels">{"TracingChannel Channels"}</a>
          {" subscribers"}
          {"\n"}
          <ul>
            {"\n"}
            <li>
              <code>{"start"}</code>
              {" "}
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function">
                <code>{"<Function>"}</code>
              </a>
              {" The "}
              <a href="#startevent">
                <code>{"start"}</code>
                {" event"}
              </a>
              {" subscriber"}
            </li>
            {"\n"}
            <li>
              <code>{"end"}</code>
              {" "}
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function">
                <code>{"<Function>"}</code>
              </a>
              {" The "}
              <a href="#endevent">
                <code>{"end"}</code>
                {" event"}
              </a>
              {" subscriber"}
            </li>
            {"\n"}
            <li>
              <code>{"asyncStart"}</code>
              {" "}
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function">
                <code>{"<Function>"}</code>
              </a>
              {" The "}
              <a href="#asyncstartevent">
                <code>{"asyncStart"}</code>
                {" event"}
              </a>
              {" subscriber"}
            </li>
            {"\n"}
            <li>
              <code>{"asyncEnd"}</code>
              {" "}
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function">
                <code>{"<Function>"}</code>
              </a>
              {" The "}
              <a href="#asyncendevent">
                <code>{"asyncEnd"}</code>
                {" event"}
              </a>
              {" subscriber"}
            </li>
            {"\n"}
            <li>
              <code>{"error"}</code>
              {" "}
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function">
                <code>{"<Function>"}</code>
              </a>
              {" The "}
              <a href="#errorevent">
                <code>{"error"}</code>
                {" event"}
              </a>
              {" subscriber"}
            </li>
            {"\n"}
          </ul>
          {"\n"}
        </li>
        {"\n"}
      </ul>
      {"\n"}
      <p>
        {
          "Helper to subscribe a collection of functions to the corresponding channels.\nThis is the same as calling "
        }
        <a href="#channelsubscribeonmessage">
          <code>{"channel.subscribe(onMessage)"}</code>
        </a>
        {" on each channel\nindividually."}
      </p>
      {"\n"}
      <CodeTabs languages="mjs|cjs" displayNames="|" defaultTab="0">
        <CodeBox
          className="shiki nord language-mjs"
          style={{
            backgroundColor: "#2e3440ff",
            color: "#d8dee9ff",
          }}
          tabIndex="0"
        >
          <code>
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"import"}
              </span>
              <span
                style={{
                  color: "#8FBCBB",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" from"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" '"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"node:diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"const"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" channels"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" ="}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"tracingChannel"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"my-channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"channels"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"subscribe"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"{"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"  start"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"message"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" {"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#707e99",
                }}
              >
                {"    // Handle start message"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"  },"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"  end"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"message"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" {"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#707e99",
                }}
              >
                {"    // Handle end message"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"  },"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"  asyncStart"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"message"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" {"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#707e99",
                }}
              >
                {"    // Handle asyncStart message"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"  },"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"  asyncEnd"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"message"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" {"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#707e99",
                }}
              >
                {"    // Handle asyncEnd message"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"  },"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"  error"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"message"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" {"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#707e99",
                }}
              >
                {"    // Handle error message"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"  },"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"}"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
          </code>
        </CodeBox>
        <CodeBox
          className="shiki nord language-cjs"
          style={{
            backgroundColor: "#2e3440ff",
            color: "#d8dee9ff",
          }}
          tabIndex="0"
        >
          <code>
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"const"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" ="}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {" require"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"node:diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"const"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" channels"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" ="}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"tracingChannel"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"my-channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"channels"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"subscribe"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"{"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"  start"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"message"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" {"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#707e99",
                }}
              >
                {"    // Handle start message"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"  },"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"  end"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"message"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" {"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#707e99",
                }}
              >
                {"    // Handle end message"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"  },"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"  asyncStart"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"message"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" {"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#707e99",
                }}
              >
                {"    // Handle asyncStart message"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"  },"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"  asyncEnd"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"message"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" {"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#707e99",
                }}
              >
                {"    // Handle asyncEnd message"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"  },"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"  error"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"message"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" {"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#707e99",
                }}
              >
                {"    // Handle error message"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"  },"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"}"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
          </code>
        </CodeBox>
      </CodeTabs>
    </>
    {"\n"}
    <>
      <h4>
        <code>{"tracingChannel.unsubscribe(subscribers)"}</code>
      </h4>
      {"\n"}
      <ul>
        {"\n"}
        <li>
          <code>{"subscribers"}</code>
          {" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object">
            <code>{"<Object>"}</code>
          </a>
          {" Set of "}
          <a href="#tracingchannel-channels">{"TracingChannel Channels"}</a>
          {" subscribers"}
          {"\n"}
          <ul>
            {"\n"}
            <li>
              <code>{"start"}</code>
              {" "}
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function">
                <code>{"<Function>"}</code>
              </a>
              {" The "}
              <a href="#startevent">
                <code>{"start"}</code>
                {" event"}
              </a>
              {" subscriber"}
            </li>
            {"\n"}
            <li>
              <code>{"end"}</code>
              {" "}
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function">
                <code>{"<Function>"}</code>
              </a>
              {" The "}
              <a href="#endevent">
                <code>{"end"}</code>
                {" event"}
              </a>
              {" subscriber"}
            </li>
            {"\n"}
            <li>
              <code>{"asyncStart"}</code>
              {" "}
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function">
                <code>{"<Function>"}</code>
              </a>
              {" The "}
              <a href="#asyncstartevent">
                <code>{"asyncStart"}</code>
                {" event"}
              </a>
              {" subscriber"}
            </li>
            {"\n"}
            <li>
              <code>{"asyncEnd"}</code>
              {" "}
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function">
                <code>{"<Function>"}</code>
              </a>
              {" The "}
              <a href="#asyncendevent">
                <code>{"asyncEnd"}</code>
                {" event"}
              </a>
              {" subscriber"}
            </li>
            {"\n"}
            <li>
              <code>{"error"}</code>
              {" "}
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function">
                <code>{"<Function>"}</code>
              </a>
              {" The "}
              <a href="#errorevent">
                <code>{"error"}</code>
                {" event"}
              </a>
              {" subscriber"}
            </li>
            {"\n"}
          </ul>
          {"\n"}
        </li>
        {"\n"}
        <li>
          {"Returns: "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type">
            <code>{"<boolean>"}</code>
          </a>
          {" "}
          <code>{"true"}</code>
          {" if all handlers were successfully unsubscribed,\nand "}
          <code>{"false"}</code>
          {" otherwise."}
        </li>
        {"\n"}
      </ul>
      {"\n"}
      <p>
        {
          "Helper to unsubscribe a collection of functions from the corresponding channels.\nThis is the same as calling "
        }
        <a href="#channelunsubscribeonmessage">
          <code>{"channel.unsubscribe(onMessage)"}</code>
        </a>
        {" on each channel\nindividually."}
      </p>
      {"\n"}
      <CodeTabs languages="mjs|cjs" displayNames="|" defaultTab="0">
        <CodeBox
          className="shiki nord language-mjs"
          style={{
            backgroundColor: "#2e3440ff",
            color: "#d8dee9ff",
          }}
          tabIndex="0"
        >
          <code>
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"import"}
              </span>
              <span
                style={{
                  color: "#8FBCBB",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" from"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" '"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"node:diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"const"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" channels"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" ="}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"tracingChannel"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"my-channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"channels"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"unsubscribe"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"{"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"  start"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"message"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" {"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#707e99",
                }}
              >
                {"    // Handle start message"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"  },"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"  end"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"message"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" {"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#707e99",
                }}
              >
                {"    // Handle end message"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"  },"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"  asyncStart"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"message"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" {"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#707e99",
                }}
              >
                {"    // Handle asyncStart message"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"  },"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"  asyncEnd"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"message"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" {"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#707e99",
                }}
              >
                {"    // Handle asyncEnd message"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"  },"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"  error"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"message"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" {"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#707e99",
                }}
              >
                {"    // Handle error message"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"  },"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"}"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
          </code>
        </CodeBox>
        <CodeBox
          className="shiki nord language-cjs"
          style={{
            backgroundColor: "#2e3440ff",
            color: "#d8dee9ff",
          }}
          tabIndex="0"
        >
          <code>
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"const"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" ="}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {" require"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"node:diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"const"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" channels"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" ="}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"tracingChannel"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"my-channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"channels"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"unsubscribe"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"{"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"  start"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"message"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" {"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#707e99",
                }}
              >
                {"    // Handle start message"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"  },"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"  end"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"message"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" {"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#707e99",
                }}
              >
                {"    // Handle end message"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"  },"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"  asyncStart"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"message"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" {"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#707e99",
                }}
              >
                {"    // Handle asyncStart message"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"  },"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"  asyncEnd"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"message"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" {"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#707e99",
                }}
              >
                {"    // Handle asyncEnd message"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"  },"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"  error"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"message"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" {"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#707e99",
                }}
              >
                {"    // Handle error message"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"  },"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"}"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
          </code>
        </CodeBox>
      </CodeTabs>
    </>
    {"\n"}
    <>
      <h4>
        <code>
          {"tracingChannel.traceSync(fn[, context[, thisArg[, ...args]]])"}
        </code>
      </h4>
      {"\n"}
      <ul>
        {"\n"}
        <li>
          <code>{"fn"}</code>
          {" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function">
            <code>{"<Function>"}</code>
          </a>
          {" Function to wrap a trace around"}
        </li>
        {"\n"}
        <li>
          <code>{"context"}</code>
          {" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object">
            <code>{"<Object>"}</code>
          </a>
          {" Shared object to correlate events through"}
        </li>
        {"\n"}
        <li>
          <code>{"thisArg"}</code>
          {" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types">
            <code>{"<any>"}</code>
          </a>
          {" The receiver to be used for the function call"}
        </li>
        {"\n"}
        <li>
          <code>{"...args"}</code>
          {" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types">
            <code>{"<any>"}</code>
          </a>
          {" Optional arguments to pass to the function"}
        </li>
        {"\n"}
        <li>
          {"Returns: "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types">
            <code>{"<any>"}</code>
          </a>
          {" The return value of the given function"}
        </li>
        {"\n"}
      </ul>
      {"\n"}
      <p>
        {"Trace a synchronous function call. This will always produce a "}
        <a href="#startevent">
          <code>{"start"}</code>
          {" event"}
        </a>
        {"\nand "}
        <a href="#endevent">
          <code>{"end"}</code>
          {" event"}
        </a>
        {" around the execution and may produce an "}
        <a href="#errorevent">
          <code>{"error"}</code>
          {" event"}
        </a>
        {
          "\nif the given function throws an error. This will run the given function using\n"
        }
        <a href="#channelrunstorescontext-fn-thisarg-args">
          <code>{"channel.runStores(context, ...)"}</code>
        </a>
        {" on the "}
        <code>{"start"}</code>
        {
          " channel which ensures all\nevents should have any bound stores set to match this trace context."
        }
      </p>
      {"\n"}
      <p>
        {
          "To ensure only correct trace graphs are formed, events will only be published\nif subscribers are present prior to starting the trace. Subscriptions which are\nadded after the trace begins will not receive future events from that trace,\nonly future traces will be seen."
        }
      </p>
      {"\n"}
      <CodeTabs languages="mjs|cjs" displayNames="|" defaultTab="0">
        <CodeBox
          className="shiki nord language-mjs"
          style={{
            backgroundColor: "#2e3440ff",
            color: "#d8dee9ff",
          }}
          tabIndex="0"
        >
          <code>
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"import"}
              </span>
              <span
                style={{
                  color: "#8FBCBB",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" from"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" '"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"node:diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"const"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" channels"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" ="}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"tracingChannel"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"my-channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"channels"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"traceSync"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"()"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" =>"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" {"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#707e99",
                }}
              >
                {"  // Do something"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"},"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" {"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"  some"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {":"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" '"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"thing"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {","}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"}"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
          </code>
        </CodeBox>
        <CodeBox
          className="shiki nord language-cjs"
          style={{
            backgroundColor: "#2e3440ff",
            color: "#d8dee9ff",
          }}
          tabIndex="0"
        >
          <code>
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"const"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" ="}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {" require"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"node:diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"const"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" channels"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" ="}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"tracingChannel"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"my-channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"channels"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"traceSync"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"()"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" =>"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" {"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#707e99",
                }}
              >
                {"  // Do something"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"},"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" {"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"  some"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {":"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" '"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"thing"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {","}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"}"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
          </code>
        </CodeBox>
      </CodeTabs>
    </>
    {"\n"}
    <>
      <h4>
        <code>
          {"tracingChannel.tracePromise(fn[, context[, thisArg[, ...args]]])"}
        </code>
      </h4>
      {"\n"}
      <ul>
        {"\n"}
        <li>
          <code>{"fn"}</code>
          {" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function">
            <code>{"<Function>"}</code>
          </a>
          {" Promise-returning function to wrap a trace around"}
        </li>
        {"\n"}
        <li>
          <code>{"context"}</code>
          {" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object">
            <code>{"<Object>"}</code>
          </a>
          {" Shared object to correlate trace events through"}
        </li>
        {"\n"}
        <li>
          <code>{"thisArg"}</code>
          {" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types">
            <code>{"<any>"}</code>
          </a>
          {" The receiver to be used for the function call"}
        </li>
        {"\n"}
        <li>
          <code>{"...args"}</code>
          {" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types">
            <code>{"<any>"}</code>
          </a>
          {" Optional arguments to pass to the function"}
        </li>
        {"\n"}
        <li>
          {"Returns: "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">
            <code>{"<Promise>"}</code>
          </a>
          {" Chained from promise returned by the given function"}
        </li>
        {"\n"}
      </ul>
      {"\n"}
      <p>
        {
          "Trace a promise-returning function call. This will always produce a\n"
        }
        <a href="#startevent">
          <code>{"start"}</code>
          {" event"}
        </a>
        {" and "}
        <a href="#endevent">
          <code>{"end"}</code>
          {" event"}
        </a>
        {
          " around the synchronous portion of the\nfunction execution, and will produce an "
        }
        <a href="#asyncstartevent">
          <code>{"asyncStart"}</code>
          {" event"}
        </a>
        {" and\n"}
        <a href="#asyncendevent">
          <code>{"asyncEnd"}</code>
          {" event"}
        </a>
        {" when a promise continuation is reached. It may also\nproduce an "}
        <a href="#errorevent">
          <code>{"error"}</code>
          {" event"}
        </a>
        {
          " if the given function throws an error or the\nreturned promise rejects. This will run the given function using\n"
        }
        <a href="#channelrunstorescontext-fn-thisarg-args">
          <code>{"channel.runStores(context, ...)"}</code>
        </a>
        {" on the "}
        <code>{"start"}</code>
        {
          " channel which ensures all\nevents should have any bound stores set to match this trace context."
        }
      </p>
      {"\n"}
      <p>
        {
          "To ensure only correct trace graphs are formed, events will only be published\nif subscribers are present prior to starting the trace. Subscriptions which are\nadded after the trace begins will not receive future events from that trace,\nonly future traces will be seen."
        }
      </p>
      {"\n"}
      <CodeTabs languages="mjs|cjs" displayNames="|" defaultTab="0">
        <CodeBox
          className="shiki nord language-mjs"
          style={{
            backgroundColor: "#2e3440ff",
            color: "#d8dee9ff",
          }}
          tabIndex="0"
        >
          <code>
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"import"}
              </span>
              <span
                style={{
                  color: "#8FBCBB",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" from"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" '"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"node:diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"const"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" channels"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" ="}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"tracingChannel"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"my-channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"channels"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"tracePromise"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"async"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" ()"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" =>"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" {"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#707e99",
                }}
              >
                {"  // Do something"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"},"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" {"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"  some"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {":"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" '"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"thing"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {","}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"}"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
          </code>
        </CodeBox>
        <CodeBox
          className="shiki nord language-cjs"
          style={{
            backgroundColor: "#2e3440ff",
            color: "#d8dee9ff",
          }}
          tabIndex="0"
        >
          <code>
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"const"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" ="}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {" require"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"node:diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"const"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" channels"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" ="}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"tracingChannel"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"my-channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"channels"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"tracePromise"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"async"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" ()"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" =>"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" {"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#707e99",
                }}
              >
                {"  // Do something"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"},"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" {"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"  some"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {":"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" '"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"thing"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {","}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"}"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
          </code>
        </CodeBox>
      </CodeTabs>
    </>
    {"\n"}
    <>
      <h4>
        <code>
          {
            "tracingChannel.traceCallback(fn[, position[, context[, thisArg[, ...args]]]])"
          }
        </code>
      </h4>
      {"\n"}
      <ul>
        {"\n"}
        <li>
          <code>{"fn"}</code>
          {" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function">
            <code>{"<Function>"}</code>
          </a>
          {" callback using function to wrap a trace around"}
        </li>
        {"\n"}
        <li>
          <code>{"position"}</code>
          {" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type">
            <code>{"<number>"}</code>
          </a>
          {
            " Zero-indexed argument position of expected callback\n(defaults to last argument if "
          }
          <code>{"undefined"}</code>
          {" is passed)"}
        </li>
        {"\n"}
        <li>
          <code>{"context"}</code>
          {" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object">
            <code>{"<Object>"}</code>
          </a>
          {" Shared object to correlate trace events through (defaults\nto "}
          <code>{"{}"}</code>
          {" if "}
          <code>{"undefined"}</code>
          {" is passed)"}
        </li>
        {"\n"}
        <li>
          <code>{"thisArg"}</code>
          {" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types">
            <code>{"<any>"}</code>
          </a>
          {" The receiver to be used for the function call"}
        </li>
        {"\n"}
        <li>
          <code>{"...args"}</code>
          {" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types">
            <code>{"<any>"}</code>
          </a>
          {" arguments to pass to the function (must include the callback)"}
        </li>
        {"\n"}
        <li>
          {"Returns: "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types">
            <code>{"<any>"}</code>
          </a>
          {" The return value of the given function"}
        </li>
        {"\n"}
      </ul>
      {"\n"}
      <p>
        {
          "Trace a callback-receiving function call. The callback is expected to follow\nthe error as first arg convention typically used. This will always produce a\n"
        }
        <a href="#startevent">
          <code>{"start"}</code>
          {" event"}
        </a>
        {" and "}
        <a href="#endevent">
          <code>{"end"}</code>
          {" event"}
        </a>
        {
          " around the synchronous portion of the\nfunction execution, and will produce a "
        }
        <a href="#asyncstartevent">
          <code>{"asyncStart"}</code>
          {" event"}
        </a>
        {" and\n"}
        <a href="#asyncendevent">
          <code>{"asyncEnd"}</code>
          {" event"}
        </a>
        {" around the callback execution. It may also produce an\n"}
        <a href="#errorevent">
          <code>{"error"}</code>
          {" event"}
        </a>
        {
          " if the given function throws or the first argument passed to\nthe callback is set. This will run the given function using\n"
        }
        <a href="#channelrunstorescontext-fn-thisarg-args">
          <code>{"channel.runStores(context, ...)"}</code>
        </a>
        {" on the "}
        <code>{"start"}</code>
        {
          " channel which ensures all\nevents should have any bound stores set to match this trace context."
        }
      </p>
      {"\n"}
      <p>
        {
          "To ensure only correct trace graphs are formed, events will only be published\nif subscribers are present prior to starting the trace. Subscriptions which are\nadded after the trace begins will not receive future events from that trace,\nonly future traces will be seen."
        }
      </p>
      {"\n"}
      <CodeTabs languages="mjs|cjs" displayNames="|" defaultTab="0">
        <CodeBox
          className="shiki nord language-mjs"
          style={{
            backgroundColor: "#2e3440ff",
            color: "#d8dee9ff",
          }}
          tabIndex="0"
        >
          <code>
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"import"}
              </span>
              <span
                style={{
                  color: "#8FBCBB",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" from"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" '"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"node:diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"const"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" channels"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" ="}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"tracingChannel"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"my-channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"channels"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"traceCallback"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"arg1"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {","}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" callback"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" =>"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" {"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#707e99",
                }}
              >
                {"  // Do something"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"  callback"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"null"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {","}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" '"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"result"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"},"}
              </span>
              <span
                style={{
                  color: "#B48EAD",
                }}
              >
                {" 1"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {","}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" {"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"  some"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {":"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" '"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"thing"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {","}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"},"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" thisArg"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {","}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" arg1"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {","}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" callback"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
          </code>
        </CodeBox>
        <CodeBox
          className="shiki nord language-cjs"
          style={{
            backgroundColor: "#2e3440ff",
            color: "#d8dee9ff",
          }}
          tabIndex="0"
        >
          <code>
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"const"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" ="}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {" require"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"node:diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"const"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" channels"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" ="}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"tracingChannel"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"my-channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"channels"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"traceCallback"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"arg1"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {","}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" callback"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" =>"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" {"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#707e99",
                }}
              >
                {"  // Do something"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"  callback"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"null"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {","}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" '"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"result"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"},"}
              </span>
              <span
                style={{
                  color: "#B48EAD",
                }}
              >
                {" 1"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {","}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" {"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"  some"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {":"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" '"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"thing"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {","}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"},"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" thisArg"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {","}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" arg1"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {","}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" callback"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
          </code>
        </CodeBox>
      </CodeTabs>
      <p>
        {"The callback will also be run with "}
        <a href="#channelrunstorescontext-fn-thisarg-args">
          <code>{"channel.runStores(context, ...)"}</code>
        </a>
        {" which\nenables context loss recovery in some cases."}
      </p>
      {"\n"}
      <CodeTabs languages="mjs|cjs" displayNames="|" defaultTab="0">
        <CodeBox
          className="shiki nord language-mjs"
          style={{
            backgroundColor: "#2e3440ff",
            color: "#d8dee9ff",
          }}
          tabIndex="0"
        >
          <code>
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"import"}
              </span>
              <span
                style={{
                  color: "#8FBCBB",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" from"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" '"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"node:diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"import"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" {"}
              </span>
              <span
                style={{
                  color: "#8FBCBB",
                }}
              >
                {" AsyncLocalStorage"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" }"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" from"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" '"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"node:async_hooks"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"const"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" channels"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" ="}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"tracingChannel"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"my-channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"const"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" myStore"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" ="}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" new"}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {" AsyncLocalStorage"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"()"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#707e99",
                }}
              >
                {
                  "// The start channel sets the initial store data to something"
                }
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#707e99",
                }}
              >
                {
                  "// and stores that store data value on the trace context object"
                }
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"channels"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"start"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"bindStore"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"myStore"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {","}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" ("}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"data"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" =>"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" {"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"  const"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" span"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" ="}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" new"}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {" Span"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"data"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"  data"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"span"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" ="}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" span"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"  return"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" span"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"}"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#707e99",
                }}
              >
                {
                  "// Then asyncStart can restore from that data it stored previously"
                }
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"channels"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"asyncStart"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"bindStore"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"myStore"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {","}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" ("}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"data"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" =>"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" {"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"  return"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" data"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"span"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"}"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
          </code>
        </CodeBox>
        <CodeBox
          className="shiki nord language-cjs"
          style={{
            backgroundColor: "#2e3440ff",
            color: "#d8dee9ff",
          }}
          tabIndex="0"
        >
          <code>
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"const"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" ="}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {" require"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"node:diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"const"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" {"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" AsyncLocalStorage"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" }"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" ="}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {" require"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"node:async_hooks"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"const"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" channels"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" ="}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"tracingChannel"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"my-channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"const"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" myStore"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" ="}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" new"}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {" AsyncLocalStorage"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"()"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#707e99",
                }}
              >
                {
                  "// The start channel sets the initial store data to something"
                }
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#707e99",
                }}
              >
                {
                  "// and stores that store data value on the trace context object"
                }
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"channels"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"start"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"bindStore"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"myStore"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {","}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" ("}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"data"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" =>"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" {"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"  const"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" span"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" ="}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" new"}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {" Span"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"data"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"  data"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"span"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" ="}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" span"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"  return"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" span"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"}"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#707e99",
                }}
              >
                {
                  "// Then asyncStart can restore from that data it stored previously"
                }
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"channels"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"asyncStart"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"bindStore"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"myStore"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {","}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" ("}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"data"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" =>"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" {"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"  return"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" data"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"span"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"}"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
          </code>
        </CodeBox>
      </CodeTabs>
    </>
    {"\n"}
    <>
      <h4>
        <code>{"tracingChannel.hasSubscribers"}</code>
      </h4>
      {"\n"}
      <ul>
        {"\n"}
        <li>
          {"Returns: "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type">
            <code>{"<boolean>"}</code>
          </a>
          {" "}
          <code>{"true"}</code>
          {" if any of the individual channels has a subscriber,\n"}
          <code>{"false"}</code>
          {" if not."}
        </li>
        {"\n"}
      </ul>
      {"\n"}
      <p>
        {"This is a helper method available on a "}
        <a href="#class-tracingchannel">
          <code>{"TracingChannel"}</code>
        </a>
        {" instance to check if\nany of the "}
        <a href="#tracingchannel-channels">{"TracingChannel Channels"}</a>
        {" have subscribers. A "}
        <code>{"true"}</code>
        {" is returned if\nany of them have at least one subscriber, a "}
        <code>{"false"}</code>
        {" is returned otherwise."}
      </p>
      {"\n"}
      <CodeTabs languages="mjs|cjs" displayNames="|" defaultTab="0">
        <CodeBox
          className="shiki nord language-mjs"
          style={{
            backgroundColor: "#2e3440ff",
            color: "#d8dee9ff",
          }}
          tabIndex="0"
        >
          <code>
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"import"}
              </span>
              <span
                style={{
                  color: "#8FBCBB",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" from"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {" '"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"node:diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"const"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" channels"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" ="}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"tracingChannel"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"my-channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"if"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {" ("}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"channels"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"hasSubscribers"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {") "}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"{"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#707e99",
                }}
              >
                {"  // Do something"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"}"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
          </code>
        </CodeBox>
        <CodeBox
          className="shiki nord language-cjs"
          style={{
            backgroundColor: "#2e3440ff",
            color: "#d8dee9ff",
          }}
          tabIndex="0"
        >
          <code>
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"const"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" ="}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {" require"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"node:diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"const"}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" channels"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {" ="}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {" diagnostics_channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#88C0D0",
                }}
              >
                {"tracingChannel"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {"("}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#A3BE8C",
                }}
              >
                {"my-channel"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"'"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {")"}
              </span>
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {";"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#81A1C1",
                }}
              >
                {"if"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {" ("}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"channels"}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"."}
              </span>
              <span
                style={{
                  color: "#D8DEE9",
                }}
              >
                {"hasSubscribers"}
              </span>
              <span
                style={{
                  color: "#D8DEE9FF",
                }}
              >
                {") "}
              </span>
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"{"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#707e99",
                }}
              >
                {"  // Do something"}
              </span>
            </span>
            {"\n"}
            <span className="line">
              <span
                style={{
                  color: "#ECEFF4",
                }}
              >
                {"}"}
              </span>
            </span>
            {"\n"}
            <span className="line" />
          </code>
        </CodeBox>
      </CodeTabs>
    </>
    {"\n"}
    <>
      <h3>{"TracingChannel Channels"}</h3>
      {"\n"}
      <p>
        {
          "A TracingChannel is a collection of several diagnostics_channels representing\nspecific points in the execution lifecycle of a single traceable action. The\nbehavior is split into five diagnostics_channels consisting of "
        }
        <code>{"start"}</code>
        {",\n"}
        <code>{"end"}</code>
        {", "}
        <code>{"asyncStart"}</code>
        {", "}
        <code>{"asyncEnd"}</code>
        {", and "}
        <code>{"error"}</code>
        {
          ". A single traceable action will\nshare the same event object between all events, this can be helpful for\nmanaging correlation through a weakmap."
        }
      </p>
      {"\n"}
      <p>
        {"These event objects will be extended with "}
        <code>{"result"}</code>
        {" or "}
        <code>{"error"}</code>
        {
          ' values when\nthe task "completes". In the case of a synchronous task the '
        }
        <code>{"result"}</code>
        {" will be\nthe return value and the "}
        <code>{"error"}</code>
        {
          " will be anything thrown from the function.\nWith callback-based async functions the "
        }
        <code>{"result"}</code>
        {" will be the second argument\nof the callback while the "}
        <code>{"error"}</code>
        {" will either be a thrown error visible in the\n"}
        <code>{"end"}</code>
        {" event or the first callback argument in either of the "}
        <code>{"asyncStart"}</code>
        {" or\n"}
        <code>{"asyncEnd"}</code>
        {" events."}
      </p>
      {"\n"}
      <p>
        {
          "To ensure only correct trace graphs are formed, events should only be published\nif subscribers are present prior to starting the trace. Subscriptions which are\nadded after the trace begins should not receive future events from that trace,\nonly future traces will be seen."
        }
      </p>
      {"\n"}
      <p>{"Tracing channels should follow a naming pattern of:"}</p>
      {"\n"}
      <ul>
        {"\n"}
        <li>
          <code>{"tracing:module.class.method:start"}</code>
          {" or "}
          <code>{"tracing:module.function:start"}</code>
        </li>
        {"\n"}
        <li>
          <code>{"tracing:module.class.method:end"}</code>
          {" or "}
          <code>{"tracing:module.function:end"}</code>
        </li>
        {"\n"}
        <li>
          <code>{"tracing:module.class.method:asyncStart"}</code>
          {" or "}
          <code>{"tracing:module.function:asyncStart"}</code>
        </li>
        {"\n"}
        <li>
          <code>{"tracing:module.class.method:asyncEnd"}</code>
          {" or "}
          <code>{"tracing:module.function:asyncEnd"}</code>
        </li>
        {"\n"}
        <li>
          <code>{"tracing:module.class.method:error"}</code>
          {" or "}
          <code>{"tracing:module.function:error"}</code>
        </li>
        {"\n"}
      </ul>
    </>
    {"\n"}
    <>
      <h4>
        <code>{"start(event)"}</code>
      </h4>
      {"\n"}
      <ul>
        {"\n"}
        <li>
          {"Name: "}
          <code>{"tracing:${name}:start"}</code>
        </li>
        {"\n"}
      </ul>
      {"\n"}
      <p>
        {"The "}
        <code>{"start"}</code>
        {
          " event represents the point at which a function is called. At this\npoint the event data may contain function arguments or anything else available\nat the very start of the execution of the function."
        }
      </p>
    </>
    {"\n"}
    <>
      <h4>
        <code>{"end(event)"}</code>
      </h4>
      {"\n"}
      <ul>
        {"\n"}
        <li>
          {"Name: "}
          <code>{"tracing:${name}:end"}</code>
        </li>
        {"\n"}
      </ul>
      {"\n"}
      <p>
        {"The "}
        <code>{"end"}</code>
        {
          " event represents the point at which a function call returns a value.\nIn the case of an async function this is when the promise returned not when the\nfunction itself makes a return statement internally. At this point, if the\ntraced function was synchronous the "
        }
        <code>{"result"}</code>
        {
          " field will be set to the return\nvalue of the function. Alternatively, the "
        }
        <code>{"error"}</code>
        {" field may be present to\nrepresent any thrown errors."}
      </p>
      {"\n"}
      <p>
        {"It is recommended to listen specifically to the "}
        <code>{"error"}</code>
        {
          " event to track errors\nas it may be possible for a traceable action to produce multiple errors. For\nexample, an async task which fails may be started internally before the sync\npart of the task then throws an error."
        }
      </p>
    </>
    {"\n"}
    <>
      <h4>
        <code>{"asyncStart(event)"}</code>
      </h4>
      {"\n"}
      <ul>
        {"\n"}
        <li>
          {"Name: "}
          <code>{"tracing:${name}:asyncStart"}</code>
        </li>
        {"\n"}
      </ul>
      {"\n"}
      <p>
        {"The "}
        <code>{"asyncStart"}</code>
        {
          ' event represents the callback or continuation of a traceable\nfunction being reached. At this point things like callback arguments may be\navailable, or anything else expressing the "result" of the action.'
        }
      </p>
      {"\n"}
      <p>
        {
          "For callbacks-based functions, the first argument of the callback will be\nassigned to the "
        }
        <code>{"error"}</code>
        {" field, if not "}
        <code>{"undefined"}</code>
        {" or "}
        <code>{"null"}</code>
        {", and the second\nargument will be assigned to the "}
        <code>{"result"}</code>
        {" field."}
      </p>
      {"\n"}
      <p>
        {"For promises, the argument to the "}
        <code>{"resolve"}</code>
        {" path will be assigned to "}
        <code>{"result"}</code>
        {"\nor the argument to the "}
        <code>{"reject"}</code>
        {" path will be assign to "}
        <code>{"error"}</code>
        {"."}
      </p>
      {"\n"}
      <p>
        {"It is recommended to listen specifically to the "}
        <code>{"error"}</code>
        {
          " event to track errors\nas it may be possible for a traceable action to produce multiple errors. For\nexample, an async task which fails may be started internally before the sync\npart of the task then throws an error."
        }
      </p>
    </>
    {"\n"}
    <>
      <h4>
        <code>{"asyncEnd(event)"}</code>
      </h4>
      {"\n"}
      <ul>
        {"\n"}
        <li>
          {"Name: "}
          <code>{"tracing:${name}:asyncEnd"}</code>
        </li>
        {"\n"}
      </ul>
      {"\n"}
      <p>
        {"The "}
        <code>{"asyncEnd"}</code>
        {
          " event represents the callback of an asynchronous function\nreturning. It's not likely event data will change after the "
        }
        <code>{"asyncStart"}</code>
        {
          " event,\nhowever it may be useful to see the point where the callback completes."
        }
      </p>
    </>
    {"\n"}
    <>
      <h4>
        <code>{"error(event)"}</code>
      </h4>
      {"\n"}
      <ul>
        {"\n"}
        <li>
          {"Name: "}
          <code>{"tracing:${name}:error"}</code>
        </li>
        {"\n"}
      </ul>
      {"\n"}
      <p>
        {"The "}
        <code>{"error"}</code>
        {
          " event represents any error produced by the traceable function\neither synchronously or asynchronously. If an error is thrown in the\nsynchronous portion of the traced function the error will be assigned to the\n"
        }
        <code>{"error"}</code>
        {" field of the event and the "}
        <code>{"error"}</code>
        {
          " event will be triggered. If an error\nis received asynchronously through a callback or promise rejection it will also\nbe assigned to the "
        }
        <code>{"error"}</code>
        {" field of the event and trigger the "}
        <code>{"error"}</code>
        {" event."}
      </p>
      {"\n"}
      <p>
        {
          "It is possible for a single traceable function call to produce errors multiple\ntimes so this should be considered when consuming this event. For example, if\nanother async task is triggered internally which fails and then the sync part\nof the function then throws and error two "
        }
        <code>{"error"}</code>
        {
          " events will be emitted, one\nfor the sync error and one for the async error."
        }
      </p>
    </>
    {"\n"}
    <>
      <h3>{"Built-in Channels"}</h3>
      {"\n"}
      <AlertBox level="warning" title="1">
        {"Experimental"}
      </AlertBox>
      {"\n"}
      <p>
        {
          "While the diagnostics_channel API is now considered stable, the built-in\nchannels currently available are not. Each channel must be declared stable\nindependently."
        }
      </p>
    </>
    {"\n"}
    <>
      <h4>{"Console"}</h4>
      {"\n"}
      <p>
        <code>{"console.log"}</code>
      </p>
      {"\n"}
      <ul>
        {"\n"}
        <li>
          <code>{"args"}</code>
          {" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types">
            <code>{"<any[]>"}</code>
          </a>
        </li>
        {"\n"}
      </ul>
      {"\n"}
      <p>
        {"Emitted when "}
        <code>{"console.log()"}</code>
        {" is called. Receives and array of the arguments\npassed to "}
        <code>{"console.log()"}</code>
        {"."}
      </p>
      {"\n"}
      <p>
        <code>{"console.info"}</code>
      </p>
      {"\n"}
      <ul>
        {"\n"}
        <li>
          <code>{"args"}</code>
          {" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types">
            <code>{"<any[]>"}</code>
          </a>
        </li>
        {"\n"}
      </ul>
      {"\n"}
      <p>
        {"Emitted when "}
        <code>{"console.info()"}</code>
        {" is called. Receives and array of the arguments\npassed to "}
        <code>{"console.info()"}</code>
        {"."}
      </p>
      {"\n"}
      <p>
        <code>{"console.debug"}</code>
      </p>
      {"\n"}
      <ul>
        {"\n"}
        <li>
          <code>{"args"}</code>
          {" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types">
            <code>{"<any[]>"}</code>
          </a>
        </li>
        {"\n"}
      </ul>
      {"\n"}
      <p>
        {"Emitted when "}
        <code>{"console.debug()"}</code>
        {" is called. Receives and array of the arguments\npassed to "}
        <code>{"console.debug()"}</code>
        {"."}
      </p>
      {"\n"}
      <p>
        <code>{"console.warn"}</code>
      </p>
      {"\n"}
      <ul>
        {"\n"}
        <li>
          <code>{"args"}</code>
          {" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types">
            <code>{"<any[]>"}</code>
          </a>
        </li>
        {"\n"}
      </ul>
      {"\n"}
      <p>
        {"Emitted when "}
        <code>{"console.warn()"}</code>
        {" is called. Receives and array of the arguments\npassed to "}
        <code>{"console.warn()"}</code>
        {"."}
      </p>
      {"\n"}
      <p>
        <code>{"console.error"}</code>
      </p>
      {"\n"}
      <ul>
        {"\n"}
        <li>
          <code>{"args"}</code>
          {" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types">
            <code>{"<any[]>"}</code>
          </a>
        </li>
        {"\n"}
      </ul>
      {"\n"}
      <p>
        {"Emitted when "}
        <code>{"console.error()"}</code>
        {" is called. Receives and array of the arguments\npassed to "}
        <code>{"console.error()"}</code>
        {"."}
      </p>
    </>
    {"\n"}
    <>
      <h4>{"HTTP"}</h4>
      {"\n"}
      <p>
        <code>{"http.client.request.created"}</code>
      </p>
      {"\n"}
      <ul>
        {"\n"}
        <li>
          <code>{"request"}</code>
          {" "}
          <a href="http.html#class-httpclientrequest">
            <code>{"<http.ClientRequest>"}</code>
          </a>
        </li>
        {"\n"}
      </ul>
      {"\n"}
      <p>
        {"Emitted when client creates a request object.\nUnlike "}
        <code>{"http.client.request.start"}</code>
        {", this event is emitted before the request has been sent."}
      </p>
      {"\n"}
      <p>
        <code>{"http.client.request.start"}</code>
      </p>
      {"\n"}
      <ul>
        {"\n"}
        <li>
          <code>{"request"}</code>
          {" "}
          <a href="http.html#class-httpclientrequest">
            <code>{"<http.ClientRequest>"}</code>
          </a>
        </li>
        {"\n"}
      </ul>
      {"\n"}
      <p>{"Emitted when client starts a request."}</p>
      {"\n"}
      <p>
        <code>{"http.client.request.error"}</code>
      </p>
      {"\n"}
      <ul>
        {"\n"}
        <li>
          <code>{"request"}</code>
          {" "}
          <a href="http.html#class-httpclientrequest">
            <code>{"<http.ClientRequest>"}</code>
          </a>
        </li>
        {"\n"}
        <li>
          <code>{"error"}</code>
          {" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error">
            <code>{"<Error>"}</code>
          </a>
        </li>
        {"\n"}
      </ul>
      {"\n"}
      <p>{"Emitted when an error occurs during a client request."}</p>
      {"\n"}
      <p>
        <code>{"http.client.response.finish"}</code>
      </p>
      {"\n"}
      <ul>
        {"\n"}
        <li>
          <code>{"request"}</code>
          {" "}
          <a href="http.html#class-httpclientrequest">
            <code>{"<http.ClientRequest>"}</code>
          </a>
        </li>
        {"\n"}
        <li>
          <code>{"response"}</code>
          {" "}
          <a href="http.html#class-httpincomingmessage">
            <code>{"<http.IncomingMessage>"}</code>
          </a>
        </li>
        {"\n"}
      </ul>
      {"\n"}
      <p>{"Emitted when client receives a response."}</p>
      {"\n"}
      <p>
        <code>{"http.server.request.start"}</code>
      </p>
      {"\n"}
      <ul>
        {"\n"}
        <li>
          <code>{"request"}</code>
          {" "}
          <a href="http.html#class-httpincomingmessage">
            <code>{"<http.IncomingMessage>"}</code>
          </a>
        </li>
        {"\n"}
        <li>
          <code>{"response"}</code>
          {" "}
          <a href="http.html#class-httpserverresponse">
            <code>{"<http.ServerResponse>"}</code>
          </a>
        </li>
        {"\n"}
        <li>
          <code>{"socket"}</code>
          {" "}
          <a href="net.html#class-netsocket">
            <code>{"<net.Socket>"}</code>
          </a>
        </li>
        {"\n"}
        <li>
          <code>{"server"}</code>
          {" "}
          <a href="http.html#class-httpserver">
            <code>{"<http.Server>"}</code>
          </a>
        </li>
        {"\n"}
      </ul>
      {"\n"}
      <p>{"Emitted when server receives a request."}</p>
      {"\n"}
      <p>
        <code>{"http.server.response.created"}</code>
      </p>
      {"\n"}
      <ul>
        {"\n"}
        <li>
          <code>{"request"}</code>
          {" "}
          <a href="http.html#class-httpincomingmessage">
            <code>{"<http.IncomingMessage>"}</code>
          </a>
        </li>
        {"\n"}
        <li>
          <code>{"response"}</code>
          {" "}
          <a href="http.html#class-httpserverresponse">
            <code>{"<http.ServerResponse>"}</code>
          </a>
        </li>
        {"\n"}
      </ul>
      {"\n"}
      <p>
        {
          "Emitted when server creates a response.\nThe event is emitted before the response is sent."
        }
      </p>
      {"\n"}
      <p>
        <code>{"http.server.response.finish"}</code>
      </p>
      {"\n"}
      <ul>
        {"\n"}
        <li>
          <code>{"request"}</code>
          {" "}
          <a href="http.html#class-httpincomingmessage">
            <code>{"<http.IncomingMessage>"}</code>
          </a>
        </li>
        {"\n"}
        <li>
          <code>{"response"}</code>
          {" "}
          <a href="http.html#class-httpserverresponse">
            <code>{"<http.ServerResponse>"}</code>
          </a>
        </li>
        {"\n"}
        <li>
          <code>{"socket"}</code>
          {" "}
          <a href="net.html#class-netsocket">
            <code>{"<net.Socket>"}</code>
          </a>
        </li>
        {"\n"}
        <li>
          <code>{"server"}</code>
          {" "}
          <a href="http.html#class-httpserver">
            <code>{"<http.Server>"}</code>
          </a>
        </li>
        {"\n"}
      </ul>
      {"\n"}
      <p>{"Emitted when server sends a response."}</p>
    </>
    {"\n"}
    <>
      <h4>{"Modules"}</h4>
      {"\n"}
      <p>
        <code>{"module.require.start"}</code>
      </p>
      {"\n"}
      <ul>
        {"\n"}
        <li>
          <code>{"event"}</code>
          {" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object">
            <code>{"<Object>"}</code>
          </a>
          {" containing the following properties"}
          {"\n"}
          <ul>
            {"\n"}
            <li>
              <code>{"id"}</code>
              {" - Argument passed to "}
              <code>{"require()"}</code>
              {". Module name."}
            </li>
            {"\n"}
            <li>
              <code>{"parentFilename"}</code>
              {" - Name of the module that attempted to require(id)."}
            </li>
            {"\n"}
          </ul>
          {"\n"}
        </li>
        {"\n"}
      </ul>
      {"\n"}
      <p>
        {"Emitted when "}
        <code>{"require()"}</code>
        {" is executed. See "}
        <a href="#startevent">
          <code>{"start"}</code>
          {" event"}
        </a>
        {"."}
      </p>
      {"\n"}
      <p>
        <code>{"module.require.end"}</code>
      </p>
      {"\n"}
      <ul>
        {"\n"}
        <li>
          <code>{"event"}</code>
          {" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object">
            <code>{"<Object>"}</code>
          </a>
          {" containing the following properties"}
          {"\n"}
          <ul>
            {"\n"}
            <li>
              <code>{"id"}</code>
              {" - Argument passed to "}
              <code>{"require()"}</code>
              {". Module name."}
            </li>
            {"\n"}
            <li>
              <code>{"parentFilename"}</code>
              {" - Name of the module that attempted to require(id)."}
            </li>
            {"\n"}
          </ul>
          {"\n"}
        </li>
        {"\n"}
      </ul>
      {"\n"}
      <p>
        {"Emitted when a "}
        <code>{"require()"}</code>
        {" call returns. See "}
        <a href="#endevent">
          <code>{"end"}</code>
          {" event"}
        </a>
        {"."}
      </p>
      {"\n"}
      <p>
        <code>{"module.require.error"}</code>
      </p>
      {"\n"}
      <ul>
        {"\n"}
        <li>
          <code>{"event"}</code>
          {" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object">
            <code>{"<Object>"}</code>
          </a>
          {" containing the following properties"}
          {"\n"}
          <ul>
            {"\n"}
            <li>
              <code>{"id"}</code>
              {" - Argument passed to "}
              <code>{"require()"}</code>
              {". Module name."}
            </li>
            {"\n"}
            <li>
              <code>{"parentFilename"}</code>
              {" - Name of the module that attempted to require(id)."}
            </li>
            {"\n"}
          </ul>
          {"\n"}
        </li>
        {"\n"}
        <li>
          <code>{"error"}</code>
          {" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error">
            <code>{"<Error>"}</code>
          </a>
        </li>
        {"\n"}
      </ul>
      {"\n"}
      <p>
        {"Emitted when a "}
        <code>{"require()"}</code>
        {" throws an error. See "}
        <a href="#errorevent">
          <code>{"error"}</code>
          {" event"}
        </a>
        {"."}
      </p>
      {"\n"}
      <p>
        <code>{"module.import.asyncStart"}</code>
      </p>
      {"\n"}
      <ul>
        {"\n"}
        <li>
          <code>{"event"}</code>
          {" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object">
            <code>{"<Object>"}</code>
          </a>
          {" containing the following properties"}
          {"\n"}
          <ul>
            {"\n"}
            <li>
              <code>{"id"}</code>
              {" - Argument passed to "}
              <code>{"import()"}</code>
              {". Module name."}
            </li>
            {"\n"}
            <li>
              <code>{"parentURL"}</code>
              {" - URL object of the module that attempted to import(id)."}
            </li>
            {"\n"}
          </ul>
          {"\n"}
        </li>
        {"\n"}
      </ul>
      {"\n"}
      <p>
        {"Emitted when "}
        <code>{"import()"}</code>
        {" is invoked. See "}
        <a href="#asyncstartevent">
          <code>{"asyncStart"}</code>
          {" event"}
        </a>
        {"."}
      </p>
      {"\n"}
      <p>
        <code>{"module.import.asyncEnd"}</code>
      </p>
      {"\n"}
      <ul>
        {"\n"}
        <li>
          <code>{"event"}</code>
          {" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object">
            <code>{"<Object>"}</code>
          </a>
          {" containing the following properties"}
          {"\n"}
          <ul>
            {"\n"}
            <li>
              <code>{"id"}</code>
              {" - Argument passed to "}
              <code>{"import()"}</code>
              {". Module name."}
            </li>
            {"\n"}
            <li>
              <code>{"parentURL"}</code>
              {" - URL object of the module that attempted to import(id)."}
            </li>
            {"\n"}
          </ul>
          {"\n"}
        </li>
        {"\n"}
      </ul>
      {"\n"}
      <p>
        {"Emitted when "}
        <code>{"import()"}</code>
        {" has completed. See "}
        <a href="#asyncendevent">
          <code>{"asyncEnd"}</code>
          {" event"}
        </a>
        {"."}
      </p>
      {"\n"}
      <p>
        <code>{"module.import.error"}</code>
      </p>
      {"\n"}
      <ul>
        {"\n"}
        <li>
          <code>{"event"}</code>
          {" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object">
            <code>{"<Object>"}</code>
          </a>
          {" containing the following properties"}
          {"\n"}
          <ul>
            {"\n"}
            <li>
              <code>{"id"}</code>
              {" - Argument passed to "}
              <code>{"import()"}</code>
              {". Module name."}
            </li>
            {"\n"}
            <li>
              <code>{"parentURL"}</code>
              {" - URL object of the module that attempted to import(id)."}
            </li>
            {"\n"}
          </ul>
          {"\n"}
        </li>
        {"\n"}
        <li>
          <code>{"error"}</code>
          {" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error">
            <code>{"<Error>"}</code>
          </a>
        </li>
        {"\n"}
      </ul>
      {"\n"}
      <p>
        {"Emitted when a "}
        <code>{"import()"}</code>
        {" throws an error. See "}
        <a href="#errorevent">
          <code>{"error"}</code>
          {" event"}
        </a>
        {"."}
      </p>
    </>
    {"\n"}
    <>
      <h4>{"NET"}</h4>
      {"\n"}
      <p>
        <code>{"net.client.socket"}</code>
      </p>
      {"\n"}
      <ul>
        {"\n"}
        <li>
          <code>{"socket"}</code>
          {" "}
          <a href="net.html#class-netsocket">
            <code>{"<net.Socket>"}</code>
          </a>
        </li>
        {"\n"}
      </ul>
      {"\n"}
      <p>{"Emitted when a new TCP or pipe client socket is created."}</p>
      {"\n"}
      <p>
        <code>{"net.server.socket"}</code>
      </p>
      {"\n"}
      <ul>
        {"\n"}
        <li>
          <code>{"socket"}</code>
          {" "}
          <a href="net.html#class-netsocket">
            <code>{"<net.Socket>"}</code>
          </a>
        </li>
        {"\n"}
      </ul>
      {"\n"}
      <p>{"Emitted when a new TCP or pipe connection is received."}</p>
      {"\n"}
      <p>
        <code>{"tracing:net.server.listen:asyncStart"}</code>
      </p>
      {"\n"}
      <ul>
        {"\n"}
        <li>
          <code>{"server"}</code>
          {" "}
          <a href="net.html#class-netserver">
            <code>{"<net.Server>"}</code>
          </a>
        </li>
        {"\n"}
        <li>
          <code>{"options"}</code>
          {" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object">
            <code>{"<Object>"}</code>
          </a>
        </li>
        {"\n"}
      </ul>
      {"\n"}
      <p>
        {"Emitted when "}
        <a href="net.html#serverlisten">
          <code>{"net.Server.listen()"}</code>
        </a>
        {" is invoked, before the port or pipe is actually setup."}
      </p>
      {"\n"}
      <p>
        <code>{"tracing:net.server.listen:asyncEnd"}</code>
      </p>
      {"\n"}
      <ul>
        {"\n"}
        <li>
          <code>{"server"}</code>
          {" "}
          <a href="net.html#class-netserver">
            <code>{"<net.Server>"}</code>
          </a>
        </li>
        {"\n"}
      </ul>
      {"\n"}
      <p>
        {"Emitted when "}
        <a href="net.html#serverlisten">
          <code>{"net.Server.listen()"}</code>
        </a>
        {" has completed and thus the server is ready to accept connection."}
      </p>
      {"\n"}
      <p>
        <code>{"tracing:net.server.listen:error"}</code>
      </p>
      {"\n"}
      <ul>
        {"\n"}
        <li>
          <code>{"server"}</code>
          {" "}
          <a href="net.html#class-netserver">
            <code>{"<net.Server>"}</code>
          </a>
        </li>
        {"\n"}
        <li>
          <code>{"error"}</code>
          {" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error">
            <code>{"<Error>"}</code>
          </a>
        </li>
        {"\n"}
      </ul>
      {"\n"}
      <p>
        {"Emitted when "}
        <a href="net.html#serverlisten">
          <code>{"net.Server.listen()"}</code>
        </a>
        {" is returning an error."}
      </p>
    </>
    {"\n"}
    <>
      <h4>{"UDP"}</h4>
      {"\n"}
      <p>
        <code>{"udp.socket"}</code>
      </p>
      {"\n"}
      <ul>
        {"\n"}
        <li>
          <code>{"socket"}</code>
          {" "}
          <a href="dgram.html#class-dgramsocket">
            <code>{"<dgram.Socket>"}</code>
          </a>
        </li>
        {"\n"}
      </ul>
      {"\n"}
      <p>{"Emitted when a new UDP socket is created."}</p>
    </>
    {"\n"}
    <>
      <h4>{"Process"}</h4>
      {"\n"}
      <p>
        <code>{"child_process"}</code>
      </p>
      {"\n"}
      <ul>
        {"\n"}
        <li>
          <code>{"process"}</code>
          {" "}
          <a href="child_process.html#class-childprocess">
            <code>{"<ChildProcess>"}</code>
          </a>
        </li>
        {"\n"}
      </ul>
      {"\n"}
      <p>{"Emitted when a new process is created."}</p>
      {"\n"}
      <p>
        <code>{"execve"}</code>
      </p>
      {"\n"}
      <ul>
        {"\n"}
        <li>
          <code>{"execPath"}</code>
          {" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type">
            <code>{"<string>"}</code>
          </a>
        </li>
        {"\n"}
        <li>
          <code>{"args"}</code>
          {" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type">
            <code>{"<string[]>"}</code>
          </a>
        </li>
        {"\n"}
        <li>
          <code>{"env"}</code>
          {" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type">
            <code>{"<string[]>"}</code>
          </a>
        </li>
        {"\n"}
      </ul>
      {"\n"}
      <p>
        {"Emitted when "}
        <a href="process.html#processexecvefile-args-env">
          <code>{"process.execve()"}</code>
        </a>
        {" is invoked."}
      </p>
    </>
    {"\n"}
    <>
      <h4>{"Worker Thread"}</h4>
      {"\n"}
      <p>
        <code>{"worker_threads"}</code>
      </p>
      {"\n"}
      <ul>
        {"\n"}
        <li>
          <code>{"worker"}</code>{" "}
          <a href="worker_threads.html#class-worker">
            <code>{"Worker"}</code>
          </a>
        </li>
        {"\n"}
      </ul>
      {"\n"}
      <p>{"Emitted when a new thread is created."}</p>
    </>
  </>
);
