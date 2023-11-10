import { useState,useEffect } from 'react';
import { Component } from 'react';
import CardList from './component/card_list/card_list.component';
import './App.css';
import SearchBox from './component/search_box/search.box';
const App = ()=>{
        const  [monsters,setmonster]=useState([]);
        const [searchfield , setsearchfield] = useState('');
        useEffect(()=>{
          fetch('https://jsonplaceholder.typicode.com/users')
            .then((response)=> response.json())
            .then((users)=>setmonster(users))
          },[]

        );
 const onsearchchange =  (event)=>{
    const searchfield = event.target.value.toLowerCase();

        setsearchfield(searchfield);

  }
  const filteredMonsters = monsters.filter((mon)=>{
       return mon.name.toLowerCase().includes(searchfield);
     });



  return(
    <div className="App">
        <h1 className='apptitle'>Monster Friends</h1>
        <SearchBox onchangehandler ={onsearchchange} placesholder={'search monsters'} classname='monster-searchbox'/>

 
        <CardList listcomponent={filteredMonsters}/>
      </div>
  )
}


// class App extends Component{
//   constructor(){
//     super();
//     this.state = {
//       monsters:[ 

//       ],
//       searchfieled : ''

//     };

//   }
//   componentDidMount(){

//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response)=> response.json())
//     .then((users)=>
//      this.setState(
//       ()=>{
//       return{ monsters : users };
//     },
//     ()=>{

//     }

//     ));
//   }
//   onsearchchange  = (event)=>{
//     const searchfieled = event.target.value.toLowerCase();

//    this.setState(
//     ()=>{
//     return({searchfieled})

//    })

//   }

//  render() {
//   const filteredMonsters = this.state.monsters.filter((mon)=>{
//     return mon.name.toLowerCase().includes(this.state.searchfieled);
//  });

//     return (

//       <div className="App">
//         <h1 className='apptitle'>Monster Friends</h1>
//       <SearchBox onchangehandler ={this.onsearchchange} placesholder={'search monsters'} classname='monster-searchbox'/>
//        <CardList listcomponent={filteredMonsters}/>
//       </div>
//     );
//   }
// }
  export default App;