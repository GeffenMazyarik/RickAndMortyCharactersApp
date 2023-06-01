import {Box, Button, Divider, Grid, Modal, TextField} from "@mui/material";
import {useState, useEffect} from "react";
import {getEpisode} from "../api";
import GenderFilter from "./GenderFilter";
import StatusFilter from "./StatusFilter";

function CharacterModal({character, isOpen, onClose}){
    const [firstAppearance, setFirstAppearance] = useState("");
    const [lastAppearance, setLastAppearance] = useState("");
    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 300,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        padding: 0
    };

    const modalInnerStyle = {
        padding: 4
    };


    useEffect(() => {
        if (character?.episode) {
            getEpisode(character.episode[0]).then((episode) => {
                setFirstAppearance(episode);
            })

            getEpisode(character.episode[character.episode.length - 1]).then((episode) => {
                setLastAppearance(episode);
            })
        }
    }, [character])

    return (<Modal
        open={isOpen}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <Box sx={modalStyle}>
            <img src={character?.image}/>
            <Box sx={modalInnerStyle}>
            <h2>{character?.name}</h2>
                <p>First appearance:  {firstAppearance}</p>
                <Divider light />
                <p>Last appearance:  {lastAppearance}</p>
                <Divider light />
            </Box>
        </Box>
    </Modal>);
}

export default CharacterModal;
