import './App.css';
import CharactersGrid from "./components/CharactersGrid";
import { TextField } from "@mui/material";
import {useState } from "react";
import { useDebounce } from "use-debounce";
import GenderFilter from "./components/GenderFilter";
import StatusFilter from "./components/StatusFilter";


function App() {
    const [nameFilter, setNameFilter] = useState("");
    const [genderFilter, setGenderFilter] = useState("");
    const [statusFilter, setStatusFilter] = useState("");
    const [debouncedNameFilter] = useDebounce(nameFilter, 300)

    const handleInputChange = (event) => {
        setNameFilter(event.target.value);
    }

    return (
        <div>
            <TextField
                label="Search"
                value={nameFilter}
                onChange={handleInputChange}
            />

            <GenderFilter onChange={value => setGenderFilter(value)}/>
            <StatusFilter onChange={value => setStatusFilter(value)}/>
            <CharactersGrid nameFilter={debouncedNameFilter} genderFilter={genderFilter} statusFilter={statusFilter}/>
        </div>
    );
}

export default App;
