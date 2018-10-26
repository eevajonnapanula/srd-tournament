import React from 'react'

import Accordion from 'grommet/components/Accordion';
import AccordionPanel from 'grommet/components/AccordionPanel';

import Button from 'grommet/components/Button'
import Box from 'grommet/components/Box'

const Menu = (props) => (
  <Accordion>
    <AccordionPanel heading='Menu'>
      {Object.keys(props.data).map(item => (
        <Box pad="small" size="small" key={item}>
          <Button
            label={props.data[item].title}
            primary={true}
            onClick={() => props.handleSelected(item)}
            pad="small"
            size="small" />
        </Box>
      ))}
    </AccordionPanel>
  </Accordion>
)

export default Menu
