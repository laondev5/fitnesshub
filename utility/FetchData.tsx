
export const exerciseOption ={
    method: 'GET',
    
    headers: {
      'X-RapidAPI-Key': '56fcc8db87msh8f887bedf67343ep1f9521jsn07fa31d19ee5',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  export const youtubeOptions = {
    method: 'GET',
    
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };

export const fetchData = async (url : string, option : any) =>{
    const response = await fetch(url,option);
    const data = await response.json();

    return data;
}