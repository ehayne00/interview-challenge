import React, { useState } from "react";
import { Flex, Text } from "theme-ui";
import ItemCard from "./ItemCard";

const MenuPreview = ({ menuOptions, selectedOptions }) => (
  <Flex sx={{ flexDirection: "column" }}>
    <Text sx={{ mb: "40px" }}>Menu Preview</Text>
    <Flex sx={{ flexDirection: "column", ml: "20px" }}>
      {selectedOptions?.map((item) => (
        <ItemCard item={item} isSelected />
      ))}
    </Flex>
  </Flex>
);

export default MenuPreview;
