import React, { Component } from 'react';
import { Box, TextInput } from 'grommet';
import { Search } from "grommet-icons";

class Header extends Component {
  render() {
    return (
      <Box background="light" fill align="center">
        <Box
          width="large"
          direction="row"
          align="center"
          pad={{ horizontal: "small", vertical: "xsmall" }}
          border={{
            color: "brand"
          }}
          round="small"
        >
          <Search color="brand" />
          <TextInput
            type="search"
            plain
          />
        </Box>
      </Box>
    )
  }
}

export default Header;