import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react'
import '../App.css'


function Header( {setUserName}) {

    const [inputValue,setInputValue] = useState('muffakiribnhamid')


    useEffect(() => {
        setUserName('muffakiribnhamid'); // Default GitHub username on page load
    }, []);


    function handleInputChange(e) {
        setInputValue(e.target.value); // Update local input state
    }
    
    function handleSearch() {
        setUserName(inputValue); // Pass the input value to the parent
    }


  

    return (
        <div className="main">
            <div className="header">
                <div className="left">
                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github icon" />
                </div>

                <div className="right">
                    <p><a href="https://github.com/muffakiribnhamid" target='_blank'>Dev's Github</a></p>
                    <p><a href="https://instagram.com/muffakir_hamid" target='_blank'>Instagram</a></p>
                    <p><a href="https://x.com/HamidMuffakir" target='_blank'>Twitter</a></p>
                </div>
            </div>
            <div className="searchBar">
                <div className="search w-full max-w-sm min-w-[200px]">
                    <input value={inputValue} onChange={handleInputChange} className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Type here..."></input>
                    <FontAwesomeIcon className='search-icon' onClick={handleSearch}  icon={faMagnifyingGlass} />
                </div>

            </div>
        </div>
    )
}

export default Header