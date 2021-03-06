import React from 'react'

const Season = ({seasons}) => {
    return (
        <div className="season-wraper">
            <p>
                Seasons in total: <span>{seasons.length}</span>
            </p>
            <p>
                Episodes in total:{' '}
                <span>
                    {seasons.reduce((acc, season)=>acc+ season.episodeOrder, 0)}
                </span>
            </p>
            <div className="season-list">
                {seasons.map(season=>(
                    <div key={season.id} className="season-items">
                        <div className="left">
                            <p>Season {season.number}</p>
                            <p>
                                Episodes: <span>{season.episodeOrder}</span>
                            </p>
                        </div>
                        <div className="right">
                            Aired:{' '}
                            <span>
                                {season.premiereDate} - {season.endDate}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Season
