import { Button, Snackbar } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from "react-router-dom";
import Form from '../Components/Form';
import { editUser } from '../store/actions';
import './EditUser.css'
function Edituser() {

    const players = useSelector(state => state?.playerOperations);
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [snackBar, setSnackBar] = useState({
        isOpen: false,
        message:""
    })

    const [player, setPlayer] = useState({
        name: "",
        teamName: "",
        totalRuns: "",
        highestScore: "",
        centuries: "",
        dateOfUpdate: ""
    })

    const handlePlayerChange = (key,value) => {
        setPlayer({
            ...player,
            [key]:value
        })
    }


    useEffect(() => {
        const id = location.pathname.split("/")[2];
        let idArr = players.filter((player) => player.id +""=== id);
        console.log(idArr, id);
        if (idArr.length === 0) {
            setSnackBar({
                isOpen: false,
                message:"Invalid player clicked"
            })
            return;
        }
        setPlayer({
            ...idArr[0]
        })
        
    }, [players, location.pathname]);

    const handleSnackClose = () => {
        setSnackBar({
            isOpen: false,
            message:""
        })
    }

    const updateUser = (event) => {
        event.preventDefault();
        console.log(player);

        const payload = {
            player,
            id:player.id
        }

        dispatch(editUser(payload));
        setSnackBar({
            isOpen: true,
            message: "Invalid info"
        })
        alert("Player data updated");
        navigate("/");
    }

  return (
      <div className='editContainer'>
          <Snackbar
              open={snackBar.isOpen}
              onClose={handleSnackClose}
              autoHideDuration={5000}
              message={snackBar.message}
          />
          {player?.id ? 
              <form className='editForm' onSubmit={updateUser}>
                  <Form
                      player={player}
                      handleChange={handlePlayerChange}
                  />

                  <Button variant='outlined' onClick={updateUser} className="update-btn">
                      Update
                  </Button>
              </form>
           :
              null}
    </div>
  )
}

export default Edituser