import React from 'react'

import Button from 'grommet/components/Button'
import Box from 'grommet/components/Box'
import Menu from 'grommet/components/Menu'
import DownIcon from 'grommet/components/icons/base/Down'


const titles = {
  'fi': "Avaa valikko",
  'en': "Open menu"
}

const MenuComponent = (props) => {
  const title = titles[props.language]
  return (
  <Box style={{flexDirection: 'row', flexWrap: "wrap" }} size="full" align="center" justify="around" >
    <Menu
      direction='row'
      icon={props.small ? <DownIcon /> : false}
      label={props.small ? title : false}
      fill={true}
      full="horizontal"
      align="center"
      justify="center"
      >
      {props.data[props.language] && Object.keys(props.data[props.language]).map(item => (
        <Box pad="small" size="small" key={item}>
          <Button
            label={props.data[props.language][item].title}
            primary={true}
            onClick={() => props.handleSelected(item)}
            pad="small"
            size="small" />
          </Box>
        ))}
    </Menu>
  </Box>
)}

export default MenuComponent
