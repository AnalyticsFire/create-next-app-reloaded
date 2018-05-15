import React from 'react';
import { object } from 'prop-types';

export const CharacterInfo = ({ character }) => (
  <div className="character-info p-2">
    <h3>{character.name}</h3>
    <p>
      <strong>birth year:</strong> {character.birth_year}
    </p>
    <p>
      <strong>gender:</strong> {character.gender}
    </p>
    <p>
      <strong>skin color:</strong> {character.skin_color}
    </p>
    <p>
      <strong>eye color:</strong> {character.eye_color}
    </p>
  </div>
);

CharacterInfo.propTypes = {
  character: object,
};

export default CharacterInfo;
