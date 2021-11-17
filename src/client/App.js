import React, { useState, useEffect } from "react";
import { Flex, Spinner } from "theme-ui";
import TopSummaryBar from "./components/TopSummaryBar";
import SideBarOptions from "./components/SideBarOptions";
import MenuPreview from "./components/MenuPreview";
const axios = require("axios");

const MenuPageOverview = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [menuOptions, setMenuOptions] = useState([]);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let isMounted = true;
    axios
      .get(
        searchTerm
          ? `http://localhost:8080/api/items/?search=${searchTerm}`
          : "http://localhost:8080/api/items"
      )
      .then(({ data, error }) => {
        if (error) throw Error(error);
        setMenuOptions(data?.items);
      })
      .catch((error) => {
        console.log("error:", error);
        if (isMounted) setHasError(true);
      });
    return () => {
      isMounted = false;
    };
  }, [searchTerm]);

  if (hasError) return <Text>There was a problem loading this page</Text>;

  if (!menuOptions.length) return <Spinner />;

  return (
    <>
      <TopSummaryBar selectedOptions={selectedOptions} />
      <Flex sx={{ flexDirection: "row", px: "40px" }}>
        <SideBarOptions
          menuOptions={menuOptions}
          setSearchTerm={setSearchTerm}
          setSelectedOptions={setSelectedOptions}
          selectedOptions={selectedOptions}
        />
        <MenuPreview
          selectedOptions={selectedOptions}
          setSelectedOptions={setSelectedOptions}
        />
      </Flex>
    </>
  );
};

export default MenuPageOverview;
