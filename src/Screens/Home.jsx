import React,{useState} from 'react'
import { Button, Snackbar } from '@mui/material'
import './Home.css'
import { useDispatch, useSelector } from 'react-redux';
import EmptyHandler from '../Components/Table/EmptyHandler';
import Addnewuser from '../Components/Table/Addnewuser';
import { addNewUser, deleteUser } from '../store/actions';
import  {useNavigate} from 'react-router-dom'
import UserTable from '../Components/Table/UserTable';

function Home() {

    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const players = useSelector(state => state?.playerOperations)
    const navigate = useNavigate();

    const [player, setPlayer] = useState({
        name: "",
        teamName: "",
        totalRuns: "",
        highestScore: "",
        centuries: "",
        dateOfUpdate:""
    })

    const handlePlayerChange = (key,value) => {
        setPlayer({
            ...player,
            [key]:value
        })
    }

    const handleModelClose = () => {
        setIsOpen(prev => !prev);
    }

    const handleSnackClose = () => {
        setSnackBar({
            isOpen: false,
            message:""
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        let playerObj = player;
        playerObj.id = new Date().getTime();

        const payload = { player };
        console.log(payload);
        dispatch(addNewUser(payload));
        setSnackBar({
            isOpen: true,
            message: "Player List updated",
        })

        setPlayer({
            name: "",
            teamName: "",
            totalRuns: "",
            highestScore: "",
            centuries: "",
            dateOfUpdate: ""
        })

        setIsOpen(prev => !prev);
    }

    const handleDeleteUser = (id) => {
        const payload = {
            id:id
        }
        console.log(payload)

        dispatch(deleteUser(payload));
        setSnackBar({
            isOpen: true,
            message: "Player deleted successfully",
        })
    }

    const handleEditUser = (id) => {
        navigate(`edit/${id}`)
    }

    const [snackBar, setSnackBar] = useState({
        isOpen: false,
        message:""
    })
  return (
      <div className='containerhome'>
          <Snackbar
              open={snackBar.isOpen}
              onClose={handleSnackClose}
              autoHideDuration={5000}
              message={snackBar.message}
          />
          <div className='home-header'>
              <div className='homeheaderText'>Players</div>
              <Button className='homeaddbutton' onClick={()=>handleModelClose()}>Enter New High score</Button>
          </div>

          <Addnewuser
              isOpen={isOpen}
              player={player}
              handleModelClose={handleModelClose}
              handleSubmit={handleSubmit}
              handlePlayerChange={handlePlayerChange}
          />

          <UserTable
              players={players}
              handleDeleteUser={handleDeleteUser}
              handleEditUser={handleEditUser}
          />

          {console.log(players.length)}

          {(!players || players.length === 0) &&
              <EmptyHandler/> 
          }
    </div>
  )
}

export default Home