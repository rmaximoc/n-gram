import { nGram } from '../index'
import { showMeTheCode, thereIsTheCode } from './fixtures'

describe('should return ngram when', () => {
  it("has used 'show me the code' string", () => {
    const result = nGram('Show me the code')

    expect(result).toEqual(showMeTheCode)
  })

  it("has used 'there is the code' string", () => {
    const result = nGram('There is the code')

    expect(result).toEqual(thereIsTheCode)
  })
})
