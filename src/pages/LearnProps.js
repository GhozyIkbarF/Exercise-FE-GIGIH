import React from 'react'
import Data from '../Component/LearnProps/Index'

export default function Index() {
    const gif = {
        id: '4HrBfVJJveBNS9ytSk',
        title: 'Nintendo Plotting GIF by Gaming GIFs',
        uploadedDate: '2018-04-03 15:21:50',
        url: 'https://media4.giphy.com/media/4HrBfVJJveBNS9ytSk/200w.gif?cid=cb3f2bebpuo6jj0g5f9gfibjre2zzbb4yb1cfshtplanlrpw&rid=200w.gif&ct=g',
        webp: 'https://media4.giphy.com/media/4HrBfVJJveBNS9ytSk/giphy.webp?cid=cb3f2bebpuo6jj0g5f9gfibjre2zzbb4yb1cfshtplanlrpw&rid=giphy.webp&ct=g',
      }

    const ID = gif.id;
    const TITTLE = gif.title;
    const URL_IMG = gif.url;
    const URL_SOURCE = gif.webp;
  return (
    <div>
        <Data 
            id={ID}
            title={TITTLE}
            url_img={URL_IMG} />
    </div>
  )
}
