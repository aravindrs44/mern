import React, {useState} from 'react';

const Tabs = props =>   {
    const tabs = [
        {
            title: "Tab 1",
            content: "The blacker the berry, ",
            selected: true
        },
        {
            title: "Tab 2",
            content: "the sweeter",
            selected: false
        },
        {
            title: "Tab 3",
            content: "the juice!",
            selected: false
        },
    ]

    const [index, setIndex] = useState(0);

    const handleSubmit = e => {
        setIndex(e.target.name);
    }

    return(
        <div>
            {
                tabs.map((tab, i) => {
                    return(
                    <div>
                        <button name = {i} key = {i} onClick = {(e) => handleSubmit(e)}>{tab.title}</button>
                    </div>
                )})
            }
            <h1>{tabs[index].content}</h1>
        </div>
    );
}

export default Tabs;