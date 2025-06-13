import React from "react";
import styled from "styled-components";


const Container = styled.div`
width: 100%;

.AnnouncementContainer {
    display: flex;
    flex-direction: column;
    background: #ffffff;
    padding: 16px;
    gap: 8px;
}
.AnnouncerName {
    font-size: 12px;
    color: black;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
}
.Description {
    font-size: 14px;
    color: black;
}
.attachementNdate {
    color: #6E6E6E;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}
.attachedImg {
    height: 13px;
}
.Attachments {
    display: flex;
    align-items: center;
}
.acceptImg {
    height: 15px;
}
`

const Announcement: React.FC<{ Announcer: string, Description: string, ID: number, Date: Date, isRead?: boolean, Attachments: number }> = ({ Announcer, Description, Date, isRead, Attachments }) => {


    return (
        <Container>
            <div>
                <div className="AnnouncementContainer" style={{backgroundColor : isRead ? "white" : "#FFFFEE" }}>
                    <div className="AnnouncerName"> 
                        <span> {Announcer} </span>
                        <img className="acceptImg" src={`./${isRead ? "accept" : "minus"}.png`} />
                    </div>
                    <span className="Description"> {Description}</span>
                    <div className="attachementNdate">
                        <span className="Attachments"> 
                            <img className="attachedImg" src="./attached.png" /> {Attachments + " files are attached"}
                        </span>
                        <span className="date"> {`${Date.getDate()}-${Date.getMonth()}-${Date.getFullYear()} at ${((Date.getHours() - 1) % 12) + 1}:${Date.getMinutes()} ` + (Date.getHours() > 12 ? "PM" : "AM")}</span>
                    </div>
                </div>
            </div>
            <hr></hr>
        </Container>
    )
}


export default Announcement