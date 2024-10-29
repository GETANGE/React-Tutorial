import axios from 'axios'
export  async function foodCategories(){
    let url = 'https://www.themealdb.com/api/json/v1/1/categories.php'

    let response =await axios.get(url);
    console.log(response.data);

    return response.data;
}

export async function randomFood(){
    let url = 'https://www.themealdb.com/api/json/v1/1/random.php'

    let response =await axios.get(url);
    console.log(response.data)

    return response.data;
}