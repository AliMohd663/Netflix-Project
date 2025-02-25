import React from 'react'
import Row from '../Row/Row'
import Requests from '../../../utils/Requests'

const RowList = () =>{
  return (
    <>
      <Row 
           title="NETFLIX ORIGINALS"
           fetchUrl={Requests.fetchNetflixOriginals}
           isLargeRow={true} />
      <Row title="Trending Now" fetchUrl={Requests.fetchTrending} 
      />
      <Row title="Action Movies" fetchUrl={Requests.fetchActionMovies} 
      />
      <Row title="Commedy Movies" fetchUrl={Requests.fetchCommedyMovies} 
      />
      <Row title="Horror Movies" fetchUrl={Requests.fetchHorrorMovies} 
      />
      <Row title="Romance Movies" fetchUrl={Requests.fetchRomanceMovies} 
      />
      <Row title="TV Shows" fetchUrl={Requests.fetchTvShows} 
      />
      <Row title="Family" fetchUrl={Requests.fetchFamily} 
      />
    </>
  )
}

export default RowList
