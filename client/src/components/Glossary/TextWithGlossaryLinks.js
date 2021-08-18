import { useContext, useEffect, useState } from 'react';
import GlossaryContext from "../../store/GlossaryContext";

import './glossary.css'

const isLetter = (letter) => {
  let isLetter =  (letter.length === 1 && letter.match(/[A-Z]/i)) ? true : false
  return isLetter
}

const isIncludedInOtherWord = (term, text, possibleIndex) => {
  let embeddedInOtherWord = false
  if (possibleIndex > 0 ) {
    embeddedInOtherWord |= isLetter(text.charAt(possibleIndex-1))
  }
  if (possibleIndex+term.length < text.length) {
    embeddedInOtherWord |= isLetter(text.charAt(possibleIndex + term.length))
  }
  return embeddedInOtherWord;
}

const indexOfTerm = (term, text, startingAt) => {
    let index = text.indexOf(term, startingAt)
    while (index !== -1 && isIncludedInOtherWord(term, text, index)) {
      index = text.indexOf(term, index+term.length)
    }
    return index
}

const splitSpanWithTerm = (term, spanDetail) => {
    let resultSpans = []
    let startIndex = 0
    let upperCaseTerm = term.toUpperCase()
    let upperCaseText = spanDetail.text.toUpperCase()
    let nextMatchIndex = indexOfTerm(upperCaseTerm, upperCaseText)
    while (nextMatchIndex !== -1) {
        resultSpans.push({ text: spanDetail.text.substr(startIndex, nextMatchIndex-startIndex)})
        resultSpans.push({ text: spanDetail.text.substr(nextMatchIndex, term.length), term})
        startIndex = nextMatchIndex+term.length
        nextMatchIndex = indexOfTerm(upperCaseTerm, upperCaseText, nextMatchIndex+1)
    }
    if (startIndex < spanDetail.text.length) {
        resultSpans.push({ text: spanDetail.text.substr(startIndex)})
    }
    return resultSpans
}

const TextSpan = ({text, term}) => {
    let glossaryContext = useContext(GlossaryContext)
    return term?
        (<span className='glossary-word' onClick={() => glossaryContext.setSelectedTerm(term)} >{text}</span>)
    :
        (<span>{text}</span>)

}

const TextWithGlossaryLinks = ({text, excludeTerm}) => {
  let glossaryContext = useContext(GlossaryContext)
  let [ textSpanDetails, setTextSpanDetails ] = useState([])

  useEffect(() => {
    // get the terms and sort them by length so the longest terms are matched first
    let terms = [...glossaryContext.allTerms]
    terms.sort((a, b) => b.length - a.length)

    // initialize span details with a single large span
    let spanDetails = [ { text: text } ]

    // one by one look for the terms and split the text up
    terms.forEach((term) => {
        if (term === excludeTerm) return;
        let newSpanDetails = []
        spanDetails.forEach((spanDetail) => {
            if (spanDetail.term) {
                newSpanDetails.push(spanDetail)
            }
            else {
                newSpanDetails.push(...splitSpanWithTerm(term, spanDetail))
            }
        })
        spanDetails = newSpanDetails
    })
    setTextSpanDetails(spanDetails)

  }, [text, excludeTerm, glossaryContext])

  return (
    <>
      { 
        textSpanDetails.map((textSpan, index) => <TextSpan key={index} text={textSpan.text} term={textSpan.term}/>)
      }
    </>
  )
}

export default TextWithGlossaryLinks
