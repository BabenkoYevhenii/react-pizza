import React from "react";

function Categories({items, onClickItem}) {
    const [activeIteam, setActiveIteam] = React.useState(null)

    const onSelectIteam = (index) => {
        setActiveIteam(index);
        onClickItem(index);


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