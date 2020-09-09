import React, {useState} from 'react'
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';

const AntSwitch = withStyles((theme) => ({
    root: {
      width: 28,
      height: 16,
      padding: 0,
      display: 'flex',
    },
    switchBase: {
      padding: 2,
      color: '#ffffff',
      '&$checked': {
        transform: 'translateX(12px)',
        color: theme.palette.common.white,
        '& + $track': {
          opacity: 1,
          backgroundColor: '#3744BD',
          borderColor: '#3744BD',
        },
      },
    },
    thumb: {
      width: 12,
      height: 12,
      boxShadow: 'none',
    },
    track: {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor: '#C4CACB',
    },
    checked: {},
  }))(Switch);

  function SyncSwitch({state, handleChange}) {
    // const [state, setState] = useState({
    //   checked: false,
    // });

    // const handleChange = (event) => {
    //     setState({ ...state, [event.target.name]: event.target.checked });
    //   };
      
    return (
        <div>
            <AntSwitch checked={state.checked} onChange={handleChange} name="checked" />
        </div>
    )
}

export default SyncSwitch
