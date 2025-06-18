import { Button } from '@mui/material'
import { useState } from 'react'

function MUI7() {
   const [color, setColor] = useState('primary')

   const handelClick = () => {
      setColor((prevState) => {
         console.log(prevState)
         return prevState === 'primary' ? 'secondary' : 'primary'
      })
   }
   return (
      <>
         <Button variant="contained" color={color} onClick={handelClick}>
            토글버튼
         </Button>
      </>
   )
}

export default MUI7
