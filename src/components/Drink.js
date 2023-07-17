import React from "react";
import { userName } from "./User";

function Drink({ name }) {
    let part, caffeine, years;
    if (name === 'tea')
      {
       part = 'leaf';
       caffeine = ' 15-70 mg/cup';
        years = '4,000+ years';
      }else if (name === 'coffee')
        {
          part = 'bean';
          caffeine = '80-185 mg/cup';
          years = '1,000+ years';
        } else{
          part = 'coke';
          caffeine = 'zero';
          years = '5000+ years';
        }

    return (
      <section>
        <h1>{name}</h1>
        <dl>
          <dt>Part of plant</dt>
          <dd>{part}</dd>
          <dt>Caffeine content</dt>
          <dd>{caffeine}</dd>
          <dt>Age</dt>
          <dd>{years}</dd>
        </dl>
      </section>
    );
  }
  
  export default function DrinkList() {
    return (
      <div>
        <h2>{userName}'s Drinking List</h2>
        <Drink name="tea" />
        <Drink name="coffee" />
        <Drink name='softdrinks' />
      </div>
    );
  }
  