export type RecentClass = {
    teachers: Array<string>;
    students: number;
    Date: [Date, Date];
}
export type ClassData = {
    img: string;
    topicName: string;
    Subject: string;
    Grade: Array<number>;
    units: number;
    lessons: number;
    topics: number;
    recentClass: RecentClass;
    isFav: boolean;
    iconsObj: {
        preview: boolean,
        reports: boolean,
        manage_course: boolean,
        grade_submissions: boolean
    }
}