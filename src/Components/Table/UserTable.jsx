import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import  TableContainer  from '@mui/material/TableContainer'
import React from 'react'
import './UserTable.css'

function UserTable({ players, handleDeleteUser, handleEditUser}) {
  return (
      <TableContainer>
          <Table>
              <TableHead>
                  <TableRow>
                      <TableCell className='userTableColumnName'>Id</TableCell>
                      <TableCell className='userTableColumnName'>Name</TableCell>
                      <TableCell className='userTableColumnName'>Team Name</TableCell>
                      <TableCell className='userTableColumnName'>Total Runs</TableCell>
                      <TableCell className='userTableColumnName'>Hishest Score</TableCell>
                      <TableCell className='userTableColumnName'>Centuries</TableCell>
                      <TableCell className='userTableColumnName'>Date of Update</TableCell>
                  </TableRow>
              </TableHead>

              <TableBody>
                  {players.map((player) => (
                      <TableRow
                          key={player.id}
                          sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                              "&:nth-of-type(odd)": {
                                  backgroundColor: "#F5F5F5",
                              },
                          }

                          }

                      >
                          <TableCell className='userFieldValue' scope='row' component="th">
                              {player.id}
                          </TableCell>
                          <TableCell className='userFieldValue' >
                              {player.name}
                          </TableCell>
                          <TableCell className='userFieldValue' >
                              {player.teamName}
                          </TableCell >
                          <TableCell className='userFieldValue' >
                              {player.totalRuns}
                          </TableCell>
                          <TableCell className='userFieldValue' >
                              {player.highestScore}
                          </TableCell>
                          <TableCell className='userFieldValue' >
                              {player.centuries}
                          </TableCell>
                          <TableCell className='userFieldValue' >
                              {player.dateOfUpdate}
                          </TableCell>
                          <TableCell align='left'
                              style={{
                                  display: 'flex',
                                  flexDirection: "row",
                                  justifyContent:'space-between'
                              }}
                          >
                              <Button variant='outlined' color='error' onClick={() => handleEditUser(player.id)}>
                                  Edit
                              </Button>
                              <Button variant='outlined' color='error' onClick={() => handleDeleteUser(player.id)}>
                                  Delete
                              </Button>
                          </TableCell>
                          
                          
                      </TableRow>
                  ))}
              </TableBody>
          </Table>
    </TableContainer>
  )
}

export default UserTable