import './Main.css'
//import ludi from './01.png'
import rec from './rec.jpg'
import cub1 from './cub1.jpg'
import cub2 from './cub2.jpg'
import cub3 from './cub3.jpg'
import cub4 from './cub4.jpg'
import cub5 from './cub5.jpg'
import cub from './cub.jpg'
import m3 from './m3.jpg'
import m61 from './m61.jpg'
import m62 from './m62.jpg'
import m63 from './m63.jpg'
import Switch from './switch.jsx'
import { useState } from 'react';

export default function Main(){
    return(
        <div className='main'>
            <div className='container m1'>
                <h1>Most Popular Locations</h1>
                <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                </p>
                <div className='m1-bl'>
                    <div className='m1-bl-rec'>
                        <img src={rec}></img>
                        <a>The Eiffel Tower</a>
                    </div>
                    <div className='m1-bl-cub'>
                    <img src={cub1}></img>
                        <a>Gothic</a>
                    </div>
                    <div className='m1-bl-cub'>
                        <img src={cub2}></img>
                        <a>Les Corts</a>
                    </div>
                </div>
                <div className='m1-bl'>
                    <div className='m1-bl-cub'>
                        <img src={cub3}></img>
                        <a>Gracia</a>
                    </div>
                    <div className='m1-bl-cub e'>
                        <img src={cub4}></img>
                        <a>The fresh Buzz</a>
                    </div>
                    <div className='m1-bl-cub'>
                        <img src={cub5}></img>
                        <a>El Raval</a>   
                    </div>
                    <div className='m1-bl-cub e'>
                        <img src={cub}></img>
                        <a>Horse & Cromn</a>
                    </div>
                </div>
            </div>
            <div className='banner1'>
                <div className='container m2'>
                    <h1>Quick and Easy Search</h1>
                    <ul>
                        <li>
                            <span>
                                <h1>1.</h1>
                                <div>
                                    <h3>Choose a Category</h3>
                                    <p>Sed ut perspiciatis unde omnis iste</p>
                                </div>
                            </span>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                            </p>
                        </li>
                        <li>
                            <span>
                                <h1>2.</h1>
                                <div>
                                    <h3>Choose a Category</h3>
                                    <p>Sed ut perspiciatis unde omnis iste</p>
                                </div>
                            </span>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                            </p>
                        </li>
                        <li>
                            <span>
                                <h1>3.</h1>
                                <div>
                                    <h3>Choose a Category</h3>
                                    <p>Sed ut perspiciatis unde omnis iste</p>
                                </div>
                            </span>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='container m3'>
                <h1>Quick and Easy Search</h1>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                <ul>
                    <li>
                        <img src={m3}></img>
                        <div className='name'><a>Blue Jeans</a><i></i></div>
                        <span>Avinguda del Marquès de l'Argentera, 15, 08003 Barcelona, Spain</span>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem atium doloremque laua iste natus error sit unde doloremque.</p>
                        <div className='otz'> B / 0 00000</div>
                    </li>
                    <li>
                        <img src={m3}></img>
                        <div className='name'><a>Blue Jeans</a><i></i></div>
                        <span>Avinguda del Marquès de l'Argentera, 15, 08003 Barcelona, Spain</span>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem atium doloremque laua iste natus error sit unde doloremque.</p>
                        <div className='otz'> B / 0 00000</div>
                    </li>
                    <li>
                        <img src={m3}></img>
                        <div className='name'><a>Blue Jeans</a><i></i></div>
                        <span>Avinguda del Marquès de l'Argentera, 15, 08003 Barcelona, Spain</span>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem atium doloremque laua iste natus error sit unde doloremque.</p>
                        <div className='otz'> B / 0 00000</div>
                    </li>
                </ul>
            </div>
            <div className='container'>
                <h1>What Our Clients Say</h1>
                <Switch></Switch>
            </div>
            <div className='banner2'>
                <div className='container m4'>
                    <h1>Most Popular Locations</h1>
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                    </p>
                    <div>
                        <button>SEE MORE</button>
                        <button>GO NOW</button>
                    </div>
                </div>
            </div>
            <div className='container m5'>
                <ul>
                    <li>
                        <i></i>
                        <span>
                            <h4>
                                Available All the Time and Everywhere
                            </h4>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                            </p>
                        </span>
                    </li>
                    <li>
                        <i></i>
                        <span>
                            <h4>
                                Thousands of Places Around the World
                            </h4>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                            </p>
                        </span>
                    </li>
                    <li>
                        <i></i>
                        <span>
                            <h4>
                                Available All the Time and Everywhere
                            </h4>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                            </p>
                        </span>
                    </li>
                    <li>
                        <i></i>
                        <span>
                            <h4>
                                Tons of Great Offers Every Day
                            </h4>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                            </p>
                        </span>
                    </li>
                </ul>
            </div>
            <div className='container m6'>
                <h1>Share Your Experience</h1>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                <ul>
                    <li>
                        <img src={m61}></img>
                        <a>Traveling</a>
                        <h2>Tips for Top Quality Pics</h2>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem. Proin gravida...</p>
                        <span>March 4, 2016 <a>by Jessica Moor</a></span>
                    </li>
                    <li>
                        <img src={m62}></img>
                        <a>Traveling</a>
                        <h2>Tips for Top Quality Pics</h2>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem. Proin gravida...</p>
                        <span>March 4, 2016 <a>by Jessica Moor</a></span>
                    </li>
                    <li>
                        <img src={m63}></img>
                        <a>Traveling</a>
                        <h2>Tips for Top Quality Pics</h2>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem. Proin gravida...</p>
                        <span>March 4, 2016 <a>by Jessica Moor</a></span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
