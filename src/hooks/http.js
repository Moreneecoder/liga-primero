import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshTable } from '../actions';

const useHttp = (url, dependencies) => {
  const dispatch = useDispatch();
  //   'https://api-football-v1.p.rapidapi.com/v3/standings?season=2021&league=140'
  useEffect(() => {
    fetch(url, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
        'x-rapidapi-key': 'ac39b316e0msh7d2b82002789670p10a6e9jsna343b2d68ca3',
      },
      mode: 'cors',
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(refreshTable(data.response));
      })
      .catch((err) => {
        console.error(err);
      });
    console.log('Standings Effects');
  }, dependencies);
};

export default useHttp;
