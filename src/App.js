import './App.css';
import CharactersGrid from "./components/CharactersGrid";
import {Button, Grid, TextField} from "@mui/material";
import {useState } from "react";
import { useDebounce } from "use-debounce";
import GenderFilter from "./components/GenderFilter";
import StatusFilter from "./components/StatusFilter";


function App() {
    const [nameFilter, setNameFilter] = useState("");
    const [genderFilter, setGenderFilter] = useState("");
    const [statusFilter, setStatusFilter] = useState("");
    const [debouncedNameFilter] = useDebounce(nameFilter, 300)

    const btnStyle = {
        height: '100%',
    };

    const handleInputChange = (event) => {
        setNameFilter(event.target.value);
    }

    function clearAllFilters(){
        setNameFilter("");
        setGenderFilter("");
        setStatusFilter("");
    }

    return (
        <div>
            <h1>Rick and Morty Characters App</h1>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Search"
                        value={nameFilter}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={5}>
                    <GenderFilter value={genderFilter} onChange={value => setGenderFilter(value)}/>
                </Grid>
                <Grid item xs={4} xl={5}>
                    <StatusFilter value={statusFilter} onChange={value => setStatusFilter(value)}/>
                </Grid>
                <Grid item xs={3} xl={2}>
                    <Button onClick={clearAllFilters} fullWidth sx={btnStyle} variant="contained">Clear</Button>
                </Grid>
                <Grid item xs={12}>
                    <CharactersGrid nameFilter={debouncedNameFilter} genderFilter={genderFilter} statusFilter={statusFilter}/>
                </Grid>
            </Grid>
        </div>
    );
}

export default App;
