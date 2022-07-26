import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { Bars } from  'react-loader-spinner'
import JokeForm from './JokeForm';
function DetailJoke ({state, joke, closeFunction}) {
    const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color');
    const [detailedJoke, setDetailedJoke] = useState(null)
    const customModalStyle = {
        width:'80vmin',
        maxHeight: '80vmin',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'var(--background-main-color)',
        color: 'white'
    }
    useEffect(() => {
        setDetailedJoke(joke)
      }, [joke]);
    return (
        <Modal isOpen={state.open} onRequestClose={closeFunction} style={{content:customModalStyle}} > {
            (   (state.loading) &&
                <div className='d-flex justify-content-center align-items-center' style={{height: '100%'}} >
                    <Bars color={primaryColor} height={40} width={40} />
                </div> 
            ) || (detailedJoke != null && <JokeForm joke={detailedJoke} />)}
        </Modal>
    )
}

export default DetailJoke