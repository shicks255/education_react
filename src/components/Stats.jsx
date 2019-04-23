import React from 'react';

export default class Stats extends React.Component {
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
            <div>
                Pie Graph of Grades<br/>
                Timeline of Classes<br/>
                Average By Semester Line Graph<br/>
                Count of Grades Bar Graph<br/>
            </div>
        );
    }

}