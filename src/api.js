import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos',{
        headers: {
            Authorization: 'Client-ID v_gg6YFXlRpXEVgL_BZ-Hog3Y0qejxWetic_eOyfYvI',
        },
        params: {
            query: term,
            page: 1,
            per_page: 30,
        },

        
    });

    

    return response.data.results;
};

export default searchImages;