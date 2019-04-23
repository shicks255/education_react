import React from 'react';

export default class Courses extends React.Component{

    constructor(props)
    {
        super(props);
        this.state = {
            groupBy: 'year',
            sortBy: 'grade'
        }
        this.groups = ['year', 'school', 'season', ];
        this.sorts = ['grade', 'alpha']
        this.groupingByYear();
    }

    getSeasons()
    {
        return new Set(this.props.courses.map(v => v.season));
    }

    getYears()
    {
        return new Set(this.props.courses.map(v => v.year));
    }

    groupingByYear()
    {
        let map = {};

        let courses = this.props.courses.sort((a,b) => {
            if (a.year > b.year)
                return 1;
            if (a.year < b.year)
                return -1;
            return 0;
        });

        courses.forEach(v => {
            if (map[v.year])
                map[v.year].push(v);
            else
                map[v.year] = [v];
        });
        console.log(map);
    }

    render()
    {


        let courses = this.props.courses.map((v,i) => {
            return <tr key={v.id}>
                <td>{v.year}</td>
                <td>{v.season}</td>
                <td>{v.school.acronim}</td>
                <td>{v.courseCode}</td>
                <td>{v.name}</td>
                <td>{v.schoolYear}</td>
                <td>{v.grade}</td>
            </tr>
        });

        return (
            <div>
                <table>
                    <tbody>
                    {courses}
                    </tbody>
                </table>
            </div>
        );
    }


}