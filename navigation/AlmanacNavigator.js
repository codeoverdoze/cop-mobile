import {createStackNavigator} from 'react-navigation';
import Almanac from "../screens/Almanac/Index";

const AlmanacStack = createStackNavigator({
    AlmanacDashboard: Almanac
}, { headerMode: "none" });

export default AlmanacStack;