import { useState } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

import './styles/App.scss';

function App() {

    const [posts, setPosts] = useState([
        { id: 1, title: 'JavaScript', body: 'Description' },
        { id: 2, title: 'JavaScript 2', body: 'Description' },
        { id: 3, title: 'JavaScript 3', body: 'Description' }
    ])

    // const [posts2, setPosts2] = useState([
    //     { id: 1, title: 'Python', body: 'Description' },
    //     { id: 2, title: 'Python 2', body: 'Description' },
    //     { id: 3, title: 'Python 3', body: 'Description' }
    // ])

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
    }


    return (
        <div className="App">
            <PostForm create={createPost} />
            <PostList posts={posts} title={'Посты про JS'} />
            {/* <PostList posts={posts2} title={'Посты про Python'} /> */}
        </div>
    );
}

export default App;

// Продолжить урок (просмотр на 1:02:22) 