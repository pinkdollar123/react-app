import React from 'react'
import { newPeople } from './data';

const people = [
    'Creola Katherine Johnson: mathematician',
    'Mario José Molina-Pasquel Henríquez: chemist',
    'Mohammad Abdus Salam: physicist',
    'Percy Lavon Julian: chemist',
    'Subrahmanyan Chandrasekhar: astrophysicist'
];

const peopleList = people.map(person => <li>{person}</li>)
const tambay = newPeople.filter(person => person.profession === 'Tambay');

const tambayList = tambay.map(person => 
    {
        return (
            <li>
        <p><b>{person.name}:</b>
        {' ' + person.profession + " "}
        known for {person.accomplishment}
        </p>
    </li>
        );
    })

function ListSection({ title, newPeople }){
    return (
        <>
        <h2>{title}</h2>
        <ul>
            {newPeople.map(person =>
            <li key={person.id}>
                <p>
                    <b>{person.name}:</b>
                    {' ' + person.profession + ' '}
                    known for {person.accomplishment}
                </p>
            </li>    
            )}
        </ul>
       </>
    );
}


function People() {
    const notTambay = newPeople.filter(person => person.profession !== 'Tambay'); 

  return (
    <article>
         <ul>
            {peopleList}
        </ul>
        <ul>
            {tambayList}
        </ul>
       <ListSection
       title='Kamote'
       newPeople={tambay} />
       <ListSection 
       title='Hindi tambay'
       newPeople={notTambay}
       />
        
    </article>
        
  )
}

export default People