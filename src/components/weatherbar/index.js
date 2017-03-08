import { h, render, Component } from 'preact';
import style from './style';

export default class Weatherbar extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div class = {style.todayWeather}>
                <div class="humidity">
                    <p>HUMIDITY: </p>
                </div>
                <div class="wind">
                    <p>WIND: </p>
                </div>
                <div class="uv">
                    <p>UV: </p>
                </div>
                <div>
                    <p class="sunrise">SUNRISE: </p>
                    <p class="sunset">SUNSET: </p>
                </div>
                <div class="visibility">
                    <p>VISIBILITY: </p>
                </div>
                <div class="cloudcover">
                    <p>CLOUD COVER: </p>
                </div>
                <div class = {style.sData}>
                    <p class="humidity">30%</p>
                    <p class="wind">5 mi/h</p>
                    <p class="uv">5</p>
                    <p class="sunrise">7:40</p>
                    <p class="sunset">17:40</p>
                    <p class="visibility">6 mi</p>
                    <p class="cloudcover">70%</p>
                </div>
            </div>
        )
    }
}
