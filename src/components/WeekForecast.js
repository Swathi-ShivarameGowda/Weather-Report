import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { todayWeather, weather, getDateSuffix, convertDay, getWeatherIcons } from '../utils';

export default function WeekForecast({ weatherReport }) {
    let currentDate = new Date();
    let nextWeekReports = [];
    let secondDayReports = weatherReport?.properties?.timeseries.filter(d => {
        let secondDay = new Date(d.time);
        if (currentDate.getDate() + 1 === secondDay.getDate()) {
            return d;
        }
    });
    let thirdDayReports = weatherReport?.properties?.timeseries.filter(d => {
        let thirdDay = new Date(d.time);
        if (currentDate.getDate() + 2 === thirdDay.getDate()) {
            return d;
        }
    });
    let fourthDayReports = weatherReport?.properties?.timeseries.filter(d => {
        let fourthDay = new Date(d.time);
        if (currentDate.getDate() + 3 === fourthDay.getDate()) {
            return d;
        }
    });
    let fifthDayReports = weatherReport?.properties?.timeseries.filter(d => {
        let fifthDay = new Date(d.time);
        if (currentDate.getDate() + 4 === fifthDay.getDate()) {
            return d;
        }
    });
    let sixthDayReports = weatherReport?.properties?.timeseries.filter(d => {
        let sixthDay = new Date(d.time);
        if (currentDate.getDate() + 5 === sixthDay.getDate()) {
            return d;
        }
    });
    let seventhDayReports = weatherReport?.properties?.timeseries.filter(d => {
        let seventhDay = new Date(d.time);
        if (currentDate.getDate() + 6 === seventhDay.getDate()) {
            return d;
        }
    });

    
    nextWeekReports = [secondDayReports[8], thirdDayReports[8], fourthDayReports[3], fifthDayReports[1], sixthDayReports[1], seventhDayReports[1]];
   

    return (
        <div style={{
            display: 'flex'
        }}>
            {nextWeekReports && nextWeekReports.map((data, id) => {
                let symbolCode = data?.data?.next_1_hours?.summary?.symbol_code
                    ? data?.data?.next_1_hours?.summary?.symbol_code
                    : data?.data?.next_6_hours?.summary?.symbol_code;
                let temperature = Math.round(data?.data?.instant?.details?.air_temperature);
                let now = new Date(data?.time);

                return (
                    <Card style={{ margin: '0 2px' }} key={id} >
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="100"
                                image={getWeatherIcons(symbolCode)}
                                title="weather"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="body2" component="h4">
                                    {convertDay(now.getDay())} {getDateSuffix(now.getDate())}
                                </Typography>
                                <Typography gutterBottom variant="h6" component="h2">
                                    {temperature} &deg;C {weather(symbolCode)}
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

WeekForecast.propTypes = {
    weatherReport: PropTypes.object
};