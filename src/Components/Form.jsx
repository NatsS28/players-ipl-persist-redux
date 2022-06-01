import React from 'react'
import './Table/Addnewuser.css'

const Form = ({
    handleChange,
    player,
 }) => {
    return (
        <>
            <div className='addInput'>
                <label className='userLabel'>
                    Name
                </label>
                <input
                    value={player.name}
                    placeholder={"Eg. Nats"}
                    className={"userInputBox"}
                    type="text"
                    autoFocus={true}
                    maxLength={30}
                    minLength={3}
                    onChange={(e) => handleChange("name", e.target.value)}
                    required={true}
                />
            </div>
            <div className='addInput'>
                <label className='userLabel'>
                    Team Name
                </label>
                <input
                    value={player.teamName}
                    placeholder={"Eg. RCB"}
                    className={"userInputBox"}
                    type="text"
                    maxLength={30}
                    minLength={3}
                    onChange={(e) => handleChange("teamName", e.target.value)}
                    required={true}
                />
            </div>
            <div className='addInput'>
                <label className='userLabel'>
                    Runs scored
                </label>
                <input
                    value={player.totalRuns}
                    className={"userInputBox"}
                    type="text"
                    autoFocus={true}
                    maxLength={30}
                    minLength={3}
                    onChange={(e) => handleChange("totalRuns", e.target.value)}
                    required={true}
                />
            </div>
            <div className='addInput'>
                <label className='userLabel'>
                    High score
                </label>
                <input
                    value={player.highestScore}
                    className={"userInputBox"}
                    type="text"
                    autoFocus={true}
                    maxLength={30}
                    minLength={3}
                    onChange={(e) => handleChange("highestScore", e.target.value)}
                    required={true}
                />
            </div>
            <div className='addInput'>
                <label className='userLabel'>
                    centuries
                </label>
                <input
                    value={player.centuries}
                    className={"userInputBox"}
                    type="number"
                    autoFocus={true}
                    maxLength={2}
                    minLength={1}
                    onChange={(e) => handleChange("centuries", e.target.value)}
                    required={true}
                />
            </div>
            <div className='addInput'>
                <label className='userLabel'>
                    Date of last update
                </label>
                <input
                    value={player.dateOfUpdate}
                    className={"userInputBox"}
                    type="date"
                    max={new Date().toISOString().slice(0, -14)}
                    onChange={(e) => handleChange("dateOfUpdate", e.target.value)}
                    required={true}
                />
            </div>
        </>        
    )
}

export default Form