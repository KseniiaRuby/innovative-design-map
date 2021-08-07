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

const GlossaryEntry = ({ selectedDefinition }) => {
      return selectedDefinition ? (
        <div className='glossary-body'>
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
      </div>
      </ReactModal>
    )
  }

  export default GlossaryContainer