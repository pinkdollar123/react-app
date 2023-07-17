import React from 'react';
import {userName} from './User';


function Item({itemName , isPacked}) {
    if (isPacked){
        return <li className='item'>{itemName} ✔</li>;
    }
    return <li className='item'>{itemName} </li>;
}

function NewItem({newItem, newPacked}){
    return(
        <li className='item'>
            { newPacked ?
                ( <del> {newItem + '✔'} </del>)
                :
                (newItem)
            }
        </li>
    );
}

function OperatorItem({itemNew, itemPacked}){
    return(
        <li className='item'>
            {itemNew} {itemPacked && '✔'}
        </li>
    );
}

function PackingList() {
  return (
    <section>
        <h2>{userName}'s Packing List</h2>
        <ul>
            <Item 
            isPacked={true}
            itemName='Space Suit 3XL'
            />
            <Item 
            isPacked={true}
            itemName='Apple of Archer'
            />
            <Item 
            isPacked={false}
            itemName='Bow of Darkness'
            />
        </ul>
        <h2>{userName}' New Packing List</h2>
        <ul>
            <NewItem 
            newPacked={true}
            newItem='Kamote'
            />
            <NewItem 
            newPacked={false}
            newItem='Bayabas'
            />
            <NewItem 
            newPacked={false}
            newItem='Saging'
            />
            <NewItem 
            newPacked={true}
            newItem='Tahong'
            />
        </ul>
        <h2>{userName}'s Packing List using && Operator</h2>
        <ul>
            <OperatorItem 
            itemPacked={false}
            itemNew='Mansanas'
            />
            <OperatorItem 
            itemPacked={true}
            itemNew='Manggo'
            />
            <OperatorItem 
            itemPacked={false}
            itemNew='Mais'
            />
        </ul>
    </section>
  )
}

export default PackingList