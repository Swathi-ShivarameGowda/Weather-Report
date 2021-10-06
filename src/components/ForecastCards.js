import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { todayWeather, weather, getWeatherIcons } from '../utils';


export default function ForecastCards({ weatherReport }) {
    let nextSixReports = [];
    if (weatherReport?.properties?.timeseries.length >= 6) {
        nextSixReports = weatherReport?.properties?.timeseries.slice(0, 6);
    } else {
        nextSixReports = weatherReport?.properties?.timeseries;
    }
    
    
    return (
        <div style={{
            display: 'flex',
            padding: '0 1%'
        }}>
            {nextSixReports && nextSixReports.map((data, id) => {
                let symbolCode = data?.data?.next_1_hours?.summary?.symbol_code;
                let temperature = Math.round(data?.data?.instant?.details?.air_temperature);
                let now = new Date(data?.time);
                let time = now.getHours();
                return (
                    <Card style={{ margin: '0 2px' }} key={id}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="100"
                                image={getWeatherIcons(symbolCode)}
                                title="weather"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="body2" component="h4">
                                    {time}:00 {weather(symbolCode)}
                                </Typography>
                                <Typography gutterBottom variant="h6" component="h2">
                                    {temperature} &deg;C
                            </Typography>
                                {todayWeather(symbolCode)}
                            </CardContent>
                        </CardActionArea>
                    </Card>
                );
            })}
        </div>
    );
}

ForecastCards.propTypes = {
    weatherReport: PropTypes.object
};