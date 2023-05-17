import React from 'react'
import Logo from '../images/Logo.png';
import './navstyle.scss';
import {AiOutlineSearch} from 'react-icons/ai';

export default function NavBar() {
    return (
        <div className='nv'>
            <div className='nv1'>
                <div className='nv11'>
                    <div className='nv111'>
                        <img src={Logo} alt="No" />
                    </div>
                    <div className='nv112'>
                        <select>
                            <option>Courses</option>
                        </select>
                    </div>
                    <div className='nv112'>
                        <select>
                            <option>Programs</option>
                        </select>
                    </div>
                </div>
                <div className='nv12'>
                    <div className='nv121'><AiOutlineSearch/></div>
                    <div className='nv122'>Login</div>
                    <div className='nv123'>
                        <button>JOIN NOW</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
