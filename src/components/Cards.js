import React from 'react';
import "./Cards.css";
import Button from '@material-ui/core/Button';

function Cards() {
    return (
        <div className="pollyCards">
            <div className = "pollyCards__cardContainer">
                

                //Button onClick: 
                // 1. Clicked item moved into new "Next Round" collection of photos
                // 2. Two new pictures to replace the old ones.
                <Button className="leftCard" onClick={() => {alert('leftCard Wins!')}}> 
                    <div className="card">
                        
                    </div>  
                </Button>

                <Button className="rightCard" onClick={() => {alert('rightCard Wins!')}}>
                    <div className="card">                
                    
                    </div>
                </Button>
            </div>
        </div>
    )
}

export default Cards
