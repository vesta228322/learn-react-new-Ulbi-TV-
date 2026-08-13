import { useState } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

import './styles/App.scss';
import MySelect from "./components/UI/select/MySelect";

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

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    }


    return (
        <div className="App">
            <PostForm create={createPost} />
            <hr style={{margin: '15px 0'}} />
            <div>
                <MySelect
                    defoultValue={'Сортировка'}
                    options={[
                        {value: 'title', name: 'По названию'},
                        {value: 'body', name: 'По описанию'},
                        ]}
                />
            </div>
            {
                posts.length
                    ? 
                    <PostList remove={removePost} posts={posts} title={'Посты про JS'} />
                    : 
                    <h1
                        style={{ textAlign: 'center' }} >
                        Посты не найдены
                    </h1>
            }
            {/* <PostList posts={posts2} title={'Посты про Python'} /> */}
        </div>
    );
}

export default App;

// Продолжить урок (просмотр на 1:02:22) 