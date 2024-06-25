import './Footer.css'
import logo from './himg.png'

export default function Footer() {
    return (
        <footer>
            <div className='fon flex-between'>
                <ul className='container'>
                    <li><a>1a</a><a>2a</a><a>3a</a><a>4a</a><a>5a</a></li>
                    <li><img src={logo}></img></li>
                    <li><div className='search'><i>o</i><input placeholder="Search"></input></div></li>
                </ul>
            </div>
            <div className='fon2'>© 2016 <a>Qode Interactive</a>, All Rights Reserved</div>
        </footer>
    )
}