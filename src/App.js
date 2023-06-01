import './App.css';
import CharactersGrid from "./components/CharactersGrid";
import {MenuItem, TextField} from "@mui/material";
import {useState} from "react";
import _ from "lodash";
import { useDebounce } from "use-debounce";


function App() {
    const [nameFilter, setNameFilter] = useState("");
    const [genderFilter, setGenderFilter] = useState("");
    const [statusFilter, setStatusFilter] = useState("");
    const [debouncedValue] = useDebounce(nameFilter, 2000);

    const genders = [
        {
            value: '',
            label: 'All',
        },
        {
            value: 'female',
            label: 'Female',
        },
        {
            value: 'male',
            label: 'Male',
        }
        ,
        {
            value: 'genderless',
            label: 'Genderless',
        }
        ,
        {
            value: 'unknown',
            label: 'Unknown',
        }
    ];

    const statuses = [
        {
            value: '',
            label: 'All',
        },
        {
            value: 'alive',
            label: 'Alive',
        },
        {
            value: 'dead',
            label: 'Dead',
        }
        ,
        {
            value: 'unknown',
            label: 'Unknown',
        }
    ];

    const handleInputChange = (event) => {
        setNameFilter(event.target.value);
    }

    const handleGenderFilterChange = (event) => {
        setGenderFilter(event.target.value);
    }

    const handleStatusFilterChange = (event) => {
        setStatusFilter(event.target.value);
    }


    return (
        <div>
            <TextField
                id="name_filter"
                label="Search"
                value={nameFilter}
                onChange={handleInputChange}
            />

            <TextField
                id="gender_filter"
                select
                label="Gender"
                onChange={handleGenderFilterChange}
            >
                {genders.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>

            <TextField
                id="status_filter"
                select
                label="Status"
                onChange={handleStatusFilterChange}
            >
                {statuses.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>

            <CharactersGrid nameFilter={nameFilter} genderFilter={genderFilter} statusFilter={statusFilter}/>
        </div>
    );
}

export default App;
