
import himg from './himg.png';
import './Header.css';
import { useState } from 'react';

export default function Header(){
    return(
    <header> 
        <div className='h1'>
            <div className='left'>
                <p>Discover New City</p>
                <a>a</a>
                <a>b</a>
                <a>c</a>
                <a>d</a>
            </div>

            <div className='right'>
                <a>How It Works</a>
                <a>Add Listing</a>
                <a>English</a>
            </div>
        </div>
        <div className='h2'>
            <img src={himg}></img>
            <div className='right'>
                <a>Home</a>
                <a>Explore</a>
                <a>All Listings</a>
                <a>Pricing</a>
                <a>Blog</a>
                <a>Shop</a>
                <button>SIGN IN</button>
            </div>
        </div>
        
        <div className='h3'>
            <div className='container'>
                <h1>Find the Best Places to Be</h1>
                <h3>All the top locations – from restaurants and clubs, to cinemas, galleries, and more.</h3>
                <div className='Search'>
                    <input placeholder="Keywords"></input>
                    <input></input>
                    <input></input>
                </div>
                <button className='search-places'>SEARCH PLACES</button>
                <div className='but'>
                    <a>
                        <span>Culture</span>
                    </a>
                    <a>
                        <span>Cusine</span>
                    </a>
                    <a>
                        <span>Nightlife</span>
                    </a>
                    <a>
                        <span>Loging</span>
                    </a>
                    <a>
                        <span>Shoping</span>
                    </a>
                </div>
            </div>
        </div>
    </header>
    )
}