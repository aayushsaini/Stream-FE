import React from 'react';
import { Icon, Input, InputGroup } from "@chakra-ui/react";
import { BiSearch  } from "react-icons/all";
import { InputRightElement } from '@chakra-ui/react';
import { Stack } from '@chakra-ui/react';

function SearchBar() {
    return (
        <Stack>
            <InputGroup alignItems="center" >
                <Input mt="0.2em" 
                    backgroundColor="#0D0D0D"
                    border="0px"
                    borderRadius="10px" 
                    width="30vw" 
                    placeholder="Type to search..." 
                />
                <InputRightElement children={ <Icon mt="0.5em" fontSize="1.3em" textColor="gray.300" ><BiSearch /> </Icon> } />
            
            </InputGroup>
        </Stack>
    )
}

export default SearchBar;
