import React, { useState } from "react";
import { Flex, Text, Input } from "theme-ui";
import ItemCard from "./ItemCard";

const SideBarOptions = ({ menuOptions, greyBacking, setSearchTerm }) => (
  <Flex
    sx={{
      flexDirection: "column",
      width: "350px",
      p: "20px",
      backgroundColor: greyBacking,
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
      <ItemCard item={item} />
    ))}
  </Flex>
);

export default SideBarOptions;
