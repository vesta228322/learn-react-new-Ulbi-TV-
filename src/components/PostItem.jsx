import React from 'react'
import MyButton from './UI/button/MyButton';

function PostItem(props) {



    return (
        <div ref={props.ref} className="post">
            <div className="post__content">
                <strong>{props.number}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="post__btns">
                <MyButton onClick={() => props.remove(props.post)} >Удалить</MyButton>
            </div>
        </div>
    )
}

export default PostItem;