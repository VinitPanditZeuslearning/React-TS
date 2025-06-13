import '../index.scss'
import '../dashboard.scss'
import CustomDropDown from './CustomDropDown';

import Announcement from "./Anouncement";
import { useRef } from 'react';
import VerticalLine from './VerticalLine';

export default function Header() {
    const menuBarRef = useRef<HTMLDivElement>(null);
    const hemBurfRef = useRef<HTMLLIElement>(null);
    const announcementbarContainerRef = useRef<HTMLDivElement>(null);
    const announcementsImgRef = useRef<HTMLImageElement>(null);

    const alertImgRef = useRef<HTMLImageElement>(null);
    const alertWrapper = useRef<HTMLDivElement>(null);

    function openMenue() {
        if (!hemBurfRef.current || !menuBarRef.current) { return }
        hemBurfRef.current.classList.toggle('rotate');
        hemBurfRef.current.classList.toggle('svgSelected');
        menuBarRef.current.classList.toggle('slide');
    }

    function openAnnoucement() {
        if (!announcementbarContainerRef.current || !announcementsImgRef.current) { return }
        announcementbarContainerRef.current.classList.toggle('announcementsBarWrapperOpen')
        announcementsImgRef.current.classList.toggle('svgSelected')
    }

    function openAlert() {
        if( !alertWrapper.current ) {
            return;
        }
        alertWrapper.current.classList.toggle('AlertWrapperOpen')

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
            Announcer: 'Samson White',
            Description: 'Guest lecture on Geometry on 20th September',
            ID: 2,
            Attachments: 2,
            Date: new Date("2018-09-15"),
            isRead: true
        },
        {
            Announcer: 'Wilson Kumar',
            Description: 'Additional course materials available on request',
            ID: 3,
            Attachments: 2,
            Date: new Date("2018-09-15")
        },
        {
            Announcer: 'Wilson Kumar',
            Description: 'No classes will be held on 25th Dec',
            ID: 3,
            Attachments: 2,
            Date: new Date("2018-09-15")
        },
        {
            Announcer: 'Wilson Kumar',
            Description: 'Additional course materials available on request',
            ID: 3,
            Attachments: 2,
            Date: new Date("2018-09-15")
        },
        {
            Announcer: 'Wilson Kumar',
            Description: 'No classes will be held on 25th Dec',
            ID: 3,
            Attachments: 2,
            Date: new Date("2018-09-15")
        }
    ];

    const alertData = [
        {
            Announcer: '',
            Description: 'License for Introduction to Algebra has been assinged to your school',
            ID: 1,
            Attachments: 0,
            Date: new Date("2018-09-15"),
            isRead: true
        },
        {
            Announcer: '',
            Description: 'License for Introduction to Algebra has been assinged to your school',
            ID: 1,
            Attachments: 0,
            Date: new Date("2018-09-15"),
            isRead: true
        },
        {
            Announcer: '',
            Description: 'License for Introduction to Algebra has been assinged to your school',
            ID: 1,
            Attachments: 0,
            Date: new Date("2018-09-15"),
            isRead: false
        },
        {
            Announcer: '',
            Description: 'License for Introduction to Algebra has been assinged to your school',
            ID: 1,
            Attachments: 0,
            Date: new Date("2018-09-15"),
            isRead: true
        },
        {
            Announcer: '',
            Description: 'License for Introduction to Algebra has been assinged to your school',
            ID: 1,
            Attachments: 0,
            Date: new Date("2018-09-15"),
            isRead: false
        },
        {
            Announcer: '',
            Description: 'License for Introduction to Algebra has been assinged to your school',
            ID: 1,
            Attachments: 0,
            Date: new Date("2018-09-15"),
            isRead: true
        },
        {
            Announcer: '',
            Description: 'License for Introduction to Algebra has been assinged to your school',
            ID: 1,
            Attachments: 0,
            Date: new Date("2018-09-15"),
            isRead: false
        },
    ]

    return (
        <>
            <div className="header">
                <div>
                    <img id="logo" src="./static/logo_used_in_header.svg" alt="" />
                </div>
                <div ref={menuBarRef} className='menuBar' id='menuBar' >
                    <CustomDropDown mainName='DASHBOARD' ID={1}></CustomDropDown>
                    <CustomDropDown mainName='CONTENT' options={["COURSE CATALOG", "SOMETHING ELSE"]} ID={2}></CustomDropDown>
                    <CustomDropDown mainName='USERS' options={["COURSE CATALOG", "SOMETHING ELSE"]} ID={3}></CustomDropDown>
                    <CustomDropDown mainName='REPORTS' ID={4}></CustomDropDown>
                    <CustomDropDown mainName='ADMIN' ID={5}></CustomDropDown>
                </div>
                <ul className="navbar">
                    <li className='menuItems'> DASHBOARD</li>
                    <li className='menuItems'> CONTENT</li>
                    <li className='menuItems'> USERS</li>
                    <li className='menuItems'> REPORTS</li>
                    <li className='menuItems'> ADMIN</li>
                    <li>
                        <img ref={alertImgRef} className="alertsImg" src="./static/alerts.svg" alt=""  onClick={()=> { openAlert()}}/>

                        <div className='AlertWrapper' ref={alertWrapper}>
                            <div className='AlertContainer'>
                                {alertData.map((elm, ind) => (
                                    <Announcement {...elm} ID={ind} />
                                ))}
                            </div>

                            <button className='alertBtn'> SHOW ALL </button>

                        </div>
                    </li>
                    <li>
                        <img ref={announcementsImgRef} className="announcementsImg" src="./static/announcements.svg" alt="" onClick={() => { openAnnoucement() }}>

                        </img>
                        <div className='announcementsBarWrapper' ref={announcementbarContainerRef} >
                            <div className='announcementsBar' >
                                {
                                    announcementsData.map((obj, ind) => (
                                        <Announcement
                                            {...obj} ID={ind} />
                                    ))
                                }
                            </div>
                            <div className='buttons'>
                                <button > SHOW ALL </button>
                                <VerticalLine size={30} />
                                <button> CREAT NEW </button>
                            </div>
                        </div>
                    </li>
                    <li>
                        <img className="accountImg" src="./static/account_circle.svg" alt="" />
                    </li>
                    <li ref={hemBurfRef} className='hemburger' onClick={() => { openMenue() }} >
                        <img src="./static/hamburger.svg" />
                    </li>
                </ul>
            </div>
        </>
    )
}
