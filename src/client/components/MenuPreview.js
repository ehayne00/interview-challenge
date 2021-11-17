import React from "react";
import { Flex, Text } from "theme-ui";
import ItemCard from "./ItemCard";

const MenuPreview = ({ selectedOptions, setSelectedOptions }) => (
  <Flex sx={{ flexDirection: "column", ml: "20px" }}>
    <Text sx={{ mb: "40px", fontSize: "24px", fontWeight: 600 }}>
      Menu Preview
    </Text>
    <Flex sx={{ flexDirection: "column", ml: "20px" }}>
      {selectedOptions?.map((item) => (
        <ItemCard
          key={item.id}
          item={item}
          isSelected
          selectedOptions={selectedOptions}
          setSelectedOptions={setSelectedOptions}
        />
      ))}
    </Flex>
  </Flex>
);

export default MenuPreview;
