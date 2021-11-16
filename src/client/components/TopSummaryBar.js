import React from "react";
import { Flex, Text } from "theme-ui";
import DietaryCircle from "./DietaryCircle";

const allDietaryOptions = ["ve", "v", "df", "gf", "n!"];

const TopSummaryBar = ({ px, menuOptions, greyBacking }) => {
  const getCount = (str) => {
    return menuOptions.filter((el) => el.dietaries.includes(str)).length;
  };
  return (
    <Flex
      sx={{
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: greyBacking,
        px: px,
        py: "20px",
        mb: "50px",
      }}
    >
      <Text sx={{ fontWeight: 600 }}>{menuOptions.length} items</Text>
      <Flex sx={{ flexDirection: "row" }}>
        {allDietaryOptions.map((el) => (
          <Flex sx={{ flexDirection: "row", alignItems: "center" }}>
            <Text>{getCount(el)}x </Text>
            <DietaryCircle text={el} />
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default TopSummaryBar;
