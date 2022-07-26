
import logo from '../../assets/chucknorris_logo_coloured.png';
import './styles.css'
import React, { useState } from 'react';
import ChuckNorrisService from '../../services/ChuckNorrisService'
import DetailJoke from '../../components/DetailJoke'
import SearchField from '../../components/SearchField'
import Alert from '../../components/Alert';
import { useNavigate } from "react-router-dom";
function HomePage () {
    const [searchTerm, setSearchTerm] = useState('')
    const [alertMessage, setAlertMessage] = useState('')
    const [openAlert, setOpenAlert] = useState(false)
    const [detailedJoke, setDetailedJoke] = useState(null)
    const [modalState, setModalState] = useState({open: false, loading: false})
    const navigate = useNavigate()

    async function searchJokes (searchTerm) {
        if (searchTerm.length < 3) {
            setAlertMessage('Please type a least 3 characters')
            setOpenAlert(true)
            return
        }
        const { data: { result } } = await ChuckNorrisService.getJokesFromSearchTerm(searchTerm)
        navigate('/jokes', {state: {jokes: result, searchTerm}})
    }
    async function handleFeelingLuckClickButton (searchTerm) {
        setModalState({open: true, loading: true})
        setDetailedJoke(await ChuckNorrisService.getRandomJokeFromSearchTerm(searchTerm))
        setModalState({open: true, loading: false})
    }
    function closeModal () {
        setModalState({...modalState, open: false})
    }
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="chucknorris_logo" />
                <p>Type to search the best chuck jokes</p>
            </header>
            <main className='Main-container'>
                <SearchField    searchTerm={searchTerm}
                                setSearchTerm={setSearchTerm}
                                searchJokes={searchJokes}
                                handleFeelingLuckClickButton={handleFeelingLuckClickButton}/>
                <Alert type='error'
                    message={alertMessage}
                    isShow={openAlert}
                    handleClose={() => setOpenAlert(false)} />
            </main>
            <DetailJoke state={modalState} joke={detailedJoke} closeFunction={closeModal}  />
        </div>
    )
}
export default HomePage
