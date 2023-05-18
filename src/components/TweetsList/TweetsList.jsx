import { tweetsListStyles } from './TweetsListStyles';

import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { TweetCard } from '../TweetsCard/TweetCard';

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
