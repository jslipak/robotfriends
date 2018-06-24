import React from 'react';

const  Card = ({id,name,email}) => {
    return( 
        <div className='bg-light-red dib br3 pa3 ma2 grow bw2 shdow-5 tc'>
           <img src={`https://robohash.org/${email}${id}${name}?200x200`} alt="Pḧoto Robot" />
           <div>
                <h2>{name}</h2>
                <p>{email}</p>
           </div>
        </div>
    )
};

export default Card;
