import ChuckNorrisService from '../../../services/ChuckNorrisService'
import jokesListFactory from '../../testUtils/jokesListFactory'
const mockJokesResponse = () => {
    return {
        data: {
            total: jokesListFactory().length,
            result: jokesListFactory()
        }
    }
}

jest.mock("axios", () => {
    return {
        create: () => ({get: jest.fn(() => mockJokesResponse())})
    }
})

test("with empty searchTerm", async () => {
    const result = await ChuckNorrisService.getRandomJokeFromSearchTerm("")
    expect(result).toEqual(mockJokesResponse().data)
})

test("with a search term filled in with 3 more characters", async () => {
    const result = await ChuckNorrisService.getRandomJokeFromSearchTerm("test")
    expect(jokesListFactory().filter(element => element.value === result.value).length).toBeGreaterThan(0)
})
