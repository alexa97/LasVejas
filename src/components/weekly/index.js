import { h, render, Component } from 'preact';
import style from './style';
export default class Weekly extends Component {
    constructor(props){
        super(props);
    }
    render (){
        return (
            <div class = {style.weekly}>
                <table>
                    <tr>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                    </tr>
                    <tr>
                        <td>Rainy</td>
                    </tr>
                </table>
            </div>
        )
    }
}
