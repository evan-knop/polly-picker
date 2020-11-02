import React, {useState, useEffect} from 'react';
import "./Cards.css";
import Button from '@material-ui/core/Button';
import axios from 'axios';

function Cards() {

    const [nextRoundImgs, setImages] = useState([])

    // Runs this once, not again. THIS IS A HOOK
    // Async function inside useEffect 

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get('/polly/cards');

            setImages(req.data);
        }

        fetchData();
    }, []);

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
                {nextRoundImgs.map((imgs) =>(

                

                <Button className="leftCard" onClick={() => {console.log(nextRoundImgs)}}> 
                    <div className="card" style={{ backgroundImage: "url(" + imgs.path + ")"}}>
                        
                    </div>  
                </Button>
                ))}

                {nextRoundImgs.map((imgs) =>(

                <Button className="rightCard" onClick={() => {console.log(imgs); alert('rightCard Wins!')}}>
                    <div className="card" style={{ backgroundImage: "url(" + imgs.path +")"}}>             
                    
                    </div>
                </Button>

                ))}
                
            </div>
        </div>
    )
}

export default Cards
