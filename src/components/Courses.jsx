import React from 'react';

export default class Courses extends React.Component{

    constructor(props)
    {
        super(props);
        this.state = {
            courses: [
                {
                    id: 1,
                    name: "History 101",
                    school: "RVCC",
                    code: "HIST 101",
                    grade: "B",
                    year: 2010,
                    season: "FALL"
                },
                {
                    id: 2,
                    name: "Science 200",
                    schools: "RSC",
                    code: "BIO 101",
                    grade: 'C',
                    year: 2009,
                    season: "SPRING"
                },
                {
                    id: 3,
                    name: "Science 202",
                    schools: "RSC",
                    code: "CHEM 101",
                    grade: 'C-',
                    year: 2009,
                    season: "SPRING"
                }
            ]
        }

        this.groupingByYear();
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
        })

        console.log(map);
    }

    render()
    {
        let courses = this.state.courses.map((v,i) => {
            return <tr key={i}>
                <td>{v.year}</td>
                <td>{v.season}</td>
                <td>{v.name}</td>
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