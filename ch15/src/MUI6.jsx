import AppleIcon from '@mui/icons-material/Apple'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import AlarmIcon from '@mui/icons-material/Alarm'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

function MUI6() {
   return (
      <div>
         <AppleIcon />
         <IconButton aria-label="left">
            <ArrowCircleLeftIcon />
         </IconButton>
         <IconButton aria-label="right">
            <ArrowCircleRightIcon />
         </IconButton>
         <IconButton color="secondary" aria-label="left2">
            <ArrowBackIosNewIcon />
         </IconButton>
         <IconButton color="primary" aria-label="right2">
            <ArrowForwardIosIcon />
         </IconButton>
         <AppleIcon />
      </div>
   )
}

export default MUI6
