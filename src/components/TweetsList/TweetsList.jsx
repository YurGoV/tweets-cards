// import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import { Avatar } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

// import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import axios from 'axios';

import { tweetsListStyles } from './TweetsListStyles';

import { Typography } from '@mui/material';
import { TweetCard } from '../TweetsCard/TweetCard';
import { fetchUsers } from '../../utils/fetchUsers';
import { updateUserFollow } from '../../utils/updateUserFollow';

// export const TweetsList = ({ tweets }) => {
export const TweetsList = () => {
  const [users, setUsers] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [newFollowed, setFollowed] = useState(null);

  // const location = useLocation();
  useEffect(() => {
    // console.log('Mounting phase: same when componentDidMount runs');
    fetchUsers(page, setUsers, setTotalPages);
  }, [page]);

  useEffect(() => {
    if (newFollowed) {
      // console.log('CL: ~ file: TweetsList.jsx:34 ~ newFollowed:', newFollowed);
      const { userId, followed } = newFollowed;

      const index = users.findIndex((user) => user._id === userId);
      const userFromState = users[index];
      // console.log('CL: ~ file: TweetsList.jsx:39 ~ userFromState:', userFromState);

      if (userFromState && userFromState.followed === followed) {
        updateUserFollow({
          userId,
          followed,
          users,
          setUsers,
        });
      }
      // console.log(
      //   'CL: ~ file: TweetsList.jsx:41 ~ userFromState:',
      //   userFromState
      // );
      // console.log('CL: ~ file: TweetsList.jsx:41 ~ updatedUsers:', updatedUsers);

      // console.log('~userId, followed TweetsList.jsx [40]:', userId, followed);
      // const updatedUsers = updateUserFollow({
      //   userId,
      //   followed,
      //   users,
      //   setUsers,
      // });
      // console.log('CL: ~ file: TweetsList.jsx:38 ~ updatedUsers:', updatedUsers);
    }
  }, [users, newFollowed]);

  if (!users) {
    return <div>TTTT</div>;
  }
  // console.log('~tweets TweetsList.jsx [48]:', tweets);
  // console.log(users);
  // return <div>UUU</div>;

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {users.map(({ _id, avatar, tweets, followers, followed }) => (
            <Grid xs={2} sm={4} md={4} key={_id}>
              <TweetCard
                avatar={avatar}
                tweets={tweets}
                followers={followers}
                followed={followed}
                userId={_id}
                setFollowed={setFollowed}
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
