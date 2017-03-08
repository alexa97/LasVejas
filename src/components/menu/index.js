import style from './style';
import { h, render, Component } from 'preact';

export default class Menu extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div class = { style.menu }>
                <span >

                    <div class={style.menuline}></div>
                    <div class={style.menuline}></div>
                    <div class={style.menuline}></div>

                </span>
                <div class= {style.dropdownContent}>

                    <p id="humidity">HUMIDITY</p>
                    <p id="wind">WIND</p>
                    <p id="uv">UV</p>
                    <p id="sunrise">SUNRISE</p>
                    <p id="sunset">SUNSET</p>
                    <p id="visibility">VISIBIITY</p>
                    <p id="cloudcover">CLOUD COVER</p>

                </div>
            </div>
        )
}
}
