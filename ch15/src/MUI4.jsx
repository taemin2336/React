import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'

/*
xs, extra-small: 0px
sm, small: 600px
md, medium: 900px
lg, large: 1200px
xl, extra-large: 1536px
*/

const Item = styled(Paper)(({ theme }) => {
   return {
      backgroundColor: '#fff',
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      ...theme.typography.body2,
   }
})
function MUI4() {
   return (
      <Container maxWidth="md">
         {/* container: 부모 그리드 역할 표시 */}
         <Grid container>
            {/* size는 비율 */}
            {/* <Grid size={8}>1</Grid>
            <Grid size={4}>2</Grid>
            <Grid size={4}>3</Grid>
            <Grid size={8}>4</Grid> */}

            {/* 화면사이즈가 xs일때는 6666 md이상일때는 8448 */}

            <Grid size={{ xs: 6, md: 8 }}>
               <Item>xs=6 md=8</Item>
            </Grid>
            <Grid size={{ xs: 6, md: 4 }}>
               <Item>xs=6 md=4</Item>
            </Grid>
            <Grid size={{ xs: 6, md: 4 }}>
               <Item>xs=6 md=4</Item>
            </Grid>
            <Grid size={{ xs: 6, md: 8 }}>
               <Item>xs=6 md=8</Item>
            </Grid>
         </Grid>
         콘테이너
      </Container>
   )
}

export default MUI4
