import React from "react";
// import styled from 'styled-components'
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { DatePicker } from "@material-ui/pickers";
import { createMuiTheme, IconButton } from "@material-ui/core";
// import InputAdornment from '@material-ui/core/InputAdornment';
import { ThemeProvider } from "@material-ui/styles";

const materialTheme = createMuiTheme({
  overrides: {
    MuiInputBase: {
      root: {
        backgroundColor: "#F0F3F5",
        fontSize: 18,
        color: "#3744BD",
        padding: "16px 0px 16px 10px",
        borderRadius: 30,
      },
    },
    MuiInput: {
      underline: {
        "&:before": {
          content: ""
        },
        "&:after": {
          content: ""
        },
      },
    },
    MuiPaper: {
        element: {
            position: 'absolute',
            top: 210,
        }
    },
    MuiButtonBase: {
      body2: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '16px',
        marginRight: '7px'
      }
    },
    MuiPickersBasePicker:{
      container:{
        alignItems: 'center',
      }
    },
    MuiPopover: {
      paper: {
        width: '420px',
      }
    },
    MuiPickersCalendarHeader: {
      switchHeader: {
        marginTop: '37px',
      }
    }
  },
});


function MaterialDatePicker({selectedDate, handleDateChange}) {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <ThemeProvider theme={materialTheme}>
        <DatePicker
          variant="inline"
          value={selectedDate}
          onChange={handleDateChange}
          format="dd MMMM yyyy"
          disableToolbar="true"
        />
      </ThemeProvider>
    </MuiPickersUtilsProvider>
  );
}
export default MaterialDatePicker;
