import React from 'react';

const Title = ({children}) => {
    return (
        <div>
            <h2 className='text-5xl text-black font-bold'>{children}</h2>
        </div>
    );
};

export default Title;