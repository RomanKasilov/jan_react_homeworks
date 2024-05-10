import React, {FC, useState} from 'react';

import {AllUsersComponent} from "./components";
import {getPostsByUserId} from "./services";
import {AllPostsComponent} from "./components/posts_components";

import {IPost} from "./models";
import './App.css'
const App: FC = () => {

    const [posts, setPosts] = useState<IPost[]>([])


    const getUserId=(userId:number)=>{
       getPostsByUserId(userId).then(({data:{posts}})=>setPosts(posts))
    }
    console.log(posts)
  return (
      <div className='wrapper'>
<AllUsersComponent getUserId={getUserId}/>
    <AllPostsComponent posts ={posts} />
      </div>
  );
};

export {App};


