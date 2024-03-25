import React from 'react'

const BlogPost = () => {
    return (
        <div className='post'>
            <div className='image'>
                <img src='https://blogs.nasa.gov/spacestation/wp-content/uploads/sites/240/2024/03/53497239715_0372aabc26_o-1024x681.jpg' alt='bgImage' />
            </div>
            <div className='texts'>
                <h1>Three Crew Members Launching to Station Aboard Soyuz Spacecraft Live on NASA TV</h1>
                <p className='info'>
                    <a className='author' href='/'>Maitulya Vaghela</a>
                    <time>25-03-2024 3:40 PM</time>
                </p>
                <p className='summary'>NASA coverage now is underway for the launch of a crewed Soyuz spacecraft to the International Space Station with NASA astronaut Tracy C. Dyson, Roscosmos cosmonaut Oleg Novitskiy, and spaceflight participant Marina Vasilevskaya of Belarus.
                </p>
            </div>
        </div>
    )
}

export default BlogPost