import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../Pages/home';
import Details from '../Pages/details';
import About from '../Pages/about';

const halaman = {
    Home : { 
        screen : Home,
    },

    Details : {
        screen : Details,
    },

    About : {
        screen : About,
    },
}

const HomeStack = createStackNavigator(halaman);
export default createAppContainer(HomeStack);
