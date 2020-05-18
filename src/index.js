import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Todo from './components/Todo.js';

function Main(){
        return(
            <div class="todo">
                <Todo/>
            </div>
        )
}

ReactDOM.render(<Main/>,document.getElementById('root'));