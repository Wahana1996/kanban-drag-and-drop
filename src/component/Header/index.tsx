import React from 'react'
import { Flex, Image } from '@chakra-ui/core'

import wrellologo from 'images/wrello-logo.svg'

const Header: React.FC = () => {
    return (
        <Flex
            id='app-root'
            as='nav'
            align='center'
            backgroundColor='rgba(0,0,0,0.52)'
            color='gray.50'
            p={4}
            justifyContent='center'
            overflow='hidden'
            maxHeight='40px'
            boxSizing='border-box'
        >
            <Image src={wrellologo} height='26px' alt='wrello-logo'/>
        </Flex>
    );
}
export default Header
