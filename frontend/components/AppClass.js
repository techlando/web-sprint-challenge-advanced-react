import React from 'react'

export default class AppClass extends React.Component {
  state = {
    coordinates: "(2, 2)",
    totalMoves: 0,
    board: [  "", "", "",
              "", "B", "",
              "", "", "" ]
  }

  resetGame = () => {
    return this.setState({
      ...this.state,
      coordinates: "(2, 2)",
      totalMoves: 0,
      board: [  "", "", "",
      "", "B", "",
      "", "", "" ]
    })
  }

  
  handleChangeLeft = () => {
    const helperFunc = (arr, from, to) => {
      let ele = arr[from];
      arr.splice(from, 1);
      arr.splice(to, 0, ele);
    }
    const newArray = this.state.board;
    const val = newArray.indexOf("B");
    
    
    helperFunc(newArray, val, val-1)
    this.setState({
      ...this.state,
      totalMoves: this.state.totalMoves + 1,
      board: newArray
     
    })
  }
  handleChangeRight = () => {
    const helperFunc = (arr, from, to) => {
      let ele = arr[from];
      arr.splice(from, 1);
      arr.splice(to, 0, ele);
    }
    const newArray = this.state.board;
    const val = newArray.indexOf("B");
    
    
    helperFunc(newArray, val, val+1)
    this.setState({
      ...this.state,
      totalMoves: this.state.totalMoves + 1,
      board: newArray
     
    })
  }
  handleChangeUp = () => {
    const helperFunc = (arr, from, to) => {
      let ele = arr[from];
      arr.splice(from, 1);
      arr.splice(to, 0, ele);
    }
    const newArray = this.state.board;
    const val = newArray.indexOf("B");
    
    
    helperFunc(newArray, val, val-3)
    this.setState({
      ...this.state,
      totalMoves: this.state.totalMoves + 1,
      board: newArray
     
    })
  }
  handleChangeDown = () => {
    const helperFunc = (arr, from, to) => {
      let ele = arr[from];
      arr.splice(from, 1);
      arr.splice(to, 0, ele);
    }
    const newArray = this.state.board;
    const val = newArray.indexOf("B");
    
    
    helperFunc(newArray, val, val+3)
    this.setState({
      ...this.state,
      totalMoves: this.state.totalMoves + 1,
      board: newArray
     
    })
  }


  addMoves = () => {
     return this.setState({...this.state, 
        
        totalMoves: this.state.totalMoves + 1,
      
      })
     }

  // handleChange = (val, idx) => {
  //   const updatedArray = [...this.state.board]
    
  //   updatedArray.map((val, idx)=>{
  //     if(val === idx[1] || idx[2] || idx[4] || idx[5] || idx[7] || idx[8] ) {
  //       return this.setState({
  //         ...this.state, 
  //         coordinates: idx -1,
  //         totalMoves: this.state.totalMoves + 1,
  //         board: updatedArray
        
  //       })})}
        
        
     
  render() {
    const { className } = this.props
    return (
      <div id="wrapper" className={className}>
        <div className="info">
          <h3 id="coordinates">Coordinates {this.state.coordinates}</h3>
          <h3 id="steps">You moved {this.state.totalMoves} times</h3>
        </div>
        <div id="grid">
          {this.state.board.map((val, idx) => {
            if(val === "B"){
            return (<div key={idx} className="square active">{val}</div>)}
            else {return (<div key={idx} className="square"></div>)}
            
          })}
          {/* <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square active">B</div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div> */}
        </div>
        <div className="info">
          <h3 id="message"></h3>
        </div>
        <div id="keypad">
          <button  onClick={this.handleChangeLeft} id="left">LEFT</button>
          <button onClick={this.handleChangeUp} id="up">UP</button>
          <button onClick={this.handleChangeRight} id="right">RIGHT</button>
          <button onClick={this.handleChangeDown} id="down">DOWN</button>
          <button onClick={this.resetGame} id="reset">reset</button>
        </div>
        <form>
          <input id="email" type="email" placeholder="type email"></input>
          <input id="submit" type="submit"></input>
        </form>
      </div>
    )
  }
}
