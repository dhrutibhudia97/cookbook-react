import { useState } from "react";


function ShoppingList() {

    const [list, setList] = useState([]);
    const [inputData, setInputData] = useState('');

    const handleAddItem = () => {
        const newList = [...list, {title: inputData}];
        StyleSheetList(newList);
        setInputData('');
        console.log(list)
    }

    const handleRemoveItem = (index) => {
        const newList = [];
        for (let i = 0; i < list.length; i++) {
            if (index !== i) {
                newList.push(list[i]);
            }
        }
        setList(newList);
    }

    return (
        <div className="shoppinglist">
            <h1>Shopping List</h1>
            <h2>Click on items to delete them.</h2>
            <div className="input">
                <input type="text" value={inputData} onChange={(event) => setInputData(event.target.value)}/>
                <input type="button" value="ADD" onClick={() => handleAddItem()}/>
            </div>
            <div className="list">
                {list.map((item, index) => {
                    return (
                        <div>
                            <p onClick={() => handleRemoveItem(index)}>{item.title}</p>
                        </div>
                    )
                })}
            </div>
        </div>
        
    )




};

