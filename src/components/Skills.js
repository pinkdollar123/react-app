import React from 'react';

const mySkills = 
[
    {skill: 'HTML', id: 1},
    {skill: 'CSS', id: 2},
    {skill: 'Bootstrap', id: 3},
    {skill: 'Javascript', id: 4},
    {skill: 'ReactJS', id: 5},
    {skill: 'MySQL', id: 6},
    {skill: 'Node.js', id: 7},
    {skill: 'PHP', id: 8},
    {skill: 'Laravel', id: 9},
]

const skillList = mySkills.map(skill =>
    <li key={skill.id} className="list-group-item fs-6 fs-sm-6 fs-xl-4 m-1 border rounded-1">
    {skill.skill}
  </li>)

function Skills() {
    return (
        <div>
            <ul className="list-group list-group-horizontal border-0 bg-transparent text-danger">
        {skillList}
        </ul>
        </div>
    );
  };

export default Skills