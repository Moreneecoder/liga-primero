import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import env from 'react-dotenv';
import { refreshTable } from '../actions';

const useHttp = (url, dependencies) => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(url, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
        'x-rapidapi-key': env.API_KEY,
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
  }, dependencies);
};

export default useHttp;
