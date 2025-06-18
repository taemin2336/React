// 커스터마이징한 CSS 적용방법1 : 외부 스타일시트 사용

import './MUI2.css'
import Button from '@mui/material/Button'

function MUI2() {
   return (
      <>
         <Button variant="text" className="btn1">
            Text
         </Button>
         <Button variant="contained" className="btn2">
            Contained
         </Button>
         <Button variant="outlined" className="btn3">
            Outlined
         </Button>
      </>
   )
}

export default MUI2
