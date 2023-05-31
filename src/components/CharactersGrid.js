import {useEffect, useState} from "react";
import {getCharacters} from "../api";
import {DataGrid} from "@mui/x-data-grid";

function CharactersGrid(){
    const [characters, setCharacters] = useState([]);
    const [rowCount, setRowCount] = useState(0);
    const [paginationModel, setPaginationModel] = useState({
        page: 0,
        pageSize: 20,
    });
    const columns = [
        { field: 'image', headerName: 'Image', width: 150, renderCell: (params) => <img src={params.value} />},
        { field: 'name', headerName: 'Character Name', width: 150 },
        { field: 'origin', headerName: 'Origin', width: 150, renderCell: (params) => params.value?.name},
        { field: 'status', headerName: 'Status', width: 150 },
        { field: 'species', headerName: 'Species', width: 150 },
        { field: 'gender', headerName: 'Gender', width: 150 },
    ];

    useEffect( () => {
        getCharacters().then((res) => {
            setCharacters(res.results);
            setRowCount(res.info.count);
        });
    },[]);

    useEffect(() => {
        getCharacters(paginationModel.page).then((res) => {
            setCharacters(res.results);
            setRowCount(res.info.count);
        });
    }, [paginationModel])

    return (
        <DataGrid
            rows={characters}
            columns={columns}
            rowCount={rowCount}
            paginationModel={paginationModel}
            paginationMode="server"
            onPaginationModelChange={setPaginationModel}
        />
    );
}

export default CharactersGrid;
