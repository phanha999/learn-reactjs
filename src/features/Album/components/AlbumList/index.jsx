import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import AlbumDeg from '../AlbumDeg';

AlbumList.propTypes = {
    getAlbum: PropTypes.array.isRequired,
};

function AlbumList({getAlbum}) {
    return (
        <ul className="album__list">
               {getAlbum.map((value)=> (
                   <li key={value.id} >
                        <AlbumDeg value={value} />
                   </li>
               ))}
        </ul>
    );
}

export default AlbumList;