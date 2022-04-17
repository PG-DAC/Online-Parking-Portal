import { Carousel } from 'react-bootstrap'
import React from 'react'

const Services = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        style={{ height: "83vh" }}
                        className="d-block w-100"
                        src="https://c4.wallpaperflare.com/wallpaper/886/354/418/parking-lot-garages-architecture-cesar-bazkez-wallpaper-preview.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Huge Parking Space</h3>
                        <p>We Have Huge Parking Space And around 120 cars... </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: "83vh" }}

                        className="d-block w-100"
                        src="https://www.planradar.com/wp-content/uploads/2019/11/parking-building.jpeg.webp"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>MultiStory Parking System</h3>
                        <p>is a building designed for car, motorcycle & bicycle parking and where there are a number of floors or levels on which parking takes place. It is essentially an indoor, stacked car park.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: "83vh" }}

                        className="d-block w-100"
                        src="https://assets.losspreventionmedia.com/uploads/2019/12/Parking-lot-security-officer-1280x720.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>High Security</h3>
                        <b> <span style={{ color: "white" }}>Restrict unauthorized personnel from parking within the secure perimeter of an asset. Locate general parking in areas that present the fewest security risks to personnel.</span></b>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Services