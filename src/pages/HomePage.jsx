import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

import { NavLinkStyled } from './HomePageStyles';

const HomePage = () => {
  return (
    <Box component='main'>
      <Typography variant='h2' component='h1'>
        Welcome to tweets follow page
      </Typography>
      <Typography variant='h5' component='h2'>
        There you can see the statistic of our team popularity and follow them!
      </Typography>
      <Box sx={{display: 'flex', paddingTop: '30px', justifyContent: 'center'}}>
        <Box component='nav'>
          <NavLinkStyled to={`/tweets`} state={{ from: location }}>
            GO!
          </NavLinkStyled>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
