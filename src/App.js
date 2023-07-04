import { useEffect, useState } from 'react';


const width = 8
const candyColors= [
  'blue',
  'red',
  'green',
  'orange',
  'purple',
  'yellow'

]
function App() {
  const [currentColorArrangement, setCurrentColorArrangement] = useState([])

  const checkForColumnOfThree = () => {
    for(let i = 0; i < 47; i++) {
      const collumnOfThree = [i, i + width, i + width * 2]
      const decidedColor = currentColorArrangement[i]

      if ( collumnOfThree.every(square => currentColorArrangement[square] === decidedColor)) {
          collumnOfThree.forEach(square => currentColorArrangement[square] = '')
      }
    }
  }

  const createBoard = () => {
    const randomColorArrangement = []
    for(let i = 0; i < width * width; i++) {
      const randomColor = candyColors[Math.floor(Math.random() * candyColors.length)]
      randomColorArrangement.push(randomColor)
    }
    setCurrentColorArrangement(randomColorArrangement)
  }
  useEffect(() => {
    createBoard()
  },[])
  useEffect(() =>{
    const timer = setInterval(() => {
        checkForColumnOfThree()

    }, 100)
    return () =>clearInterval(timer)
  }, [checkForColumnOfThree])

  return (
    <div className='App'>
      <div className='game'>
        {currentColorArrangement.map((candyColors, index) =>(
          <img 
            key={index}
            src="" alt={candyColors} 
            style={{backgroundColor: candyColors}}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
