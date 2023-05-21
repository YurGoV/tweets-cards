import Box from '@mui/material/Box';
import { BoxUserInfo, ButtonStyled, tweetCardStyles } from './tweetCardStyles';
import goITlogo from '../../assets/GoITlogo.png';
import bubbledIcons from '../../assets/icons.png';
import userPicBorder from '../../assets/userPicBorder.png';
import Rectangle from '../../assets/Rectangle.png';
// import FakeAvatar from '../../assets/fakeAvatar.jpg';

// import { Button, Typography } from '@mui/material';

// import PropTypes from 'prop-types';

// export const TweetCard = ({ data }) => {
export const TweetCard = (data) => {
  // console.log('CL: ~ file: TweetCard.jsx:15 ~ data:', data);
  const { avatar, tweets, followers, followed, userId, setFollowed } = data;
  // console.log(
  //   'CL: ~ file: TweetCard.jsx:15 ~ data:',
  //   avatar,
  //   tweets,
  //   followers,
  // userId,
  // );
  return (
    <Box sx={tweetCardStyles}>
      <Box
        sx={{
          display: 'flex',
          maxWidth: '76px',
          padding: '0',
          margin: '0',
          left: '0%',
          right: '0%',
          textAlign: 'left',
          //   background: 'rgba(255, 255, 255, 0.3)',
        }}
      >
        <img src={goITlogo} alt='Go IT logo' />
      </Box>
      <Box
        sx={{
          display: 'flex',
          position: 'relative',
          bottom: '14px',
          justifyContent: 'space-around',
        }}
      >
        <img src={bubbledIcons} alt='bubbled Icons' />
      </Box>
      <Box
        sx={{
          display: 'flex',
          position: 'relative',
          top: '12px',
          justifyContent: 'space-around',
          width: '380px',
          padding: '0',
          marginLeft: '-20px',
        }}
      >
        <img src={Rectangle} alt='rectangle' />
      </Box>
      <Box
        sx={{
          display: 'flex',
          position: 'relative',
          bottom: '38px',
          justifyContent: 'space-around',
          zIndex: '1',
        }}
      >
        <img src={userPicBorder} alt='user picture' />
        <Box
          borderRadius='25%'
          sx={{
            display: 'flex',
            width: '65px',
            height: '65px',
            top: '8px',
            border: '1',
            borderRadius: '50%',
            position: 'absolute',
            overflow: 'hidden',
            zIndex: '-1',
          }}
        >
          <img src={avatar} alt='user picture' />
        </Box>
      </Box>
      <BoxUserInfo>
        <Box>
          <p>{tweets} TWEETS</p>
          {/* <p className='test'>TWEETS</p> */}
          <p>{followers} FOLLOWERS</p>
        </Box>
        <Box sx={{ paddingTop: '26px' }}>
          <ButtonStyled
            onClick={() => {
              setFollowed({ userId, followed });
            }}
            followed={followed.toString()}
            disableFocusRipple
            variant='contained'
            size='medium'
          >
            {followed ? 'FOLLOWING' : 'FOLLOW'}
          </ButtonStyled>
        </Box>
      </BoxUserInfo>
    </Box>
  );
};

// ContactsEl.propTypes = {
//   data: PropTypes.array,
// };
