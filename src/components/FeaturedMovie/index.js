import React from 'react'
import './index.css'

export default ({ item }) => {

    let firstDate = new Date(item.first_air_date);
    let genres = [];
    for (let i in item.genres) {
        genres.push(item.genres[i].name);
    }

    let description = item.overview;
    if (description.length > 200) {
        description = description.substring(0, 250) + '...';
    }

    return (
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <h1 className="featured--name">{item.original_name}</h1>
                    <div className="featured--info">
                        <span className="featured--points">{item.vote_average} pontos</span>
                        <span className="featured--year">{firstDate.getFullYear()}</span>
                        <span className="featured--seasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</span>
                    </div>
                    <p className="featured--description">{description}</p>
                    <div className="featured--buttons">
                        <button className="featured--watchButton" href={`/watch/${item.id}`}>► Assistir</button>
                        <button className="featured--mylistButton" href={`/list/add/${item.id}`}>+ Minha Lista</button>
                    </div>
                    <p className="featured--genres"><strong>Gêneros: </strong>{genres.join(', ')}</p>
                </div>
            </div>
        </section>
    )
}