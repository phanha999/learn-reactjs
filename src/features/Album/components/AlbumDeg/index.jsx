import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss'

AlbumDeg.propTypes = {
    value: PropTypes.object.isRequired,
};

function AlbumDeg({value}) {
    return (
        <div className="album__item">
            <div className="album__item--thumbnail">
                <img src={value.imgUrl} alt={value.name}/>
            </div>
            <p className="album__item--name">
               {value.name}
            </p>
        </div>
    );
}

export default AlbumDeg;