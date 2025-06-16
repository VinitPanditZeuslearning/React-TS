import { useRef, useState } from 'react'
import Items from '../Components/Items'
import '../dashboard.scss'
import type { ClassData } from '../types';
export default function DashBoard() {
    const selctorRef = useRef<HTMLDivElement>(null);
    // true --> left, false --> right
    const [ selectorLeft, setSelectorLeft ]  = useState<boolean>( true )
    const itemsData : Array<ClassData> = [
        {
            img: './static/img1.svg',
            topicName: "Acceleration",
            Subject: "Physics",
            Grade: [7],
            units: 4,
            lessons: 18,
            topics: 24,
            recentClass: {
                teachers: ["Mr.Frank's Class B"],
                students: 50,
                Date: [new Date("2020-01-20"), new Date("2020-08-20")]
            },
            isFav: true,
            iconsObj: {
                preview: true,
                reports: true,
                manage_course: true,
                grade_submissions: true
            }
        },
        {
            img: './static/img2.svg',
            topicName: "Displacement, Velocity and Speed",
            Subject: "Physics 2",
            Grade: [6, 7, 8, 9],
            units: 2,
            lessons: 15,
            topics: 24,
            recentClass: {
                teachers: [],
                students: 50,
                Date: [new Date("2020-01-20"), new Date("2020-08-20")]
            },
            isFav: true,
            iconsObj: {
                preview: false,
                reports: true,
                manage_course: false,
                grade_submissions: true
            }
        },
        {
            img: './static/img3.svg',
            topicName: "Displacement, Velocity and Speed",
            Subject: "Physics 2",
            Grade: [6],
            units: 2,
            lessons: 15,
            topics: 24,
            recentClass: {
                teachers: ["Mr.Frank's Class B"],
                students: 50,
                Date: [new Date("2020-01-20"), new Date("2020-08-20")]
            },
            isFav: false,
            iconsObj: {
                preview: true,
                reports: false,
                manage_course: true,
                grade_submissions: false
            }
        },
        {
            img: './static/img3.svg',
            topicName: "Displacement, Velocity and Speed",
            Subject: "Physics 2",
            Grade: [6],
            units: 2,
            lessons: 15,
            topics: 24,
            recentClass: {
                teachers: ["Mr.Frank's Class B"],
                students: 50,
                Date: [new Date("2020-01-20"), new Date("2020-08-20")]
            },
            isFav: false,
            iconsObj: {
                preview: true,
                reports: true,
                manage_course: false,
                grade_submissions: false
            }
        }
    ];
    return (
        <div className="mainBoard">
            <div className="corclHead">
                <div ref={selctorRef} className={ `selector ${ selectorLeft ? "" : "selectorRight" }` } id='selector'> </div>
                <div className="counts Courses" id='course' onClick={()=>{ setSelectorLeft( true ) }}>
                    <img src="./static/courses.svg" id='course' alt="" />
                    <span className="boldCount" id='course'>
                        4
                    </span>
                    Courses
                </div>
                <div className="counts classes" id='classes' onClick={()=>{ setSelectorLeft( false ) }}>
                    <img src="./static/courses.svg" alt="" id='classes' />
                    <span className="boldCount" id='classes'>4 </span>
                    Classes
                </div>
            </div>

            <div className="searchParms">
                <div className="searchRes"> showing 4 of 4 </div>

                <div className=" counts sortBy">
                    <span> SortBy: </span>
                    <div>
                        <select name="sortby" className="dropDown">
                            <option value="classes">Classes Name</option>
                            <option value="courses">Courses Name</option>
                        </select>
                        <hr />
                    </div>
                </div>
            </div>
            <hr />
            <div className="itemContainer">

                {itemsData.map((obj ) => (
                    <Items
                        {...obj}
                    />
                ))}
            </div>
        </div>
    )
}
