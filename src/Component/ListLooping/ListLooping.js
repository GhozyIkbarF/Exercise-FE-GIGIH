import React from 'react'
import './ListLooping.css'

export default function ListLooping({rating,url_image, title, id, url_source}) {
    
  return (
    <div className="col" key={id}>
       <img src={url_image} alt={title} />
       <p className='title'>{title}</p>
       <p>rating: {rating}</p>
       <a className='btn' href={url_source}>click</a>
    </div>
  )
}

// const Article = ({title, author, date, content}) => {
//     return (
//         <div>
//             <h1>{title}</h1>
//             <h2>{date}</h2>
//             <h3>{author}</h3>
//             <h4>{content}</h4>
//         </div>
//     )
// }

// export default Article;


// const Char = ({char}) => <li>{char}</li>;

// const BasicLoop = () => {
//     const chars = ['a', 'b', 'c'];
//     const charList = chars.map(e => <Char char={e} />);

//     return (
//         <ul>{charList}</ul>
//     )
// }

// export default BasicLoop;