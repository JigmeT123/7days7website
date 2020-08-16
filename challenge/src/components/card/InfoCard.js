import React from 'react'
import styles from './infocard.module.css';
import Card from "react-bootstrap/Card";
function InfoCard({title, img, info}) {
    return (
        <Card className={styles.infoCard}>
            <Card.Img variant="top" src={img}/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {info}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default InfoCard
