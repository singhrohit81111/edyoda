import React from 'react';
import { BsClock } from 'react-icons/bs';
import { MdLiveTv, MdOutlineSchool } from 'react-icons/md';
import { TbBook, TbBan } from 'react-icons/tb';
import Rcontenet from './Rcontenet';
import './contentstyle.scss';

export default function Content() {
    return (
        <div className="content">
            <div className="c1">
                <div className='c11'>
                    <div className='c111'>Access curated courses worth Rs. <del>18500</del> at just <span>Rs. 99</span> per year!</div>
                    <div className='c112'>
                        <div className='c1121'>
                            <div className='s1'><TbBook className='tia' /></div>
                            <div className='s2'><span className='s3'>100+</span> Job relevant courses</div>
                        </div>
                        <div className='c1121'>
                            <div className='s1'><BsClock className='tia' /></div>
                            <div className='s2'><span className='s3'>20,000+</span> Hours of content</div>
                        </div>
                        <div className='c1121'>
                            <div className='s1'><MdLiveTv className='tia' /></div>
                            <div className='s2'><span className='s3'>Exclusive</span> webinar access</div>
                        </div>
                        <div className='c1121'>
                            <div className='s1'><MdOutlineSchool className='tia' /></div>
                            <div className='s2'>Scholarships worth <span className='s3'>Rs.94,500</span></div>
                        </div>
                        <div className='c1121'>
                            <div className='s1'><TbBan className='tia' /></div>
                            <div className='s2'><span className='s3'>Ad Free </span> learning experience</div>
                        </div>
                    </div>
                </div>
                <Rcontenet />
            </div>
        </div>
    )
}
