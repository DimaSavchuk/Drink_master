import MyDrinksContainer from '../../components/MyDrinksContainer/MyDrinksContainer';


  useEffect(() => {
    dispatch(setSelectedRoute(location.pathname));
  }, [dispatch]);

const MyDrinksPages = () => {

  return <MyDrinksContainer />;
};

export default MyDrinksPages;
