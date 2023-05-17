import React, { useState } from 'react';
import './contentstyle.scss';
import { BsClockHistory } from 'react-icons/bs';
import Razor from '../images/Razor.png';

export default function Rcontenet() {
    const [price,setPrice]=useState("Rs.0");
    const handleClick = (e) => {

        if (e.target.id == "i12") {
            if (e.target.childNodes[0].checked === true) {
                e.target.childNodes[0].checked = false;
                setPrice("Rs.0");
                document.getElementById("i12").style.border = "1px solid gray";
                document.getElementById("i12").style.backgroundColor = "initial";
            }
            else {
                const a = Array.from(document.getElementsByClassName("gg"));
                for (let i of a) {
                    i.checked = false;
                    console.log();
                }
                e.target.childNodes[0].checked = true;
                setPrice(e.target.childNodes[0].value);
                console.log(price);
                document.getElementById("i12").style.border = "1px solid #47BA68";
                document.getElementById("i12").style.backgroundColor = "#D7EDDD";
            }
        }
        else if (e.target.id == "i2") {
            if (!e.target.checked) {

                document.getElementById("i12").style.border = "1px solid gray";
                document.getElementById("i12").style.backgroundColor = "initial";
                e.target.checked = false;
                setPrice("Rs.0");
                console.log("Hi");
                console.log(e.target);
            }
            else {

                const a = Array.from(document.getElementsByClassName("gg"));
                for (let i of a) {
                    i.checked = false;
                    i.style.border="1px solid gray";
                    console.log("Hello");
                }
                e.target.checked = true;
                setPrice(e.target.value);
                console.log(price);
                document.getElementById("i12").style.border = "1px solid #47BA68";
                document.getElementById("i12").style.backgroundColor = "#D7EDDD";
            }
        }
    }

    const handleClick2 = (e) => {

        if (e.target.id == "i13") {
            if (e.target.childNodes[0].checked === true) {
                e.target.childNodes[0].checked = false;
                setPrice("Rs.0");
                document.getElementById("i13").style.border = "1px solid gray";
                document.getElementById("i13").style.backgroundColor = "initial";
            }
            else {
                const a = Array.from(document.getElementsByClassName("gg"));
                for (let i of a) {
                    i.checked = false;
                    console.log();
                }
                e.target.childNodes[0].checked = true;
                setPrice(e.target.childNodes[0].value);
                document.getElementById("i13").style.border = "1px solid #47BA68";
                document.getElementById("i13").style.backgroundColor = "#D7EDDD";
            }
        }
        else if (e.target.id == "i3") {
            if (!e.target.checked) {

                document.getElementById("i13").style.border = "1px solid gray";
                document.getElementById("i13").style.backgroundColor = "initial";
                setPrice("Rs.0");
                e.target.checked = false;
                console.log("Hi");
                console.log(e.target);
            }
            else {

                const a = Array.from(document.getElementsByClassName("gg"));
                for (let i of a) {
                    i.checked = false;
                    console.log('Hello');
                }
                e.target.checked = true;
                setPrice(e.target.value);
                document.getElementById("i13").style.border = "1px solid #47BA68";
                document.getElementById("i13").style.backgroundColor = "#D7EDDD";
            }
        }
    }

    const handleClick3 = (e) => {

        if (e.target.id == "i14") {
            if (e.target.childNodes[0].checked === true) {
                e.target.childNodes[0].checked = false;
                setPrice("Rs.0");
                document.getElementById("i14").style.border = "1px solid gray";
                document.getElementById("i14").style.backgroundColor = "initial";
            }
            else {
                const a = Array.from(document.getElementsByClassName("gg"));
                for (let i of a) {
                    i.checked = false;
                    console.log();
                }
                e.target.childNodes[0].checked = true;
                setPrice(e.target.childNodes[0].value);
                document.getElementById("i14").style.border = "1px solid #47BA68";
                document.getElementById("i14").style.backgroundColor = "#D7EDDD";
            }
        }
        else if (e.target.id == "i4") {
            if (!e.target.checked) {

                document.getElementById("i14").style.border = "1px solid gray";
                document.getElementById("i14").style.backgroundColor = "initial";
                setPrice("Rs.0");
                e.target.checked = false;
                console.log("Hi");
                console.log(e.target);
            }
            else {

                const a = Array.from(document.getElementsByClassName("gg"));
                for (let i of a) {
                    i.checked = false;
                    console.log('Hello');
                }
                e.target.checked = true;
                setPrice(e.target.value);
                document.getElementById("i14").style.border = "1px solid #47BA68";
                document.getElementById("i14").style.backgroundColor = "#D7EDDD";
            }
        }
    }
    return (
        <div className='c12'>
            <div className='Rct'>
                <div className='c121'>
                    <div className='c1211'>
                        <span className='z1'>1</span>
                        <span className='z2'>Sign up</span>
                    </div>
                    <div className='c1211'>
                        <span className='z1'>2</span>
                        <span className='z2'>Subscribe</span>
                    </div>
                </div>
                <div className='c122'>Select your subscription plan</div>
                <div className='c123'>
                    <div id="i11">
                        <input type="radio" className='gg' id="i1" checked disabled />
                        <label htmlFor="i1">
                            <div className='pr'>
                                <div className='pr1'>12 Months Subscription</div>
                                <div className='pr2'>
                                    <div className='pr21'>
                                        <span className='sc1'>Total </span>
                                        <span className='sc2'>Rs.99</span>
                                    </div>
                                    <div className='pr22'>
                                        <span className='sr1'>Rs.8  </span>
                                        <span className='sr2'>/mo</span>
                                    </div>
                                </div>
                            </div>
                        </label>
                    </div>
                    <div id="i12" onClick={handleClick}>
                        <input type="checkbox" className='gg' id="i2" value="Rs.179" />
                        <label htmlFor="i2">
                            <div className='pr'>
                                <div className='pr1'>12 Months Subscription</div>
                                <div className='pr2'>
                                    <div className='pr21'>
                                        <span className='sc1'>Total </span>
                                        <span className='sc2'>Rs.179</span>
                                    </div>
                                    <div className='pr22'>
                                        <span className='sr1'>Rs.15  </span>
                                        <span className='sr2'>/mo</span>
                                    </div>
                                </div>
                            </div>
                        </label>
                    </div>
                    <div id="i13" onClick={handleClick2}>
                        <input type="checkbox" className='gg' id="i3" value="Rs.149" />
                        <label htmlFor="i3">
                            <div className='pr'>
                                <div className='pr1'>6 Months Subscription</div>
                                <div className='pr2'>
                                    <div className='pr21'>
                                        <span className='sc1'>Total </span>
                                        <span className='sc2'>Rs.149</span>
                                    </div>
                                    <div className='pr22'>
                                        <span className='sr1'>Rs.25  </span>
                                        <span className='sr2'>/mo</span>
                                    </div>
                                </div>
                            </div>
                        </label>
                    </div>

                    <div id="i14" onClick={handleClick3}>
                        <input type="checkbox" className='gg' id="i4" value="Rs.99" />
                        <label htmlFor="i4">
                            <div className='pr'>
                                <div className='pr1'>3 Months Subscription</div>
                                <div className='pr2'>
                                    <div className='pr21'>
                                        <span className='sc1'>Total </span>
                                        <span className='sc2'>Rs.99</span>
                                    </div>
                                    <div className='pr22'>
                                        <span className='sr1'>Rs.33  </span>
                                        <span className='sr2'>/mo</span>
                                    </div>
                                </div>
                            </div>
                        </label>
                    </div>
                </div>
                <div className='c124'>
                    <div className='tz1'>
                        <div className='tz11'>Subscription Fee</div>
                        <div className='tz12'>Rs.18,500</div>
                    </div>
                    <div className='tz2'>
                        <div className='tz20'>
                            <div className='tz21'>
                                Limited time offer
                            </div>
                            <div className='tz22'>-18,401</div>
                        </div>
                        <div className='tz201'>
                            <span><BsClockHistory /></span>
                            <span> offer valid till 25th March 2023</span>
                        </div>
                    </div>
                    <div className='tz3'>
                        <div className='tz31'>
                            <span className='spa1'>Total</span>
                            <span className='spa2'> (Inc. of 18% GST)</span>
                        </div>
                        <div className='tz32'>{price}</div>
                    </div>
                </div>
                <div className='c125'>
                    <button className='bt1'>CANCEL</button>
                    <button className='bt2'>PROCEED TO PAY</button>
                </div>
                <div className='c126'>
                    <img src={Razor} alt="No" />
                </div>
            </div>
        </div>
    )
}
