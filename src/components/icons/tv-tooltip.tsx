import React from 'react'
import {LiveTv} from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

const TvTooltip = (props: {title: string}) => {
  return(
    <Tooltip title={props.title}>
      <IconButton>
        <LiveTv/>
      </IconButton>
    </Tooltip>
  )
}
export default TvTooltip;