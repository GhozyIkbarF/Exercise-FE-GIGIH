import React from 'react'
import Llg from '../Component/ListLooping/ListLooping';
import Article from '../Component/ListLooping/ListLooping';


// const useIsLoggedIn = () => true;
// const LoggedIn = () => {
//     const isLoggedIn = useIsLoggedIn();
//     return (
//         <div>
//             {isLoggedIn && (
//                 <div className='user-profile'>
//                     <div className='user-profile'></div>
//                 </div>
//             )}
//             <button className='btn'>{isLoggedIn ? "Login" : "Logout"}</button>
//         </div>
//     )
// }
// export default LoggedIn;

// const ObjectLoop = () => {
//     const articles = [
//         {
//             id:'1',
//             title: 'Article 1',
//             author: 'John Doe',
//             date: '2017-09-08',
//             content: 'This is the article'
//         },
//         {
//             id:'2',
//             title: 'Article 2',
//             author: 'Om Andi',
//             date: '2017-09-06',
//             content: 'This is the article 2'
//         }
//     ];
//     return (
//         <div style={{
//             width: '100%',
//         }}>
//             {articles.map((article) => {
//             <Article id={article.id} title={article.title} author={article.author} content={article.content} />
//         })}
//         </div>
        
//     )
// }    
// export default ObjectLoop;

