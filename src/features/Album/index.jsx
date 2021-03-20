import React from 'react';
// import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

Album.propTypes = {
    
};

function Album(props) {
    const ablumList = [
        {
            id: 1,
            name: "Nhac Hay",
            imgUrl: "https://images2.alphacoders.com/727/thumbbig-72732.png"
        },
        {
            id: 2,
            name: "Nhac Vip",
            imgUrl: "https://images5.alphacoders.com/314/thumbbig-314574.png"
        },
        {
            id: 3,
            name: "Nhac Anime",
            imgUrl: "https://images.alphacoders.com/736/thumbbig-736461.png"
        },
    ]
    return (
        <div>
            <h3>Có Thể Bạn Sẽ Thích </h3>
            <AlbumList getAlbum={ablumList}/>
        </div>
    );
}

export default Album;