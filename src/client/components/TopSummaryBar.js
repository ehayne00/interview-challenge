import React from "react";
import { Flex, Text } from "theme-ui";
import DietaryCircle from "./DietaryCircle";

const allDietaryOptions = ["ve", "v", "df", "gf", "n!"];

const TopSummaryBar = ({ selectedOptions }) => {
  const getCount = (str) => {
    return selectedOptions?.filter((el) => el.dietaries.includes(str)).length;
  };
  return (
    <Flex
      sx={{
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#F8F8F8",
        px: "40px",
        py: "30px",
        mb: "50px",
      }}
    >
      <Text sx={{ fontWeight: 600 }}>{selectedOptions?.length} items</Text>
      <Flex sx={{ flexDirection: "row" }}>
        {allDietaryOptions.map((el) => (
          <Flex sx={{ flexDirection: "row", alignItems: "center" }} key={el}>
            <Text>{getCount(el)}x </Text>
            <DietaryCircle text={el} />
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default TopSummaryBar;
