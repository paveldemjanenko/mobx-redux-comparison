import axios from 'axios';

const fetchImages = term => {
    return async dispatch => {
        dispatch({
            type: 'EGIN_SEARCH',
            term
          });
      
          try {
            const response = await axios.get(
              "https://api.unsplash.com/search/photos",
              {
                params: {
                  client_id:
                    "0414177cd359277e26787c56c0c8a99046dc991c1f92d609383621b305bee317",
                  query: term
                }
              }
            );
            dispatch({
                type: 'DONE_SEARCH',
                images: response.data.results
            });
          } catch (error) {
            dispatch({
                type: 'ERROR_SEARCH',
            });
          }
        };
    }

  export { fetchImages };