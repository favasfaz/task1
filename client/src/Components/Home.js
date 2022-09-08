import { Grid,Button } from '@mui/material'
import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'

function Home() {
    const navigate = useNavigate()
    useEffect(()=>{
       const token = localStorage.getItem('userToken')
       if(!token){
        navigate('/')
       }
    })
   const handlePush =() =>{
    navigate('/deteilsPage')
   }
  return (
   <Grid container justifyContent='center'>
      <Button
      onClick={handlePush}
          sx={{ marginTop: "20px", marginBottom: "10px" }}
        //   onClick={() => setOpen(true)}
          variant="contained"
          color="primary"
        >
          Add Deteils
        </Button>
   </Grid>
  )
}

export default Home