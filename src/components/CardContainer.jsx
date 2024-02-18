import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea, CardActions } from '@mui/material'

const CardContainer = ({ image, title, labImage, desc, specs, keywords }) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={image}
                    alt="image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {desc}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {specs}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <ul className='tabs'>
                    {keywords.map((k, index) => {
                        <li key={index} className='tab'>{k}</li>
                    })}
                </ul>
            </CardActions>
        </Card>
    )
}

export default CardContainer