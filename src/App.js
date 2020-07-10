
import React, {useCallback} from 'react';
import './App.css';

function App() {
  const getDrinkGrid = useCallback(() => {
    const classNames = ['green-box', 'red-box', 'black-box'];
    const boxArr = [];
    for (let i = 0; i < 5; i++) {
      let row = [];
      for (let j = 0; j < 5; j++) {
        const className = classNames[Math.floor ( Math.random() * classNames.length )]
        row.push(<td className={className}></td>);
      }
      boxArr.push(row);
    }

    return boxArr;
  }, []);
  return (
    <div className="App">
      {getDrinkGrid().map((row) => {
        return (
        <tr className="row">
          {row.map((el) => {
            return el;
          })
          }
        </tr>
      );
      })}
    </div>
  );
}

export default App;