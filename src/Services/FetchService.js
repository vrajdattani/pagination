import Axios from 'axios';
export const FetchService = (id) =>{
    return Axios.get(`https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${id}`);
}