import React from 'react';

export default class Courses extends React.Component{

    constructor(props)
    {
        super(props);
        this.state = {
            groupBy: 'year',
            sortBy: 'grade',
            courses: this.props.courses
        }
        this.groups = ['year', 'school', 'season', ];
        this.sortCols = ['d', 'd', 'd', 'd', 'd', 'd', 'd'];
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
        let sortedCourses = this.state.courses.sort((x,y) => {
            return x[field] > y[field];
        });
        this.sortCols[col] = 'd';
        if (this.sortCols[col] === 'd')
        {
            sortedCourses.reverse();
            this.sortCols[col] = 'u';
        }
        this.setState({courses: sortedCourses});
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
                <td>{v.schoolYear}</td>
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
                        <th onClick={() => this.sortBy('schoolYear', 5)}>School Year</th>
                        <th onClick={() => this.sortBy('grade', 6)}>Grade</th>
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