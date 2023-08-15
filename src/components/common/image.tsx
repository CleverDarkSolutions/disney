import React from 'react'
import Box from '@mui/material/Box';

const Image = (props: {width?: string, height?: string, rounded?: number}) => (
  <Box
    component="img"
    sx={{
      height: props.height || 233,
      width:  props.width || '100%',
    }}
    borderRadius={props.rounded || 0}
    alt="The house from the offer."
    src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
  />
)

export default Image