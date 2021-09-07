import React from 'react'
import Item from './Item';

const Items = ({ sushi }) => {
    return (
        <>
            {sushi.map((sushi) => (
                <Item
                    key={sushi.id}
                    name={sushi.name}
                    description={sushi.description}
                    labels={sushi.labels}
                    price={sushi.price}
                    imageUrl={sushi.imageUrl}
                />
            ))}
        </>
    )
}

export default Items;