export const nGram = string => {
  const ngramResult = []
  let temporaryNgramResult = []
  let ngramString
  let counter = 0
  let reset = 0
  let index = 0

  if (typeof string !== 'string') throw new Error('It have to be a string')

  const splitedString = string.split(' ')
  const posibilities = splitedString.length * splitedString.length

  while(counter <= posibilities) {
    if (reset === splitedString.length +1) {
      temporaryNgramResult = []
      reset = 0
    }

    splitedString.map(word => {
      temporaryNgramResult.splice(index, 0, word)

      ngramString = temporaryNgramResult.join(' ')
      ngramResult.push(ngramString)

      index ++
      reset ++
    })

    splitedString.shift()
    counter ++
  }

  return ngramResult
}

const formater = text => JSON.stringify(text).replaceAll(',', ', <br>').replaceAll('[', '').replaceAll(']', '')

const handleSubmit = event => {
  event.preventDefault()

  const value = document.querySelector('.text-input').value
  const resultElement = document.querySelector('.result')

  const ngrams = formater(nGram(value))

  resultElement.innerHTML = ngrams
}

window.handleSubmit = handleSubmit