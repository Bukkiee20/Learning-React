import React from 'react';

function Card(props){
    return(
        <div className='image-div'> 
          <h2>{props.name}</h2>
          <img 
              src={props.img}
              alt="model1"
          />
          <p>{props.tel}</p>
          <p>{props.email}</p>
        </div>

    );
}

export default Card;