import { Dimensions, PixelRatio } from 'react-native';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

const widthPercentageToDP = (widthPercent) => {
    const elemWidth = parseFloat(widthPercent);
    return PixelRatio.roundToNearestPixel(width * elemWidth / 100);
};

const heightPercentageToDP = (heightPercent) => {
    const elemHeight = parseFloat(heightPercent);
    return PixelRatio.roundToNearestPixel(height * elemHeight / 100);
};

export default {
    paddingHorizontal: widthPercentageToDP('6%'),
    window: {
        width,
        height,
    },
    isSmallDevice: width < 375,
    heightPercentageToDP,
    widthPercentageToDP,
};
