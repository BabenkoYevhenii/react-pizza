import React, {useState} from "react";
//  class Categories extends React.Component{
//      state={
// activeIteam : 2
//      };
//      onSelectIteam= index=>{
//          this.setState({activeIteam:index});
//
//
//      }
// render() {
//     const{items,onClickItem}=this.props
//     return(
//         <div>
//             <div className="categories">
//                 <ul>
//                     <li className="active">Все</li>
//                     {items.map((name,index)=> <li className={this.state.activeIteam=== index?'active ':''} onClick={()=>this.onSelectIteam(index)} key={`${name}_${index}`}> {name}</li>    )
//
//                     }
//
//                 </ul>
//             </div>
//
//         </div>
//
//     )
// }

function Categories({items, onClickItem}) {
    const [activeIteam, setActiveIteam] = React.useState(null)

    const onSelectIteam = (index) => {
        setActiveIteam(index);


    };
    return (
        <div>
            <div className="categories">
                <ul>
                    <li className={activeIteam === null ? 'active ' : ''} onClick={() => onSelectIteam(null)}>Все</li>
                    {items && items.map((name, index) => <li className={activeIteam === index ? 'active ' : ''}
                                                             onClick={() => setActiveIteam(index)}
                                                             key={`${name}_${index}`}> {name}</li>)

                    }

                </ul>
            </div>

        </div>


    )


}

export default Categories;