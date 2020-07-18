import React,{Component} from 'react';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      recipie:[{name:"Pizza", votes:0},
      {name:"Burger", votes:0},
      {name:"Garlic Bread", votes:0},
      {name:"Sandwich", votes:0},
      {name:"crispy corn", votes:0},
      {name:"french fries", votes:0},
      {name:"choco lava", votes:0},
    ]
    }
  }
  vote(i){
    let newRecipies=[...this.state.recipie];
    newRecipies[i].votes++;
    function swap(array,i,j){
      var temp=array[i];
      array[i]=array[j];
      array[j]=temp;
    }
    this.setState({recipie: newRecipies});
  }

  render(){
    return(
      <>
      <h2>Vote for your favorite recipies</h2>
      <h3>Lets see which recipie is loved the most</h3>
      <div className="recipies">
        {
          this.state.recipie.map((rec,i) =>
          <div key={i} className="recipie">
            <div className="voteCount">
              {rec.votes}
            </div>
            <div className="recipieName">
              {rec.name}
            </div>
            <button onClick={this.vote.bind(this,i)}>Click here</button>
            </div>
          )
        }
      </div>
      </>
    )
  }
}

export default App;
