import React from 'react';
import { Button, Modal } from "@mui/material"
import './Addnewuser.css'
import Form from '../Form';

const Addnewuser = ({
    isOpen,
    player,
    handleModelClose,
    handleSubmit,
    handlePlayerChange
}) => {
    return (
        <Modal
            open={isOpen}
            onClose={handleModelClose}
            aria-labelledby="add-model-user"
        >    
            <div className='addUserWrapper'>
                <div className='UserTitle'>
                    Add box
                </div>
                <form onSubmit={handleSubmit}>
                    <Form
                        player={player}
                        handleChange={handlePlayerChange}
                    />

                    <Button
                        type={'submit'}
                        variant="contained"
                        className='userButton'
                        onSubmit={handleSubmit}
                    >Submit</Button>

                </form>
            </div>
       </Modal>
    )
    
}

export default Addnewuser