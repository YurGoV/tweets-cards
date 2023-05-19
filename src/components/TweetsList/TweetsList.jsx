// import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import { Avatar } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
// import { Item, MovieBox, NavLinkStyled } from './MoviesList.styled';
// import genericFilmPic from '../../img/film.jpg';
// import PropTypes, { arrayOf } from 'prop-types';

// import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import axios from 'axios';

import { tweetsListStyles } from './TweetsListStyles';

import { Typography } from '@mui/material';
import { TweetCard } from '../TweetsCard/TweetCard';
import { fetchUsers } from '../../../utils/fetchUsers';

// export const TweetsList = ({ tweets }) => {
export const TweetsList = () => {
  const [tweets, setTweets] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  // const location = useLocation();
  useEffect(() => {
    // console.log('Mounting phase: same when componentDidMount runs');
    fetchUsers(page, setTweets, setTotalPages);
  }, [page]);

  // console.log('CL: ~ file: TweetsList.jsx:21 ~ ttt:', users);

  if (!tweets) {
    return <div>TTTT</div>;
  }
  // console.log('~tweets TweetsList.jsx [48]:', tweets);
  console.log(tweets);
  // return <div>UUU</div>;

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {tweets.map(({ _id, user, avatar, tweets, followers }) => (
            <Grid xs={2} sm={4} md={4} key={_id}>
              <TweetCard
                avatar={avatar}
                tweets={tweets}
                followers={followers}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box
        sx={{ display: 'flex', paddingTop: '50px', justifyContent: 'center' }}
      >
        <Stack spacing={2}>
          <Pagination
            count={totalPages}
            onChange={(e, value) => setPage(value)}
            color='secondary'
          />
        </Stack>
      </Box>
    </>
  );
};

// MoviesList.propTypes = {
//   movies: arrayOf(PropTypes.object),
// };

/* 
export const TweetsList = () => {
  const filteredContacts = 's';

  if (filteredContacts.length > 0) {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          border: '1px solid green',
        }}
      >
        <Box>
          <p>The tweets is presents</p>
        </Box>
        <Box sx={tweetsListStyles}>
          <TweetCard />
        </Box>
      </Box>
    );
  }
  return (
    <Box sx={tweetsListStyles}>
      <Typography component='h2'>There are no Tweets, sorry</Typography>
    </Box>
  );
};
 */
