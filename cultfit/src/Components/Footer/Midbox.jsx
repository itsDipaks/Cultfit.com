import {Box, ListItem, UnorderedList} from "@chakra-ui/react";
import React from "react";
import Styles from "./Footercompo.module.css";
const Midbox = () => {
  return (
    <Box className={Styles.Midbox}>
      <UnorderedList spacing={4}>
        <ListItem >cult.fit for business</ListItem>
        <ListItem>cult.fit franchise</ListItem>
        <ListItem>corporate partnerships</ListItem>
        <ListItem>cult pass network</ListItem>
        <ListItem>t&c for business</ListItem>
      </UnorderedList>
      <UnorderedList>
        <ListItem>partner fit</ListItem>
        <ListItem> blogs</ListItem>
        <ListItem>security </ListItem>
        <ListItem>careers</ListItem>
      </UnorderedList>
      <UnorderedList>
        <ListItem>contact us</ListItem>
        <ListItem>privacy policy</ListItem>
        <ListItem>cult bmi calculator</ListItem>
        <ListItem>terms & conditions</ListItem>

      </UnorderedList>
    </Box>
  );
};

export default Midbox;
