// 커스터마이징 한 CSS 적용방법 3 :sx props 사용 (JSON 객체 형태로 사용)

import Box from '@mui/material/Box'

function MUI2_3() {
   // sx props도 인라인 스타일과 유사하게 적용
   return (
      <Box
         sx={{
            width: '100px',
            height: '100px',
            backgroundColor: 'warning.light',
            '&:hover': {
               backgroundColor: 'red',
            },
         }}
      >
         Hover to change color{' '}
      </Box>
   )
}

export default MUI2_3
