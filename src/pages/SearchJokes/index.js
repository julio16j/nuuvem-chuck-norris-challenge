
import './styles.css'
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import ChuckNorrisService from '../../services/ChuckNorrisService'
import DetailJoke from '../../components/DetailJoke'
import ListJokes from '../../components/ListJokes';
import SearchField from '../../components/SearchField';
import Alert from '../../components/Alert';
import { Bars } from  'react-loader-spinner'
function SearchJokesPage () {
    const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color');
    const [newSearchTerm, setNewSearchTerm] = useState('')
    const [highlightTerm, setHighlightTerm] = useState('')
    const [searchedJokes, setSearchedJokes] = useState([])
    const [detailedJoke, setDetailedJoke] = useState(null)
    const [modalState, setModalState] = useState({open: false, loading: false})
    const [alertMessage, setAlertMessage] = useState('')
    const [openAlert, setOpenAlert] = useState(false)
    const [loadingRequest, setLoadingRequest] = useState(false)
    const { searchTerm } = useParams()

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
        setLoadingRequest(true)
        const { data: { result } } = await ChuckNorrisService.getJokesFromSearchTerm(searchTerm)
        setSearchedJokes(result)
        setLoadingRequest(false)
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
        if (searchTerm) {
            setNewSearchTerm(searchTerm)
            setHighlightTerm(searchTerm)
            searchJokes(searchTerm)
        }
      }, [searchTerm]);
    return (
        <div className="App">
            <header className="searchHeader">
                <SearchField    searchTerm={newSearchTerm}
                                setSearchTerm={setNewSearchTerm}
                                searchJokes={searchJokes}
                                handleFeelingLuckClickButton={handleFeelingLuckClickButton}/>
                <Alert type='error'
                    message={alertMessage}
                    isShow={openAlert}
                    handleClose={() => setOpenAlert(false)} />
            </header>
            <main>
                <div>
                    {(loadingRequest &&
                    <div className='d-flex justify-content-center align-items-center' style={{marginTop: '2em'}} >
                        <Bars color={primaryColor} height={60} width={60} />
                    </div> ) ||
                    (searchedJokes != null && <ListJokes jokes={searchedJokes} detailFunction={detailFunction} searchTerm={highlightTerm} />)}
                </div>
                
            </main>
            <DetailJoke state={modalState} joke={detailedJoke} closeFunction={closeModal}  />
        </div>
    )
}
export default SearchJokesPage
