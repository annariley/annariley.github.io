import React from 'react';
import './Favourite.css';
import background from '../../srcimages/favourite.jpg'
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';

export default function Favourite() {
    let url = getURL()
    return (
        <>
            <div>
                <Navbar />
                <a href={url} target="_blank" >
                    <h1 className='favourite' style={{ backgroundImage: `url(${background})` }}>click here for one of my favourite things</h1>
                </a>
            </div>
        </>
    )
}

const map1 = new Map();

map1.set(0, 'https://www.strava.com/');
map1.set(1, 'https://www.thewaychurch.ca/');
map1.set(2, 'https://www.campbarnabas.org/');
map1.set(3, 'https://vass.ca/');
map1.set(4, 'https://promisevancouver.ca/');
map1.set(5, 'https://www.practicingtheway.org/');
map1.set(6, 'https://open.spotify.com/album/2AlXF48eRaZ3vAOfx4csas?si=ArfqOPy7S_CA4z7xg4lEhw');
map1.set(7, 'https://minimalistbaker.com/');
map1.set(8, 'https://jjbeancoffee.com/');
map1.set(9, 'http://www.ucmatubc.com/');
map1.set(10, 'http://pacificspiritparksociety.org/about-the-park/pacific-spirit-park/');
map1.set(11, 'https://reddogsdogdays.org/');
map1.set(12, 'https://www.rifugiovajolet.com/eng/Default.asp');
map1.set(13, 'http://www.ubcsprouts.ca/');


const getURL = () => {
    let num = parseInt(Math.random() * 13);
    return map1.get(num)
}
