import { useRef, useState } from "react";
import Counter from "./components/Counter";
import ClassCouner from "./components/ClassCouner";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from './components/UI/input/MyInput';

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

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const addNewPost = (e) => {
        e.preventDefault();

        // ПРОДОЛЖИТЬ УРОК ПО ВИДОСУ (ЗАКОНЧИЛИ НА 53:51)
    }

    return (
        <div className="App">
            <form >
                <MyInput
                    type="text"
                    placeholder="Название поста"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <MyInput
                    type="text"
                    placeholder="Описание поста"
                    value={body}
                    onChange={e => setBody(e.target.value)}
                />
                <MyButton onClick={addNewPost} >Создать пост</MyButton>
            </form>
            <PostList posts={posts} title={'Посты про JS'} />
            {/* <PostList posts={posts2} title={'Посты про Python'} /> */}
        </div>
    );
}

export default App;