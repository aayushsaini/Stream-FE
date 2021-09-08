import React from 'react';
import { Icon, Input, InputGroup, useColorModeValue, InputRightElement, Stack } from "@chakra-ui/react";
import { BiSearch  } from "react-icons/all";

function SearchBar() {

    const inputBackground = useColorModeValue("gray.200","#0D0D0D");
    const iconBackground = useColorModeValue("gray.500","gray.500");

    return (
        <Stack>
            <InputGroup alignItems="center" >
                <Input mt="0.2em" 
                    backgroundColor={inputBackground}
                    fontSize="sm"
                    border="0px"
                    borderRadius="10px" 
                    width="30vw" 
                    placeholder="Type to search..." 
                />
                <InputRightElement children={ <Icon mt="0.5em" fontSize="1.3em" textColor={iconBackground} ><BiSearch /> </Icon> } />
            
            </InputGroup>
        </Stack>
    )
}

export default SearchBar;
