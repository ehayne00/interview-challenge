import React, { useState } from "react";
import { Flex, Text, Input } from "theme-ui";
import ItemCard from "./ItemCard";

const SideBarOptions = ({
  menuOptions,
  setSearchTerm,
  setSelectedOptions,
  selectedOptions,
}) => (
  <Flex
    sx={{
      flexDirection: "column",
      width: "350px",
      p: "20px",
      backgroundColor: "#F8F8F8",
    }}
  >
    <Input
      sx={{
        backgroundColor: "white",
        borderRadius: "0px",
        border: "1px solid grey",
        mb: "40px",
      }}
      placeholder="Name"
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    {menuOptions?.map((item) => (
      <ItemCard
        item={item}
        setSelectedOptions={setSelectedOptions}
        selectedOptions={selectedOptions}
      />
    ))}
  </Flex>
);

export default SideBarOptions;
