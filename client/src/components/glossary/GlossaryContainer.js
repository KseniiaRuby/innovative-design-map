import {useState, useEffect, useContext} from 'react';
import ReactModal from 'react-modal'
import GlossaryContext from "../../store/GlossaryContext";

import './glossary.css'

// I couldn't figure out how to do this with css
const modalStyles = {
  overlay: {
    backgroundColor: '#00000080',
  },
  content: {
    top: '20px',
    left: '20px',
    bottom: '20px',
    right: '20px',
    backgroundColor: 'black',
    color: 'white'
  }
}

const GlossaryIndex = ({terms, selectTerm}) => {
  let sorted = [...terms]
  sorted.sort()
  return (
    <div class='glossary-index'>
      {
        sorted.map((term, index) => (
          <div key={'term'+index} onClick={() => selectTerm(term)}>{term}</div>
        ))
      }
    </div>
  )
}

const GlossaryEntry = ({ selectedDefinition }) => {
      return selectedDefinition ? (
        <div className='glossary-entry'>
          <div className='glossary-entry-title'>
            { selectedDefinition.term }
          </div>
          <div className='glossary-entry-text'>
            { selectedDefinition.description }
          </div>
        </div>
    ) : null
  }
  
  const GlossaryContainer = () => {
    let glossaryContext = useContext(GlossaryContext)
    let [showGlossary, setShowGlossary] = useState(false)
    
    useEffect(() => {
      if (glossaryContext.selectedDefinition) {
        setShowGlossary(true)
      }
    }, [glossaryContext])
  
    const hideGlossary = () => {
      glossaryContext.setSelectedTerm(null)
      setShowGlossary(false)
    }

    const selectTerm = (term) => {
      glossaryContext.setSelectedTerm(term)
    }

    return (
      <ReactModal isOpen={showGlossary} style={modalStyles}>
      <div className='glossary-fullscreen'>
        <div className='glossary-header'>
          <div className='glossary-button-container'>
            <div className='glossary-cancel' onClick={() => hideGlossary() }>Cancel</div>
          </div>
          <h1>Glossary</h1> 
        </div>
        <GlossaryEntry selectedDefinition={glossaryContext.selectedDefinition} />
        <GlossaryIndex terms={glossaryContext.allTerms} selectTerm={selectTerm}/>
      </div>
      </ReactModal>
    )
  }

  export default GlossaryContainer