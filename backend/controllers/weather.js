const { WeatherService } = require('m3o/weather');
require('dotenv').config();

const weatherService = new WeatherService(process.env.M3O_API_TOKEN);

exports.getWeather = async (req, res, next) => {
    try {
        const forecast = await weatherService.forecast({
            days: req.body.days ,
            location: req.body.city
        });
        return res.status(200).json(forecast);
    } catch (e) {
        return res.status(400).json(e);
    }
}