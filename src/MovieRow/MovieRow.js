import React from 'react';

 class MovieRow extends React.Component {

     viewMovie() {
         const url = 'https://www.themoviedb.org/movie/' + this.props.movie.id
         window.location.href = url
     }

     render() {
         return (
             <div>
                 <table>
                     <tbody>
                     <tr>
                         <td>
                             <img alt='poster' width='200' height='300' src={this.props.movie.poster_src}/>
                         </td>
                         <td>
                             <h3>{this.props.movie.title}</h3>
                             <br/>
                             <p>{this.props.movie.overview}</p>
                             <input type='button' onClick={this.viewMovie.bind(this)} value='View'/>
                         </td>
                     </tr>
                     </tbody>
                 </table>
             </div>
         );
     }
 }

export default MovieRow;
