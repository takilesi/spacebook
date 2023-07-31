import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/app_context'
import { Link } from 'react-router-dom'

const FeedItem = ( {friend, index, parent} ) => {

    let { mainProfile, getRandomIntInclusive, time, setClickedProfile, qoutes, getQuote, kQuote } = useContext(AppContext)

    // temp api
    // let kQuote = getQuote()
    // console.log(kQuote)

    const [ likes, setLikes ] = useState(0)
    
    const hide = (what) => {
        what.classList.add('hide')
    }

    const focusOn = (who) => {
        who.focus() // sets focus to comment clicked
    }

    const repeat = (words, howMany) => {
      let quote = ""
      for(let i = 0; i < howMany; i++){
        quote+= words
      }
      // console.log(quote)
      return quote
    }

    // let quote = repeat(kQuote, getRandomIntInclusive(1,1)) //rerenders every screen resize

    const mobile = () => {
      return(
        <div className={`friendPost post${index}`}>
      <div className="top">
      <Link to={`/profile/${friend?.name.replaceAll(' ','')}`}>
        <div className="left" onClick={() => setClickedProfile(friend)}>
            <img src={friend?.image} alt="" srcset="" />
            <div className="">
                <h4>{friend?.name}</h4>
                <p className='globe'>{time}h 🌍</p>
                {/* updates everytime state is altered ... */}
            </div>
        </div>
      </Link>

        <div className="right">
            <div className="">
                <img src="https://static.thenounproject.com/png/1380510-200.png" alt="" className="dots" />
            </div>

            <div className="" onClick={() => hide(document.querySelector(`.post${index}`))}>
                <p className='exit'>X</p>
            </div>
        </div>

      </div>

      <div className="textArea">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus dicta vitae impedit repellendus odio iure temporibus quo placeat hic, nemo aspernatur maxime dolorem molestiae sequi.</p>
      </div>

      <div className="reactions">
        {likes && 
        <div className="top">
            <p>👍{likes && likes}</p>
            <p>2💬</p>
        </div>
        }
        <hr />

        <div className="options">
            <p onClick={() => setLikes(likes + 1)}>👍 Like</p>
            <p onClick={() => focusOn(document.querySelector(`.input${index}`))}>💬 Comment</p>
            <p>➦ Share</p>
        </div>

        <hr />

        <div className="comments">
            {/* <p className='viewMore'>View more comments</p> */}

            <div className="commentContainer">
                <img src={friend?.image} alt="" srcset="" />
                <div className="comment">
                    <p className="name">{friend?.name}</p>
                    <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
        </div>

        <div className="addComment">
            <img src={mainProfile?.image} alt="" srcset="" />
            <input type="text" placeholder='Write a comment...' className={`input${index}`}/>
        </div>

      </div>
    </div>
      )
    }

    const other = () => {
      return (
        <div className={`friendPost post${index}`}>
          <div className="top">
          <Link to={`/profile/${friend?.name.replaceAll(' ','')}`}>
            <div className="left" onClick={() => setClickedProfile(friend)}>
                <img src={friend?.image} alt="" srcset="" />
                <div className="">
                    <h4>{friend?.name}</h4>
                    <p className='globe'>{time}h 🌍</p>
                    {/* updates everytime state is altered ... */}
                </div>
            </div>
          </Link>
    
            <div className="right">
                <div className="">
                    <img src="https://static.thenounproject.com/png/1380510-200.png" alt="" className="dots" />
                </div>
    
                <div className="" onClick={() => hide(document.querySelector(`.post${index}`))}>
                    <p className='exit'>X</p>
                </div>
            </div>
    
          </div>
    
          <div className="textArea">
            {/* ann api */}
            <p>{qoutes ? qoutes?.content : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione vero officia nostrum praesentium, sequi est ab laboriosam quas delectus itaque. Sed perferendis omnis doloribus repellendus.' }</p>
          </div>
    
          <div className="reactions">
            {likes && 
            <div className="top">
                <p>👍{likes && likes}</p>
                <p>2💬</p>
            </div>
            }
            <hr />
    
            <div className="options">
                <p onClick={() => setLikes(likes + 1)}>👍 Like</p>
                <p onClick={() => focusOn(document.querySelector(`.input${index}`))}>💬 Comment</p>
                <p>➦ Share</p>
            </div>
    
            <hr />
    
            <div className="comments">
                {/* <p className='viewMore'>View more comments</p> */}
    
                <div className="commentContainer">
                    <img src={friend?.image} alt="" srcset="" />
                    <div className="comment">
                        <p className="name">{friend?.name}</p>
                        <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
    
            <div className="addComment">
                <img src={mainProfile?.image} alt="" srcset="" />
                <input type="text" placeholder='Write a comment...' className={`input${index}`}/>
            </div>
    
          </div>
        </div>
      )

    }

    return parent === "mobile" ? mobile() : other()
}

export default FeedItem
