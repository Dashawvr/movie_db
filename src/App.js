import React,{Component} from 'react';
import './App.css';
import MovieRow from './MovieRow/MovieRow';
import $ from 'jquery';

class App extends Component{
constructor(props) {
    super(props);
    this.state = []

    const movies =  [
        {
            id: 0,
            poster_src: 'https://kinogo.by/uploads/posts/2020-05/1590436745-680255110-parni-so-stvolami-KINOGO_BY.jpg' ,
            title: 'Avengers',
            overview: 'David works as a simple masseur. ' +
                'A man no longer hopes to become a rich man, because his work does not bring a lot of money.'},
        {
            id: 1,
            poster_src: 'https://kinogo.by/uploads/posts/2017-08/1502106425-658715812-skaylayn-2-KINOGO_BY.jpg',
            title: 'Skyline 2',
            overview: 'The fantastic movie “Skyline 2” is considered a continuation of the first part, ' +
                'which told the story of several friends who woke up after a loud party and noticed how very bright beams ' +
                'of light hit their window.'}
    ]

    // let movieRows =[]
    // movies.forEach((movie)=> {
    //     console.log(movie.title);
    //     const movieRow = <MovieRow movie={movie}/>
    //     movieRows.push(movieRow)
    // })
    //
    // this.state = { rows: movieRows}

    this.performSearch('avengers')
}

    performSearch(searchTerm) {
        console.log('Perform search using moviedb')
        const urlString = 'https://api.themoviedb.org/3/search/movie?api_key=64c32911770a2945939d730331517194&query=' + searchTerm
        $.ajax({
            url: urlString,
            success: (searchResults)=> {
                // console.log('Fetched data successful!..');
                // console.log(searchResults);
                const results = searchResults.results;
                // console.log(results[0]);
                let movieRows =[];
                results.forEach((movie)=> {
                    movie.poster_src = 'https://image.tmdb.org/t/p/w185' + movie.poster_path
                    // console.log(movie.poster_path)
                    const movieRow = <MovieRow key={movie.id} movie={movie}/>
                    movieRows.push(movieRow)
                })

                this.setState({rows: movieRows})
            },
            error: (xhr, status,err) => {
                console.error('fetched error!!')
            }
        })
    }

    searchHandler (event)  {
        console.log(event.target.value)
        const boundObject = this
        const searchTerm = event.target.value
        boundObject.performSearch(searchTerm)

    }

  render() {
    return (
        <div>
          <table className='tableBar'>
            <tbody>
            <tr>
              <td>
                <img width='50' src='green_app_icon.jpg' alt="logo icon"/>
              </td>
              <td width='8'/>
              <td>
                <h1>MovieDB Search</h1>
              </td>
            </tr>
            </tbody>
          </table>
          <input style={{
              fontSize: 24,
              display: 'block',
              width: '99%',
              paddingTop: 8,
              paddingLeft: 16,
              paddingBottom: 8
          }} onClick={this.searchHandler.bind(this)}  placeholder='Enter search therm'/>

            {this.state.rows}
        </div>
    )
  }
}

export default App;
