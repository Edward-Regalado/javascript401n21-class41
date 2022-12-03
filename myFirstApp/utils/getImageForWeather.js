const images = {
    Clear: require('../assets/clear.jpg'),
    Clouds: require('../assets/clouds.jpg'),
    Drizzle: require('../assets/drizzle.png'),
    Rain: require('../assets/rain.jpg'),
    Snow: require('../assets/snow.jpg'),
    Thunderstorm: require('../assets/thunder.jpg'),
};

export default weather => images[weather];