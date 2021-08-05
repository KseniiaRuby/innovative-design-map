import {useState, useEffect, useContext} from 'react';
import GlossaryContext from "../../store/GlossaryContext";

const Glossary = ({ hideGlossary }) => {
    let glossaryContext = useContext(GlossaryContext)
    let selectedDefinition = glossaryContext.selectedDefinition
  
    return selectedDefinition && (
      <div className='glossary-fullscreen'>
        <div className='glossary-header'>
          <div className='glossary-button-container'>
            <div className='glossary-cancel' onClick={() => hideGlossary() }>Cancel</div>
          </div>
          <h1>Glossary</h1> 
        </div>
        <div className='glossary-body'>
          <div className='glossary-entry-title'>
            { selectedDefinition.term }
          </div>
          <div className='glossary-entry-text'>
            { selectedDefinition.description }
          </div>
        </div>
      </div>
    )
  }
  
  const GlossaryContainer = ({ children }) => {
    let glossaryContext = useContext(GlossaryContext)
    let [showGlossary, setShowGlossary] = useState(false)
  
    console.log('Rendering the glossary container')
    console.log('glossaryContext.selectedDefintion', glossaryContext.selectedDefinition )
  
    useEffect(() => {
      console.log('Glossary selection has changed... time to show it!')
      if (glossaryContext.selectedDefinition) {
        setShowGlossary(true)
      }
    }, [glossaryContext])
  
    const hideGlossary = () => {
      glossaryContext.setSelectedTerm(null)
      setShowGlossary(false)
    }
  
    return showGlossary ? <Glossary hideGlossary={hideGlossary} /> : children
  }

  export default GlossaryContainer