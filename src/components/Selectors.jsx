import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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
}));

export default function Selectors(props) {
    const classes = useStyles();
    const { country, setCountry, category, setCategory, setNewsList, setisLoading } = props;
    return (

        <div className="formContainer">
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="countrySelector">País</InputLabel>
                <Select
                native
                value={country}
                onChange={() => { const countrySelector = document.getElementById("countrySelector"); setCountry(countrySelector.value); }}
                label="countrySelector"
                inputProps={{
                  name: 'countrySelector',
                  id: 'countrySelector',
                }}
                >
                {/* <option aria-label="None" value="" /> */}
                <option value="ar">Argentina</option>
                <option value="br">Brasil</option>
                <option value="us">Estados Unidos</option>
                <option value="it">Italia</option>
                </Select>
            </FormControl>
            
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="categorySelector">Categoría</InputLabel>
                <Select
                native
                value={category}
                onChange={() => { const categorySelector = document.getElementById("catSelector"); setCategory(categorySelector.value); }}
                label="categorySelector"
                inputProps={{
                  name: 'categorySelector',
                  id: 'catSelector',
                }}
                >
                {/* <option aria-label="None" value="" /> */}
                <option value="politics">Política</option>
                <option value="sports">Deportes</option>
                <option value="business">Economía</option>
                
                </Select>
            </FormControl>
            <FormControl style={{margin: '25px 0 0 9px'}}>
                <Button color="primary" variant="contained" onClick={() => {
                    setNewsList([]);
                    const countrySelector = document.getElementById("countrySelector");
                    const categorySelector = document.getElementById("catSelector");
                    setCountry(countrySelector.value);
                    setCategory(categorySelector.value);
                    setisLoading(true);
                }} >
                    Buscar
                </Button>
            </FormControl>
        </div>
    );
}