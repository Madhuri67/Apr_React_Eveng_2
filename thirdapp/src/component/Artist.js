import React from 'react';
import {Link} from 'react-router-dom'

const ArtistList = (props) => {
    console.log(props)

    const renderList = ({artistData})=>{
        if(artistData){
            return artistData.map((item) => {
                const myimage={
                    background:`url('/images/covers/${item.cover}.jpg')`
                }
                return(
                        <Link to="/" className="artist_item" style={myimage} key={item.id}>                                
                            <div>{item.name}</div>
                        </Link>
                )
            })
        }
    }

    return(
        <div className="artist_list">
            <h4>List of Artist</h4>
            {renderList(props)}
        </div>
    )
}

export default ArtistList       