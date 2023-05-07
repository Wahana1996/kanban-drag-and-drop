import * as React from 'react'
import { ChakraProvider, CSSReset, Box } from '@chakra-ui/core'
import theme from '@chakra-ui/theme'
import backgroundImage from 'images/app-root-background.jpg'
import Header from 'component/Header'
import KanbanStack from 'component/Kanban/KanbanStack'

const App : React.FC = () => (
  <ChakraProvider theme={theme}>
    <CSSReset/>
    <Box
      backgroundImage={`url(${backgroundImage})`}
      backgroundPosition='50%'
      backgroundSize='cover'
      height='100vh'
      position='relative'
    >
      <Header/>
      <KanbanStack/>
    </Box>
  </ChakraProvider>
)
export default App