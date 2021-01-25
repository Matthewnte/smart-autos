import React from 'react';
import AppBar from './components/Appbar';
import BottomNav from './components/BottomNav';
import BasicInfo from './components/BasicInfo';
// import Details from './components/Details';
// import PaymentSetup from './components/PaymentSetup';

const CreateEvent = () => {
  // const [matchedRoute, setMatchedRoute] = React.useState('');

  // React.useEffect(() => {
  //   setMatchedRoute(match.path.replace('/:id', ''));
  // }, [match.path]);

  return (
    <>
      <AppBar />
      <BasicInfo />
      <BottomNav />
    </>
  );
};

export default CreateEvent;