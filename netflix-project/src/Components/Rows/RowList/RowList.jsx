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
      isLargeRow={true}/>
      <Row title="Action Movies" fetchUrl={Requests.fetchActionMovies} 
      isLargeRow={true}/>
      <Row title="Commedy Movies" fetchUrl={Requests.fetchCommedyMovies} 
      isLargeRow={true}/>
      <Row title="Horror Movies" fetchUrl={Requests.fetchHorrorMovies} 
      isLargeRow={true}/>
      <Row title="Romance Movies" fetchUrl={Requests.fetchRomanceMovies} 
      isLargeRow={true}/>
      <Row title="TV Shows" fetchUrl={Requests.fetchTvShows} 
      isLargeRow={true}/>
      <Row title="Documentaries" fetchUrl={Requests.fetchDocumentaries} 
      isLargeRow={true}/>
    </>
  )
}

export default RowList
