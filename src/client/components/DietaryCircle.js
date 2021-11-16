import React from "react";
import { Flex, Text } from "theme-ui";

const DietaryCircle = ({ text }) => (
  <Flex
    sx={{
      width: "25px",
      height: "25px",
      borderRadius: 30,
      backgroundColor: "#A0C9CD",
      mx: "5px",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Text sx={{ color: "white", fontWeight: 600, fontSize: "12px" }}>
      {text}
    </Text>
  </Flex>
);

export default DietaryCircle;
