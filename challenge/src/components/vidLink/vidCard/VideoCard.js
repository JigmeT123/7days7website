import React from 'react'
import classes from './vid.module.css';
import {Typography, Card, CardActionArea, CardContent, CardMedia} from '@material-ui/core';
const VideoCard = ({url, imageURL, title, description}) => {

    return (
        <Card className={classes.card}>
            <CardActionArea className={classes.action} href={url} target="_blank">
                <CardMedia image={imageURL} className={classes.media}/>
                <h4>{title}</h4>
                <CardContent>
                    <h6>{description}</h6>
                </CardContent>
            </CardActionArea>
        </Card>
    )
};

export default VideoCard
