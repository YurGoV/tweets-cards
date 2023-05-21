import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { TweetCard } from '../TweetsCard/TweetCard';
import { fetchUsers } from '../../utils/fetchUsers';
import { updateUserFollow } from '../../utils/updateUserFollow';

export const TweetsList = () => {
  const [users, setUsers] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [newFollowed, setFollowed] = useState(null);

  useEffect(() => {
    fetchUsers(page, setUsers, setTotalPages);
  }, [page]);

  useEffect(() => {
    if (newFollowed) {
      const { userId, followed } = newFollowed;

      const index = users.findIndex((user) => user._id === userId);
      const userFromState = users[index];

      if (userFromState && userFromState.followed === followed) {
        updateUserFollow({
          userId,
          followed,
          users,
          setUsers,
        });
      }
    }
  }, [users, newFollowed]);

  if (!users) {
    return <div>...loading</div>;
  }

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

