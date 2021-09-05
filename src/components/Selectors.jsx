import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import FormControl from '@material-ui/core/FormControl';

import { Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  withMargin: {
    marginLeft:20,
    marginRight: 20,
  },
}));

export default function Selectors(props) {

  const {selectedDateFrom, setSelectedDateFrom, selectedDateTo, setSelectedDateTo, isLoading, setisLoading, setNewsList } = props;

  const handleDateChangeFrom = (date) => {
    if(!isLoading) setSelectedDateFrom(date);
  };

  const handleDateChangeTo = (date) => {
    if(!isLoading) setSelectedDateTo(date);
  };
  
  const classes = useStyles();

  return (

      <div className="formContainer">

        <Grid container justifyContent="flex-start">            

          <MuiPickersUtilsProvider utils={DateFnsUtils}>

              <KeyboardDatePicker
              className={classes.withMargin}
                disableToolbar
                variant="inline"
                format="dd/MM/yyyy"
                margin="normal"
                id="date-picker-from"
                label="Fecha desde:"
                value={selectedDateFrom}
                onChange={handleDateChangeFrom}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />

              <KeyboardDatePicker
              className={classes.withMargin}
                        disableToolbar
                        variant="inline"
                        format="dd/MM/yyyy"
                        margin="normal"
                        id="date-picker-to"
                        label="Fecha hasta:"
                        value={selectedDateTo}
                        onChange={handleDateChangeTo}
                        KeyboardButtonProps={{
                          'aria-label': 'change date',
                        }}
                      />
        
              <FormControl style={{margin: '25px 0 0 20px'}}>
                <Button color="primary" variant="contained" onClick={() => {
                    setNewsList([]);
                    setisLoading(true);
                    const datePickerFrom = document.getElementById("date-picker-from");
                    const datePickerTo = document.getElementById("date-picker-to");

                    let fechaDesde = new Date(datePickerFrom.value.substring(6, 10) + "-" + datePickerFrom.value.substring(3, 5) + "-" + datePickerFrom.value.substring(0, 2) + " 00:00:00");
                    let fechaHasta = new Date(datePickerTo.value.substring(6, 10) + "-" + datePickerTo.value.substring(3, 5) + "-" + datePickerTo.value.substring(0, 2) + " 00:00:00");

                    setSelectedDateFrom(fechaDesde);
                    setSelectedDateTo(fechaHasta);
                }} >
                    Buscar
                </Button>
              </FormControl>
      
          </MuiPickersUtilsProvider>

        </Grid>
        
      </div> 
    );
}