import React, {useState} from 'react';
import "./Cards.css";
import Button from '@material-ui/core/Button';
import img1 from '../images/60225547512__DC211E24-228F-44FA-9917-EAE11856F8FC.jpeg';
import img2 from '../images/IMG_0039.jpeg';
import img3 from '../images/IMG_0128.jpeg';
import img4 from '../images/IMG_0203.jpeg';
import img5 from '../images/IMG_0268.jpeg';
import img6 from '../images/IMG_0510.jpeg';
import img7 from '../images/IMG_2969.jpeg';
import img8 from '../images/IMG_2988.jpeg';



function Cards() {

    const images = [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        img8
    ];

    const [randomNumber, setRandomNumber] = useState(0)


    const generateRandomNumber = () => {
        const randomNumber = Math.floor(Math.random() * images.length);
        setRandomNumber(randomNumber)
    }

    return (
        <div className="pollyCards">
            <div className = "pollyCards__cardContainer">
                

                {/* Button onClick: 
                // 1. Clicked item moved into new "Next Round" collection of photos
                // 2. Two new pictures to replace the old ones. */}

                {/* TO GET A RANDOM DOCUMENT FROM MONGO DB - use $sample and set size: 1
                https://stackoverflow.com/questions/2824157/random-record-from-mongodb

                db.mycoll.aggregate([{ $sample: { size: 1 } }])
                */}
                {/* {nextRoundImgs.map((imgs) =>( */}

                <Button className="leftCard" onClick={generateRandomNumber}> 
                    <div className="card"  style={{ backgroundImage: `url(${images[randomNumber]})` }}>
                    </div>  
                </Button>

                <Button className="rightCard" onClick={generateRandomNumber}> 
                    <div className="card"  style={{ backgroundImage: `url(${images[randomNumber]})` }}>
                    </div>  
                </Button>
                
            </div>
        </div>
    )
}

export default Cards
