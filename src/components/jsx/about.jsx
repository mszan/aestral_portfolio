import React from 'react';
import face_classes from '../css/face.module.css'
import about_classes from '../css/about.module.css'
import {MainNavBar} from "./mainNavBar";
import {Footer} from "./footer";
import {CSSTransitionGroup} from "react-transition-group";

export const About = () => {
    return (
        <div className={face_classes.faceWrapper}>
            <MainNavBar/>
            <CSSTransitionGroup
                transitionName="transition"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}>
                <div className={about_classes.aboutWrapper}>
                <span className={about_classes.aboutTextBase}>
                    BORN IN YEAR 2000. THE NEW MILLENNIUM<br/><br/>
                    <span className={about_classes.aboutTextHeavy}>ÆSTRAL AND THE ORIGINALITY AND CONSTRUCTION OF SONGS HE HAS BEEN CREATING, BROUGHT A HUGE ATTENTION TO HIS NAME RELEASING A TRACK CALLED "HALF LIGHT" IN YEAR 2017.</span><br/><br/>
                    EVERSINCE, THE YOUNG ARTIST HAS BEEN WORKING ON LEAVING HIS MARK ON THE WHOLE GENRE OF WAVE AND TRANSLATING THE PURE EMOTION INTO SOUND OF TRUE ASTRAL EXPERIENCE, GATHERING THE AUDIENCE THROUGHOUT THE YEARS.<br/><br/>
                    <span className={about_classes.aboutTextHeavy}>THE CAREER, HE HAS BEGUN IN YEAR 2016, LAUNCHING HIS ALIAS ON PLATFORM SOUNDCLOUD, MADE HIM THOUSANDS OF FOLLOWERS WORLDWIDE AND MILLIONS OF PLAYS GETTING BIGGER AND BIGGER EACH YEAR.</span><br/><br/>
                    LIVE-ACT EXPERIENCE HE HAS BEEN GATHERING, PLAYING ALL AROUND THE EUROPE, FROM LONDON TO WARSAW, WITH THE BIGGEST AND MOST-KNOWN UNDERGROUND PRODUCERS AND RAPPERS MAKE HIS PERFORMANCES ONE-OF-A-KIND STORY, WORTH TO LIVE THROUGH AT ANY FESTIVAL OR EVENT HE PLAYS AT.<br/><br/>
                    <span className={about_classes.aboutTextHeavy}>WITH MANY ACHIEVEMENTS, IN VARIOUS DIRECTIONS LIKE AWARDS ON THE FILM FESTIVALS FOR THE BEST MUSIC VIDEO (RUNAWAY) OR PERFORMANCES ON ONE OF THE BIGGEST UNDERGROUND FESTIVALS IN EUROPE - "CZELUSC" - MAKE THE ARTIST A TRUE ALL-ROUNDER, CONSIDERING ALL HIS WORK ON MUSIC, GRAPHIC DESIGN, FILM AND WEBDESIGN.</span><br/><br/>
                    HIS GOAL? SOUNDTRACKS. DUE TO HUGE INFLUENCE FROM THE ORCHESTRAL AND FILM MUSIC, THE ARTIST'S DREAM IS TO PRODUCE MUSIC TO FILMS AND SERIES, AND WHO KNOWS - IT MAY AS WELL HAPPEN ONE DAY...<br/><br/>
                </span>
                </div>
                <Footer/>
            </CSSTransitionGroup>
        </div>
    );
};