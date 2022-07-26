import axios from "axios";
const httpInstance = axios.create({
    baseURL: 'https://api.chucknorris.io/jokes',
    timeout: 10000}
)

const chuckNorrisPath = {
    search: (searchTerm) => `search?query=${searchTerm}`,
    random: () => 'random'
}

export function getJokesFromSearchTerm (searchTerm) {
    return httpInstance.get(chuckNorrisPath.search(searchTerm))
}

export function getRandomJoke () {
    return httpInstance.get(chuckNorrisPath.random())
}

export async function getRandomJokeFromSearchTerm (searchTerm) {
    if (searchTerm && searchTerm.length > 3) {
        const { data } = await getJokesFromSearchTerm(searchTerm)
        if (data.total <= 0) {
            return null
        } else {
            return data.result[Math.floor(Math.random() * data.result.length)];
        }
    } else {
        const { data } = await getRandomJoke()
        return data
    }
}

export default {
    getJokesFromSearchTerm,
    getRandomJoke,
    getRandomJokeFromSearchTerm
}