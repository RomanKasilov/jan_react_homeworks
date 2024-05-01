import React, {FC, useState} from 'react';
import {AllUsersComponent} from "./components";
import {getPostsByUserId} from "./services";
import {IPost} from "./models";

const App: FC = () => {

    const [posts, setPosts] = useState<IPost[]>([])
    const getUserId=(userId:number)=>{
       getPostsByUserId(userId).then(({data})=>setPosts(data))
    }
    console.log(posts)
  return (
      <>
<AllUsersComponent getUserId={getUserId}/>
      </>
  );
};

export {App};


