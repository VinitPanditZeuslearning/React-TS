import '../index.css'
import '../dashboard.css'
import CustomDropDown from './CustomDropDown';

import Announcement from "./Anouncement";

export default function Header() {


    function openMenue() {
        console.log('click')
        const hembr = document.getElementById('hemburger') as HTMLElement;
        const menubar = document.getElementById('menuBar') as HTMLElement;
        if (!hembr || !menubar) { return }
        hembr.classList.toggle('rotate');
        menubar.classList.toggle('slide');
    }
    function openAnnoucement() {
        const announcementbar = document.getElementById('announcementsBar') as HTMLElement;
        const announcementsImg = document.getElementById('announcementsImg') as HTMLElement;
        


        announcementbar.classList.toggle('announcementsBarOpen')
        announcementsImg.classList.toggle('svgSelected')
    }

    const announcementsData = [
        {
            Announcer: 'Wilson Kumar',
            Description: 'No Classes Will be held on 21s Nov',
            ID: 1,
            Attachments: 2,
            Date: new Date("2018-09-15"),
            isRead: true
        },
        {
            Announcer: 'Wilson Kumar',
            Description: 'No Classes Will be held on 21s Nov',
            ID: 1,
            Attachments: 2,
            Date: new Date("2018-09-15"),
            isRead: true
        },
        {
            Announcer: 'Wilson Kumar',
            Description: 'No Classes Will be held on 21s Nov',
            ID: 2,
            Attachments: 2,
            Date: new Date("2018-09-15")
        }
    ];

    return (
        <>
            <div className="header">
                <div>
                    <img id="logo" src="./static/logo_used_in_header.svg" alt="" />
                </div>
                <div className='menuBar' id='menuBar' >
                    <CustomDropDown mainName='DASHBOARD' ID={1}></CustomDropDown>
                    <CustomDropDown mainName='CONTENT' options={["COURSE CATALOG", "SOMETHING ELSE"]} ID={2}></CustomDropDown>
                    <CustomDropDown mainName='USERS' options={["COURSE CATALOG", "SOMETHING ELSE"]} ID={3}></CustomDropDown>
                    <CustomDropDown mainName='REPORT' ID={4}></CustomDropDown>
                    <CustomDropDown mainName='REPORT' ID={5}></CustomDropDown>
                    <CustomDropDown mainName='ADMIN' ID={6}></CustomDropDown>
                </div>
                <ul className="navbar">
                    <li className='menuItems'> DASHBOARD</li>
                    <li className='menuItems'> CONTENT</li>
                    <li className='menuItems'> USERS</li>
                    <li className='menuItems'> REPOSRTS</li>
                    <li className='menuItems'> ADMIN</li>
                    <li>
                        <img className="alertsImg" src="./static/alerts.svg" alt="" />
                    </li>
                    <li>
                        <img className="announcementsImg" id='announcementsImg' src="./static/announcements.svg" alt="" onClick={() => { openAnnoucement() }}>

                        </img>
                        <div className='announcementsBar' id='announcementsBar'>
                            {
                                announcementsData.map((obj, ind) => (
                                    <Announcement
                                        {...obj} ID={ind} />
                                ))
                            }
                        </div>
                    </li>
                    <li>
                        <img className="accountImg" src="./static/account_circle.svg" alt="" />
                    </li>
                    <li className='hemburger' onClick={() => { openMenue() }} >
                        <img id='hemburger' src="./static/hamburger.svg" />
                    </li>
                </ul>
            </div>
        </>
    )
}
