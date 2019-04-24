import React from 'react';

export default class Courses extends React.Component{

    constructor(props)
    {
        super(props);
        this.state = {
            groupBy: 'year',
            sortBy: 'grade',
            courses: this.props.courses,
            sortCols: ['d', 'd', 'd', 'd', 'd', 'd']
        }
        this.groups = ['year', 'school', 'season', ];
        this.groupingByYear();

        this.sortBy = this.sortBy.bind(this);
    }

    getSeasons()
    {
        return new Set(this.state.courses.map(v => v.season));
    }

    getYears()
    {
        return new Set(this.state.courses.map(v => v.year));
    }

    groupingByYear()
    {
        let map = {};

        let courses = this.state.courses.sort((a,b) => {
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

    sortBy(field, col)
    {
        let sortCols = this.state.sortCols;
        let sortedCourses = this.state.courses.sort((x,y) => {
            if(x[field] < y[field])
                return 1;
            if (x[field] > y[field])
                return -1;

            if (x.year > y.year)
                return -1;
            if (x.year < y.year)
                return 1;
        });

        if (this.state.sortCols[col] == 'd')
        {
            sortCols[col] = 'u';
            this.setState({courses: sortedCourses, sortCols: sortCols});
        }
        else if (this.state.sortCols[col] === 'u')
        {
            sortedCourses.reverse();
            sortCols[col] = 'd';
            this.setState({courses: sortedCourses, sortCols: sortCols});
        }
    }

    render()
    {
        let courses = this.state.courses.map((v,i) => {
            return <tr key={v.id}>
                <td>{v.year}</td>
                <td>{v.season}</td>
                <td>{v.school.acronim}</td>
                <td>{v.courseCode}</td>
                <td>{v.courseName}</td>
                <td>{v.grade}</td>
                <td></td>
            </tr>
        });

        return (
            <div>
                <table>
                    <thead>
                    <tr>
                        <th onClick={() => this.sortBy('year', 0)}>Year</th>
                        <th onClick={() => this.sortBy('season', 1)}>Season</th>
                        <th onClick={() => this.sortBy('school', 2)}>School</th>
                        <th onClick={() => this.sortBy('courseCode', 3)}>Code</th>
                        <th onClick={() => this.sortBy('courseName', 4)}>Name</th>
                        <th onClick={() => this.sortBy('grade', 5)}>Grade</th>
                        <th>Coursework</th>
                    </tr>
                    </thead>
                    <tbody>
                    {courses}
                    </tbody>
                </table>
            </div>
        );
    }


}