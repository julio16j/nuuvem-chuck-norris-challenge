import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHashtag, faLaughWink, faFilter, faCalendarAlt } from "@fortawesome/free-solid-svg-icons"
import moment from 'moment'
function JokeForm ({joke}) {
    return(
        <aside>
            <header>
                <h4><FontAwesomeIcon icon={faHashtag} style={{color: 'var(--orange-white)'}} /> Id: {joke.id}</h4>
            </header>
            <main>
                <section>
                    <p> <FontAwesomeIcon icon={faLaughWink} style={{color: 'var(--orange-white)'}} /> Joke: {joke.value}</p>
                </section>
                <section>
                    {joke.categories.length > 0 && 
                    <p> <FontAwesomeIcon icon={faFilter} style={{color: 'var(--orange-white)'}} /> Categories: 
                        {joke.categories.map((category, index) => {
                            if (index === 0 && joke.categories.length > 1) return ' ' + category + ', '
                            else if (index === 0) return ' ' + category
                            else if (index + 1 === joke.categories.length) return category
                            else return category + ', '
                        })}
                    </p>}
                </section>
            </main>
            <footer className='d-flex justify-content-between align-items-center'>
                <FontAwesomeIcon icon={faCalendarAlt} style={{color: 'var(--orange-white)', marginBottom: '11px'}} />
                <p className='ml-2'>Created At: {moment(joke.created_at).format('MM/DD/YYYY')}</p>
                <p className='ml-2' >Updated At: {moment(joke.updated_at).format('MM/DD/YYYY')}</p>
            </footer>
        </aside>
    )
}
export default JokeForm