export default function ListLooping() {
    const data = [
        {
          id: '4HrBfVJJveBNS9ytSk',
          title: 'Nintendo Plotting GIF by Gaming GIFs',
          rating: 'g',
          uploadedDate: '2018-04-03 15:21:50',
          url: 'https://media4.giphy.com/media/4HrBfVJJveBNS9ytSk/200w.gif?cid=cb3f2bebpuo6jj0g5f9gfibjre2zzbb4yb1cfshtplanlrpw&rid=200w.gif&ct=g',
          webp: 'https://media4.giphy.com/media/4HrBfVJJveBNS9ytSk/giphy.webp?cid=cb3f2bebpuo6jj0g5f9gfibjre2zzbb4yb1cfshtplanlrpw&rid=giphy.webp&ct=g',
        },
        {
          id: 'atQF1zaSGq8s8',
          title: 'Super Mario Dancing GIF',
          rating: 'g',
          uploadedDate: '1970-01-01 00:00:00',
          url: 'https://media3.giphy.com/media/atQF1zaSGq8s8/200w.gif?cid=cb3f2bebpuo6jj0g5f9gfibjre2zzbb4yb1cfshtplanlrpw&rid=200w.gif&ct=g',
          webp: 'https://media3.giphy.com/media/atQF1zaSGq8s8/giphy.webp?cid=cb3f2bebpuo6jj0g5f9gfibjre2zzbb4yb1cfshtplanlrpw&rid=giphy.webp&ct=g',
        },
        {
          id: '1bqWJ6PDfW5os',
          title: 'drunk mario GIF',
          rating: 'pg',
          uploadedDate: '2013-10-16 21:20:19',
          url: 'https://media2.giphy.com/media/1bqWJ6PDfW5os/200w.gif?cid=cb3f2bebpuo6jj0g5f9gfibjre2zzbb4yb1cfshtplanlrpw&rid=200w.gif&ct=g',
          webp: 'https://media2.giphy.com/media/1bqWJ6PDfW5os/giphy.webp?cid=cb3f2bebpuo6jj0g5f9gfibjre2zzbb4yb1cfshtplanlrpw&rid=giphy.webp&ct=g',
        },
        {
          id: 'l1KtXmfi3EnjM5zpK',
          title: 'Super Mario Nintendo GIF by Gaming GIFs',
          rating: 'g',
          uploadedDate: '2017-06-13 17:25:22',
          url: 'https://media3.giphy.com/media/l1KtXmfi3EnjM5zpK/200w.gif?cid=cb3f2bebpuo6jj0g5f9gfibjre2zzbb4yb1cfshtplanlrpw&rid=200w.gif&ct=g',
          webp: 'https://media3.giphy.com/media/l1KtXmfi3EnjM5zpK/giphy.webp?cid=cb3f2bebpuo6jj0g5f9gfibjre2zzbb4yb1cfshtplanlrpw&rid=giphy.webp&ct=g',
        },
        {
          id: 'fAnEC88LccN7a',
          title: 'super smash bros slow clap GIF',
          rating: 'g',
          uploadedDate: '2017-09-19 06:31:41',
          url: 'https://media3.giphy.com/media/fAnEC88LccN7a/200w.gif?cid=cb3f2bebpuo6jj0g5f9gfibjre2zzbb4yb1cfshtplanlrpw&rid=200w.gif&ct=g',
          webp: 'https://media3.giphy.com/media/fAnEC88LccN7a/giphy.webp?cid=cb3f2bebpuo6jj0g5f9gfibjre2zzbb4yb1cfshtplanlrpw&rid=giphy.webp&ct=g',
        },
        {
          id: '12QMzVeF4QsqTC',
          title: 'Super Mario Bros 3 Nintendo GIF',
          rating: 'g',
          uploadedDate: '2013-03-20 11:53:05',
          url: 'https://media3.giphy.com/media/12QMzVeF4QsqTC/200w.gif?cid=cb3f2bebpuo6jj0g5f9gfibjre2zzbb4yb1cfshtplanlrpw&rid=200w.gif&ct=g',
          webp: 'https://media3.giphy.com/media/12QMzVeF4QsqTC/giphy.webp?cid=cb3f2bebpuo6jj0g5f9gfibjre2zzbb4yb1cfshtplanlrpw&rid=giphy.webp&ct=g',
        },
        {
          id: 'jxiDBvPYEtTAk',
          title: 'mario GIF',
          rating: 'g',
          uploadedDate: '2013-09-17 06:28:01',
          url: 'https://media2.giphy.com/media/jxiDBvPYEtTAk/200w.gif?cid=cb3f2bebpuo6jj0g5f9gfibjre2zzbb4yb1cfshtplanlrpw&rid=200w.gif&ct=g',
          webp: 'https://media2.giphy.com/media/jxiDBvPYEtTAk/giphy.webp?cid=cb3f2bebpuo6jj0g5f9gfibjre2zzbb4yb1cfshtplanlrpw&rid=giphy.webp&ct=g',
        },
        {
          id: '6c2xTmMjeFxWU',
          title: 'mario GIF',
          rating: 'pg',
          uploadedDate: '2014-09-14 01:17:00',
          url: 'https://media3.giphy.com/media/6c2xTmMjeFxWU/200w.gif?cid=cb3f2bebpuo6jj0g5f9gfibjre2zzbb4yb1cfshtplanlrpw&rid=200w.gif&ct=g',
          webp: 'https://media3.giphy.com/media/6c2xTmMjeFxWU/giphy.webp?cid=cb3f2bebpuo6jj0g5f9gfibjre2zzbb4yb1cfshtplanlrpw&rid=giphy.webp&ct=g',
        },
        {
          id: 'x2woMnCz4W0Vy',
          title: 'mario GIF',
          rating: 'g',
          uploadedDate: '2013-09-19 14:16:18',
          url: 'https://media0.giphy.com/media/x2woMnCz4W0Vy/200w.gif?cid=cb3f2bebpuo6jj0g5f9gfibjre2zzbb4yb1cfshtplanlrpw&rid=200w.gif&ct=g',
          webp: 'https://media0.giphy.com/media/x2woMnCz4W0Vy/giphy.webp?cid=cb3f2bebpuo6jj0g5f9gfibjre2zzbb4yb1cfshtplanlrpw&rid=giphy.webp&ct=g',
        },
      ];

    return (
      <div style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }} className='wrapper'>
        {data.filter(item => item.rating === 'g').map(item => (
            <Llg 
            id={item.id}
            title={item.title}
            url_image={item.url}
            url_source={item.webp}
            rating={item.rating}
            />
        ))}
      </div>
    )
  }
  