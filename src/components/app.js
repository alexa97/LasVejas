import { h, Component } from 'preact';
import { Router } from 'preact-router';
import Menu from './menu';
import Greeting from './greeting';
import Weatherbar from './weatherbar';
import Home from './home';
import Searchbox from './searchbox';
import Weekly from './weekly';
import SunShade from './sunshade';
import Location from './location';
import Settings from './settings';

export default class App extends Component {
    /** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */

    componentWillMount() {
        const script = document.createElement("script");

        script.src = "https://code.jquery.com/jquery-2.2.4.min.js";
        script.async = true;

        script.addEventListener('load', function (e) {
            $(function(){
                console.log('content loaded');

                $('#humidity').click(function(){
                    toggleVisibility('.humidity');
                });
                $('#wind').click(function(){
                    toggleVisibility('.wind');
                });
                $('#uv').click(function(){
                    toggleVisibility('.uv');
                });
                $('#sunrise').click(function(){
                    toggleVisibility('.sunrise');
                });
                $('#sunset').click(function(){
                    toggleVisibility('.sunset');
                });
                $('#visibility').click(function(){
                    toggleVisibility('.visibility');
                });
                $('#cloudcover').click(function(){
                    toggleVisibility('.cloudcover');
                });

                function toggleVisibility(cName){
                    if (!$(cName).hasClass('hidden')) {
                        $(cName).addClass('hidden');
                        $(cName).css('visibility','hidden');
                    }
                    else {
                        $(cName).removeClass('hidden');
                        $(cName).css('visibility','visible');
                    }
                }


                addColorDropdown();

                function addColorDropdown(){
                    var colors = ['#3C91E2', '#ffea61', '#f5d2d3', '#f04900', '#10c390', '#ffc0cb'];
                    var dropdown = '<div style="margin-left:-230px;"><label style="color: black; font-weight: bold;">Background Color</label><select style="background-color:#3C91E2; width:50px;" id="color-pic">';
                    for (var i = 0; i < colors.length; i++) {
                        dropdown += '<option class="color-options" value="'+colors[i]+'" style="background-color:'+colors[i]+'"></option>'
                    }

                    dropdown += '</select></div>';
                    $('#app ul').after(dropdown);

                    setTimeout(function(){
                        $('#color-pic').change(function(){
                            $('#app>div>div>div').css('background-color',$(this).val());
                            $('#color-pic').css('background-color',$(this).val());
                        });
                    },100);
                }

            });
        }, false);


        document.body.appendChild(script);
    }

    handleRoute = e => {
        this.currentUrl = e.url;
};

render() {
    return (
        <div id="app">

            <Router onChange={this.handleRoute}>
                <Home path="/" />
                <SunShade path="/sunshade/" />
                <Location path="/location/" />
                <Settings path="/settings/" />
                <Menu path="/menu/" />
                <Greeting path="/greeting/" />
                <Weatherbar path="/weatherbar/" />
                <Searchbox path="/searchbox/" />
            </Router>
        </div>
    );
}
}
