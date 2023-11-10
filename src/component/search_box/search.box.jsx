import { Component } from "react";
import './searcg.box.style.css';
const SearchBox = ({classname,placesholder,onchangehandler})=>(

    <input 
               className={`searchbox  ${classname}`}
                type="search"
                placeholder={placesholder}
                onChange={onchangehandler}
                />
    

)
// class SearchBox extends Component{

//     render( )
//     {
//         return(
//             <input 
//            className={`searchbox  ${this.props.classname}`}
//             type="search"
//             placeholder={this.props.placesholder}
//             onChange={this.props.onchangehandler}
//             />

//         )


//     }
// }

export default SearchBox;