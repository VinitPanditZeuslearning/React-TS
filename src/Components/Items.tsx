import styled from 'styled-components'
import VerticalLine from './VerticalLine'
import type React from 'react';
import type { ClassData } from '../types';
const Container = styled.div`
background-color: #ffffff;
padding: 8px;
.mainContainer {
    display: flex;
    flex-direction: row;
    position: relative;
    margin: auto;
    width: 100%;
}
img {
    margin: 16px;
    height: 157px;
}
.SubjContent {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    margin-top: 16px;
    gap: 7px;
}
.itemName {
    font-weight: 600;
    font-size: 16px;
    width: 100%;
}
.itemsubjGrade {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 9px;
}
.simpTxt {
    font-size: 12px;
    color: #666666;
}
.CourseContent {
    display: flex;
    gap: 8px;
    align-items: center;
    padding-left: 5px;
    flex-wrap: wrap;
}
b {
    color: black;
    margin-right: 5px;
}
.teachersDropDown {
    width: 100%;
}
.studentsNdate {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
}
.recentClass {
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: flex-start;
    justify-content: space-between;
}
.favLogo {
    position: absolute;
    height: 24px;
    width: 24px;
    top: 0;
    right: 0;
    margin: 0;
}
.lowerBar {
    /* width: 100%; */
    margin: 16px;
}
.iconsCont {
    display: flex;
    /* gap: 101px; */
    justify-content: space-around;
}
.iconsCont img {
    height: 20px;
}
.greenPlus {
    color:  green;
}
`


const Items: React.FC<ClassData> = ({ img, topicName, Subject, Grade, units, lessons, topics, recentClass, isFav, iconsObj }) => {
    const dateData = `${recentClass.Date[0].getDate()}-${recentClass.Date[0].getMonth()}-${recentClass.Date[0].getFullYear()} - ${recentClass.Date[1].getDate()}-${recentClass.Date[1].getMonth()}-${recentClass.Date[1].getFullYear()}`

    const grade: number = Math.min(...Grade);
    const plus: string = Grade.length > 1 ? `+ ${Grade.length - 1}` : "";
    return (
        <Container>
            <div className='mainContainer'>
                <img src={img} alt="" />
                <img src="./static/favourite.svg" alt="" className={`favLogo ${!isFav ? "svgGrey" : ""}`} />
                <div className="itemContent">
                    <div className="SubjContent">
                        <div className='itemName' > {topicName}</div>
                        <div className='itemsubjGrade'>
                            <span className='simpTxt itemSubjName' >{Subject}</span>
                            <VerticalLine size={12} />
                            <span className='simpTxt itemGrade' >{`${grade}`}  {plus != "" ? (<span className='greenPlus'> {plus} </span>) : ""}</span>
                        </div>
                        <div className='CourseContent'>
                            <div className='simpTxt units' >
                                <b>{units}</b>
                                Units
                            </div>
                            <div className='simpTxt Lessons' >
                                <b>{lessons}</b>
                                Lessons
                            </div>
                            <div className='simpTxt Topics' >
                                <b>{topics}</b>
                                Topics
                            </div>
                        </div>
                        <div className='recentClass'>

                            <select name="teachers" className="dropDown teachersDropDown">
                                {
                                    (!recentClass?.teachers || recentClass.teachers.length === 0)
                                        ? (<option style={{ color: "#666666" }} value={"NoClasses"}>

                                            No Classes
                                        </option>)
                                        : recentClass.teachers.map((nam, index) => (
                                            <option key={index} value={nam}>{nam}</option>
                                        ))
                                }
                            </select>
                            <hr />


                            <div className='studentsNdate'>
                                <div className='simpTxt'>
                                    <span>{recentClass.students} </span>
                                    students
                                </div>

                                <VerticalLine />

                                <div className='simpTxt'>
                                    {dateData}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='loweBar'>
                <hr />
                <div className='iconsCont'>
                    <img src="./static/preview.svg" alt="" style={{ opacity: iconsObj.preview ? 1 : 0.2 }} />
                    <img src="./static/reports.svg" alt="" style={{ opacity: iconsObj.reports ? 1 : 0.2 }} />
                    <img src="./static/manage_course.svg" alt="" style={{ opacity: iconsObj.manage_course ? 1 : 0.2 }} />
                    <img src="./static/grade_submissions.svg" alt="" style={{ opacity: iconsObj.grade_submissions ? 1 : 0.2 }} />
                </div>
            </div>
        </Container>
    )
}


export default Items