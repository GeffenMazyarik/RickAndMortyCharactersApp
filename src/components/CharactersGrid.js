import {useEffect, useState} from "react";
import {getCharacters} from "../api";
import {DataGrid} from "@mui/x-data-grid";
import {Alert, Avatar} from "@mui/material";
import CharacterModal from "./CharacterModal";

function CharactersGrid({nameFilter, genderFilter, statusFilter}){
    const [characters, setCharacters] = useState([]);
    const [rowCount, setRowCount] = useState(0);
    const [paginationModel, setPaginationModel] = useState({
        page: 0,
        pageSize: 20,
    });
    const columns = [
        { field: 'image', headerName: 'Image', width: 150, renderCell: (params) => <Avatar src={params.value} />},
        { field: 'name', headerName: 'Character Name', width: 150 },
        { field: 'origin', headerName: 'Origin', width: 150, renderCell: (params) => params.value?.name},
        { field: 'status', headerName: 'Status', width: 150 },
        { field: 'species', headerName: 'Species', width: 150 },
        { field: 'gender', headerName: 'Gender', width: 150 },
    ];

    const [isCharacterModalOpen, setIsCharacterModalOpen] = useState(false);
    const [selectedCharacter, setSelectedCharacter] = useState({});
    const [errorMessage, setErrorMessage] = useState("");

    function refreshCharacters(){
        getCharacters(paginationModel.page, nameFilter, genderFilter, statusFilter).then((res) => {
            if(res.error) {
                setErrorMessage(res.error);
                setCharacters([]);
                setRowCount(0);
            } else {
                setErrorMessage("");
                setCharacters(res.results);
                setRowCount(res.info.count);
            }
        });
    }

    useEffect( () => {
        refreshCharacters();
    },[]);

    useEffect(() => {
        refreshCharacters();
    }, [paginationModel, nameFilter, genderFilter, statusFilter])

    const handleOnRowClick = (gridRow) => {
        setSelectedCharacter(gridRow.row);
        setIsCharacterModalOpen(true);
    };

    return (
        <div>
            { errorMessage &&
                <Alert severity="error">{errorMessage}</Alert>
            }
            <DataGrid
                rows={characters}
                columns={columns}
                rowCount={rowCount}
                paginationModel={paginationModel}
                paginationMode="server"
                onPaginationModelChange={setPaginationModel}
                onRowClick={handleOnRowClick}
            />
            <CharacterModal
                character={selectedCharacter}
                isOpen={isCharacterModalOpen}
                onClose={() => setIsCharacterModalOpen(false)}/>
        </div>

    );
}



export default CharactersGrid;
