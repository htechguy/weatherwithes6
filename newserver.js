
import axios from 'axios';

export class Weather{
    constructor(name) {
       this.name = name;
      }
    
    get forecast(){
        return new Promise((resolve,reject)=>{
            axios.get('https://api.darksky.net/forecast/6a4bc641996966192c9f84788495fc35/39.952583,-75.165222')       // 39.952583, -75.165222
            .then((response) => {
                console.log(response.data.currently.temperature);
                console.log(response.data.daily.summary);
                resolve(response);
                // res.render('weather.hbs',{temp:response.data.currently.temperature,weather:response.data.daily.summary});
            })
            .catch(error => {
            console.log(error);
            reject(error);
            }); 
        })
    }
}
