import React from "react";
import Button from 'react-bootstrap/Button';

export default function PeopleCard({name, image, bio, links})    {
    return (
      <section className="peopleCardContainer">
        <div className="peopleCardImageContainer">
          <img  src={image} className="peopleCardImage" alt="Profile Image"/>
        </div>
        <div className="peopleCardBody">
          <h3>{name}</h3>
          <p>{bio}</p>
        </div>
      </section>
    );
}