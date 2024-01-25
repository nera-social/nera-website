import React from "react";
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import { Navigate } from "react-router-dom";

function samePageLinkNavigation(event) {
    if (
      event.defaultPrevented ||
      event.button !== 0 || // ignore everything but left-click
      event.metaKey ||
      event.ctrlKey ||
      event.altKey ||
      event.shiftKey
    ) {
      return false;
    }
    return true;
  }
  
  function LinkTab(props) {
    let path = props.href
    return (
      <Tab
      component="a"
      onClick={(event) => {
        // // Routing libraries handle this, you can remove the onClick handle when using them.
        // if (samePageLinkNavigation(event)) {
        //     event.preventDefault();
        //   }
        <Navigate to={path} replace={true} />
      }}
      aria-current={props.selected && 'page'}
      {...props}
      />
    )
  }

export default function NavTabs(props) {
    const [value, setValue] = React.useState(props.tab)

    const handleChange = (event, newValue) => {
        // event.type can be equal to focus with selectionFollowsFocus.
        if (
        event.type !== 'click' ||
        (event.type === 'click' && samePageLinkNavigation(event))
        ) {
        setValue(newValue);
        }
    };

    return (
        <Box sx = {{width: '100%'}}>
                <Tabs
                value = {value}
                onChange={handleChange}
                aria-label='nav'
                role="navigation"
                style={{position: "absolute", right: 30, top: 30}}
                TabIndicatorProps={{
                    style: {
                        backgroundColor: "#FFFFFF"
                    }
                }}
                textColor="#FFFFFF"
                >
                  <LinkTab label="Home" href="/"/>
                  {/* <LinkTab label="About Us" href="/about" /> */}
                  <LinkTab label="Waitlist" href="/waitlist"/>
                </Tabs>
              </Box>
    );
}