export default function () {
    const mockJoke = {
        value:
            "Chuck Norris can turn even the safest firework into an instrument of mass destruction."
    }        
    const mockListJokes = [];
    for (let i = 0; i < 5; i++) {
        mockListJokes.push({...mockJoke});
    } return mockListJokes
}
