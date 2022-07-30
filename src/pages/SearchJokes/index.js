
import './styles.css'
import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import ChuckNorrisService from '../../services/ChuckNorrisService'
import DetailJoke from '../../components/DetailJoke'
import ListJokes from '../../components/ListJokes';
import SearchField from '../../components/SearchField';
import Alert from '../../components/Alert';
function SearchJokesPage () {
    const [searchTerm, setSearchTerm] = useState('')
    const [highlightTerm, setHighlightTerm] = useState('')
    const [searchedJokes, setSearchedJokes] = useState([])
    const [detailedJoke, setDetailedJoke] = useState(null)
    const [modalState, setModalState] = useState({open: false, loading: false})
    const [alertMessage, setAlertMessage] = useState('')
    const [openAlert, setOpenAlert] = useState(false)
    const location = useLocation()
    function detailFunction (joke) {
        setModalState({open: true, loading: true})
        setDetailedJoke(joke)
        setModalState({open: true, loading: false})
    }
    async function searchJokes (searchTerm) {
        if (searchTerm.length < 3) {
            setAlertMessage('Please type a least 3 characters')
            setOpenAlert(true)
            return
        }
        setHighlightTerm(searchTerm)
        const { data: { result } } = await ChuckNorrisService.getJokesFromSearchTerm(searchTerm)
        setSearchedJokes(result)
    }
    async function handleFeelingLuckClickButton (searchTerm) {
        setModalState({open: true, loading: true})
        setDetailedJoke(await ChuckNorrisService.getRandomJokeFromSearchTerm(searchTerm))
        setModalState({open: true, loading: false})
    }
    function closeModal () {
        setModalState({...modalState, open: false})
    }
    useEffect(() => {
        if (location.state) {
            setSearchedJokes(location.state.jokes || [])
            setSearchTerm(location.state.searchTerm || '' )
            setHighlightTerm(location.state.searchTerm || '' )
        }
      }, [location.state]);
    return (
        <div className="App">
            <header className="searchHeader">
                <SearchField    searchTerm={searchTerm}
                                setSearchTerm={setSearchTerm}
                                searchJokes={searchJokes}
                                handleFeelingLuckClickButton={handleFeelingLuckClickButton}/>
                <Alert type='error'
                    message={alertMessage}
                    isShow={openAlert}
                    handleClose={() => setOpenAlert(false)} />
            </header>
            <main>
                <div>
                    {searchedJokes != null && <ListJokes jokes={searchedJokes} detailFunction={detailFunction} searchTerm={highlightTerm} />}
                </div>
                
            </main>
            <DetailJoke state={modalState} joke={detailedJoke} closeFunction={closeModal}  />
        </div>
    )
}
export default SearchJokesPage
