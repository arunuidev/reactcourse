import { useState } from 'react';
import './friendList.css'

function FriendList(){
    const initialFriends = [
        {
          id: 118836,
          name: "Clark",
          image: "https://i.pravatar.cc/48?u=118836",
          balance: -7,
        },
        {
          id: 933372,
          name: "Sarah",
          image: "https://i.pravatar.cc/48?u=933372",
          balance: 20,
        },
        {
          id: 499476,
          name: "Anthony",
          image: "https://i.pravatar.cc/48?u=499476",
          balance: 0,
        },
      ];

      const [list, setList] = useState(initialFriends)
      
      function addFriend(){
        let obj = {
            id: 499477,
            name: (Math.random() + 1).toString(36).substring(7),
            image: "https://i.pravatar.cc/48?u=499477",
            balance: 1,
        }
        let newList  = list.map(val=> val);
        newList.push(obj);
        setList(newList);
      }
    return(
        <div className='top'>
        <ul>{list.map((val)=> <li className="cards">
            <img src={val.image} />
            <p>{val.name}</p>
            <p className="balance">${val.balance}</p>
        </li>)}
        </ul>
        <button className='btnClass' onClick={()=> addFriend()} type='button'>Add Friend</button>
        </div>
    )
}

export default FriendList;