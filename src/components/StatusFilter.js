import {MenuItem, TextField} from "@mui/material";

function StatusFilter({onChange}) {
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

    const handleStatusFilterChange = (event) => {
        onChange(event.target.value);
    }

    return (
        <TextField
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
    );
}

export default StatusFilter;
