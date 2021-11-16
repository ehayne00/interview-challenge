import React, { useState, useEffect } from "react";
import { Flex } from "theme-ui";
import menuOptions from "../server/items";
import TopSummaryBar from "./components/TopSummaryBar";
import SideBarOptions from "./components/SideBarOptions";
import MenuPreview from "./components/MenuPreview";

const MenuPageOverview = () => {
  console.log("menuOptions", menuOptions);
  const px = "40px";
  const greyBacking = "#F8F8F8";
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    menuOptions(searchTerm);
  }, [searchTerm]);
  return (
    <>
      <TopSummaryBar
        menuOptions={menuOptions}
        px={px}
        greyBacking={greyBacking}
      />
      <Flex sx={{ flexDirection: "row", px: px }}>
        <SideBarOptions
          menuOptions={menuOptions}
          greyBacking={greyBacking}
          setSearchTerm={setSearchTerm}
        />
        <MenuPreview
          menuOptions={menuOptions}
          selectedOptions={selectedOptions}
          greyBacking={greyBacking}
        />
      </Flex>
    </>
  );
};

export default MenuPageOverview;
