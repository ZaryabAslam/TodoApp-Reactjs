import React from 'react'

function Todoelements (props){
return (
    <div>
        <div className="todo_style">
            <i className="fa fa-times" aria-hidden="true" onClick={()=>{
                props.onSelect(props.id); // particular id of particuolar item to be deleted
            }} />
            {/* the line above is a fontawesome icon and it is added in index.html */}
        <li>{props.todoitem}</li>
        </div>
    </div>
)
}

export default Todoelements;