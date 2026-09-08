import { useMemo, useState } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

import './styles/App.scss';
import PostFilter from "./components/PostFilter";

function App() {

    const [posts, setPosts] = useState([
        { id: 1, title: 'ааа', body: 'бб' },
        { id: 2, title: 'гг 2', body: 'аа' },
        { id: 3, title: 'вв 3', body: 'яя' }
    ])

    // const [posts2, setPosts2] = useState([
    //     { id: 1, title: 'Python', body: 'Description' },
    //     { id: 2, title: 'Python 2', body: 'Description' },
    //     { id: 3, title: 'Python 3', body: 'Description' }
    // ])

    const [filter, setFilter] = useState({ sort: '', query: '' })
    const sortedPost = useMemo(() => {

        if (filter.sort) {
            [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts;
    }, [filter.sort, posts]);

    const sortedAndSearchPost = useMemo(() => {
        return sortedPost.filter(post => post.title.toLocaleLowerCase().includes(filter.query))
    }, [filter.query, sortedPost])

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    }

    return (
        <div className="App">
            <PostForm create={createPost} />
            <MyButton style={{ marginTop: '30px' }} onClick={() => setModal(true)} >
                Создать пользователя дыбилушку
            </MyButton>
            <MyModal visible={modal} setVisible={setModal} >
                <PostForm create={createPost} />
            </MyModal>
            <hr style={{ margin: '15px 0' }} />
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            {
                sortedAndSearchPost.length
                    ?
                    <PostList remove={removePost} posts={sortedAndSearchPost} title={'Посты про JS'} />
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
