import axios from 'axios';
import { API_KEY as rapidApiKey} from '@env';

const baseURL = 'https://exercisedb.p.rapidapi.com';

const apiCall = async (url, params) => {
    try{
        const options = {
            method: 'GET',
            url,
            params,
            headers:{
                'x-rapidapi-key': rapidApiKey,
                'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
            }
        };
        const response = await axios.request(options);
        return response.data;

    }catch(err){
        console.log('error: ', err.message);
    }
}

const fetchExercisesByBodypart = async (bodyPart) =>{
    let data = await apiCall(baseURL+`/exercises/bodyPart/${bodyPart}`);
    return data;
}

export default fetchExercisesByBodypart;