import {MenuItem, TextField} from "@mui/material";

function GenderFilter({onChange}) {
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

    const handleGenderFilterChange = (event) => {
        onChange(event.target.value);
    }

    return (
        <TextField
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
    );
}

export default GenderFilter;
