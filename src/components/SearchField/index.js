import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
function SearchField ({
    searchJokes,
    handleFeelingLuckClickButton,
    searchTerm,
    setSearchTerm}) {
    function searchIfEnterPressed (eventObject) {
        if (eventObject.key === 'Enter') {
            searchJokes(searchTerm)
        }
    }
    return (
        <main>
            <div className='searchField'>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                            <FontAwesomeIcon icon={faSearch} />
                        </span>
                    </div>
                    <input type="text" placeholder="Search" value={searchTerm}
                        onChange={(eventObject) => setSearchTerm(eventObject.target.value)} 
                        onKeyDown={(eventObject) => searchIfEnterPressed(eventObject)} />
                </div>
            </div>
            <div className='d-flex justify-content-center'>
                <button className='searchButton' onClick={() => {searchJokes(searchTerm)}} >Search</button>
                <button className='searchButton'  onClick={() => {handleFeelingLuckClickButton(searchTerm)}} >I'm feeling lucky</button>
            </div>
        </main>
    )
}
export default SearchField
