import '../App.css';
import { TweetsList } from '../components/TweetsList/TweetsList';

import { useParams } from 'react-router-dom';



  

const TweetsPage = () => {
  const { p } = useParams; // TODO:
  console.log('CL: ~ file: TweetsPage.jsx:12 ~ p:', p);
  return <TweetsList />;
};

export default TweetsPage;
