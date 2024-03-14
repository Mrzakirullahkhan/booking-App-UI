import React from 'react'
import "./header.css"
import { useState } from 'react';
import {format} from "date-fns"
import { FaBed } from "react-icons/fa";
import { MdFlightTakeoff } from "react-icons/md";
import { FaCarAlt } from "react-icons/fa";
import { RiTaxiFill } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { FaPerson } from "react-icons/fa6";
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file


function Header() {
    const [openDate,setopendate] = useState(false)
    const [number, setnumber] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [openOption,setopenOption] = useState(false);
    const [option,setoption] = useState({
        adult:1,
        children:0,
        room:1,
    })
    return (
        <div className='header'>
            <div className="headerContainer">
                <div className="headerList">
                    <div className="headerListItem active">
                        <FaBed />
                        <span>stays</span>
                    </div>
                    <div className="headerListItem">
                        <MdFlightTakeoff />
                        <span>Flight</span>
                    </div>
                    <div className="headerListItem">
                        <FaCarAlt />
                        <span>Car rentals</span>
                    </div>
                    <div className="headerListItem">
                        <FaBed />
                        <span>Attraction</span>
                    </div>
                    <div className="headerListItem">
                        <RiTaxiFill />
                        <span>Airport taxis</span>
                    </div>
                </div>
                <h1 className="headerTitle">A lifetime of discounts? it's Genius</h1>
                <p className="headerDesc">
                    Get reward for your travel unlock instant saving  of 10%  with free account
                </p>
                <button className='headerBtn'>Sign In/ Registure</button>
                <div className="headerSearch">
                    <div className="headerSearchItem">
                        <FaBed className='headerIcon' />
                        <input type="text" placeholder='where are you going' className='headerSearchInput' />
                    </div>
                    <div className="headerSearchItem">
                        <SlCalender className='headerIcon' />
                        <span className='headerSearchText' onClick={()=>setopendate(!openDate)}><>{format(number[0].startDate, "MM/dd/yy")} to {format(number[0].endDate, "MM/dd/yy")}</></span>
                      { openDate && <DateRange
                            editableDateInputs={true}
                            onChange={item => setnumber([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={number}
                            className='date'
                        />}
                    </div>
                    <div className="headerSearchItem">
                        <FaPerson className='headerIcon' />
                        <span className='headerSearchText'>{`${option.adult} adult . ${option.children} children . ${option.room} room`} </span>
                    </div>
                    <div className="headerSearchItem">
                        <button className='headerBtn'>Search</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
