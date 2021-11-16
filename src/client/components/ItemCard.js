import React from "react";
import { Flex, Text } from "theme-ui";
import { XCircleIcon } from "@heroicons/react/outline";
import styled from "styled-components";
import DietaryCircle from "./DietaryCircle";

const CloseButton = styled(XCircleIcon)`
  position: absolute;
  right: -10px;
  top: -10px;
  color: black;
  width: 25px;
  height: 25px;
  cursor: pointer;
`;

const ItemCard = ({ item, isSelected }) => (
  <Flex
    sx={{
      flexDirection: "column",
      p: "10px",
      position: "relative",
      backgroundColor: "white",
      mb: "20px",
      boxShadow: "0px 0px 5px 1px rgba(128,128,128,0.3)",
      borderRadius: "6px",
      cursor: isSelected ? "default" : "pointer",
    }}
  >
    {isSelected && <CloseButton />}
    <Text sx={{ fontWeight: 600, mb: "10px" }}>{item?.name}</Text>
    <Flex sx={{ flexDirection: "row" }}>
      {item?.dietaries?.map((dietary) => (
        <DietaryCircle text={dietary} />
      ))}
    </Flex>
  </Flex>
);

export default ItemCard;
