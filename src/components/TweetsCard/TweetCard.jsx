import Box from '@mui/material/Box';
import {
  BoxUserInfo,
  ButtonStyled,
  mainBoxStyles,
  cardStyles,
  bubbledIconsStyles,
  rectangleStyles,
  userPicBorderStyles,
  avatarStyles,
} from './tweetCardStyles';
import goITlogo from '../../assets/GoITlogo.png';
import bubbledIcons from '../../assets/icons.png';
import userPicBorder from '../../assets/userPicBorder.png';
import Rectangle from '../../assets/Rectangle.png';

export const TweetCard = (data) => {
  const { avatar, tweets, followers, followed, userId, setFollowed } = data;

  return (
    <Box sx={mainBoxStyles}>
      <Box sx={cardStyles}>
        <img src={goITlogo} alt='Go IT logo' />
      </Box>
      <Box sx={bubbledIconsStyles}>
        <img src={bubbledIcons} alt='bubbled Icons' />
      </Box>
      <Box
        sx={rectangleStyles}
      >
        <img src={Rectangle} alt='rectangle' />
      </Box>
      <Box
        sx={userPicBorderStyles}
      >
        <img src={userPicBorder} alt='user picture' />
        <Box
          borderRadius='25%'
          sx={avatarStyles}
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


