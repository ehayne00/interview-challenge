import React, { useState, useEffect } from "react";
import { Flex } from "theme-ui";
import TopSummaryBar from "./components/TopSummaryBar";
import SideBarOptions from "./components/SideBarOptions";
import MenuPreview from "./components/MenuPreview";
const axios = require("axios");

// sort the title
// sort the filter from X button

const MenuPageOverview = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [menuOptions, setMenuOptions] = useState([]);

  useEffect(() => {
    axios
      .get(
        searchTerm
          ? `http://localhost:8080/api/items/?search=${searchTerm}`
          : "http://localhost:8080/api/items"
      )
      .then(({ data }) => setMenuOptions(data?.items))
      .catch((e) => console.log("error:", e));
  }, [searchTerm]);
  return (
    <>
      <TopSummaryBar
        menuOptions={menuOptions}
      />
      <Flex sx={{ flexDirection: "row", px: "40px" }}>
        <SideBarOptions
          menuOptions={menuOptions}
          setSearchTerm={setSearchTerm}
          setSelectedOptions={setSelectedOptions}
          selectedOptions={selectedOptions}
        />
        <MenuPreview
          menuOptions={menuOptions}
          selectedOptions={selectedOptions}
        />
      </Flex>
    </>
  );
};

export default MenuPageOverview;
