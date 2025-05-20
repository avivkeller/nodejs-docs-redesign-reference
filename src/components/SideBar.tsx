"use client";

import Sidebar from "@node-core/ui-components/Containers/Sidebar";

const WithSidebar = () => {
  return (
    <Sidebar
      groups={[
        {
          groupName: "Group 1",
          items: [
            {
              label: "Item 1",
              link: "/item-1",
            },
          ],
        },
      ]}
      pathname={"/"}
      title={"title"}
      onSelect={() => {}}
      as={"a"}
    />
  );
};

export default WithSidebar;
