import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaughWink } from '@fortawesome/free-solid-svg-icons'
import HighlighText from '../../components/Highlight';
import './styles.css'
function ListJokes ({jokes, detailFunction, searchTerm}) {
    return (
        <div className='listContainer' >
            {jokes.map((joke) => {
                return <div>
                    <main className='jokeBox' onClick={() => detailFunction(joke)}>
                        <section>
                            <p> <FontAwesomeIcon icon={faLaughWink} style={{color: 'var(--orange-white)'}} /> Joke: <HighlighText text={joke.value} regexTerm={searchTerm} /></p>
                        </section>
                    </main>
                </div>
            })}
        </div>
    )
}
export default ListJokes