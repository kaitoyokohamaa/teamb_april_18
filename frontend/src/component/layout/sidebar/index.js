import React from "react";

import { Box, Flex, Heading, HStack, Text } from "@chakra-ui/layout";
import { List, ListItem, Link } from "@chakra-ui/react";
import { MdAutoGraph } from "react-icons/md";
export const Sidebar = () => {
  return (
    <Box w="10%" h="100vh" bg="#273673">
      <Box textAlign="center">
        <Heading textAlign="center" as="h5" size="md" color="white" pt={10}>
          Jira
        </Heading>
      </Box>

      <>
        {/* グラフ */}
        <Box
          mt={20}
          borderLeft={"4px"}
          borderColor={"#56A9D3"}
          _hover={{ bg: "#FFFFFF1A 0% 0% no-repeat padding-box" }}
          bg={"#FFFFFF1A 0% 0% no-repeat padding-box"}
        >
          <List spacing={3}>
            <ListItem color={"#84B9D4"}>
              {" "}
              <Link href={`/`}>
                <Flex justify="center">
                  <HStack w="60%">
                    <MdAutoGraph />
                    <Text py={6}>グラフ</Text>
                  </HStack>
                </Flex>
              </Link>
            </ListItem>
          </List>
        </Box>
      </>
    </Box>
  );
};
