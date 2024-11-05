import { Box, Grid2, Stack, Typography } from '@mui/material'
import './RachaSemanal.css'

const RachaSemanal = () => {
  return (
      <Box className="RachaSemanal">
        <Typography variant="body1" className='RachaSemanal-title'>
          Racha semanal
        </Typography>

        <Grid2 container className="RachaSemanal-content">
          <img 
            width={58}
            src={process.env.PUBLIC_URL + "/assets/rocket.svg"}
            alt="cohete de platzi" 
          />

          <img
            src={process.env.PUBLIC_URL + "/assets/rachaSemanal.svg"}
            alt="cohete de platzi"
          />
        </Grid2>

        <Stack className="RachaSemanal-progreso">
          <Typography color="initial" fontWeight={'bold'}>
            Ver progreso
          </Typography>
      </Stack>
      </Box>
  )
}

export default RachaSemanal