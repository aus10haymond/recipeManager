import axios from "axios"
// const APIKEY = process.env.FOOD_DATA_APIKEY;
const APIKEY = "vw219mUEcz9Pk54s1NFFPLqtqOjmP6OmI0MMga0t"
//vw219mUEcz9Pk54s1NFFPLqtqOjmP6OmI0MMga0t

export default {
    getIngredients: function(query){
        return axios.get(`https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${APIKEY}&query=${query}`)
    },
    saveIngredients: function(data){
        return axios.post("/api/submit/many", data);
    },
    getSavedIngredients: function(){
        return axios.get("/api/all");
    }
}