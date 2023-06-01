import {Box, Modal} from "@mui/material";
import {useState, useEffect} from "react";
import {getEpisode} from "../api";

function CharacterModal({character, isOpen, onClose}){
    const [firstAppearance, setFirstAppearance] = useState("");
    const [lastAppearance, setLastAppearance] = useState("");
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
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
        <Box sx={style}>
            <p>{character?.name}</p>
            <img src={character?.image}/>
            <p>First appearance: {firstAppearance}</p>
            <p>Last appearance: {lastAppearance}</p>
        </Box>
    </Modal>);
}

export default CharacterModal;
