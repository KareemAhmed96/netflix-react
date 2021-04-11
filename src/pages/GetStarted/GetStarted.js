import React from 'react'
import './GetStarted.css'

export default function GetStarted() {
    return (
        <div class='getStartedPage'>
            <div className="getStartedHero">
                <div className="getStartedNav">
                    <h1>NETFLIX</h1>
                    <div className="getStartedNavButton">
                        Sign In
                    </div>
                </div>
                <div className="getStartedHeroText">
                    <h1>
                    Unlimited movies, TV shows, and more.
                    </h1>
                    <h3>
                        Watch Anywhere. Cancel Anytime.
                    </h3>
                </div>
                <div className="getStartedForm">
                    Insert Form Here
                </div>

            </div>

            <div className="getStartedSecondContainer">
                <div className="SecondText">
                    <h1>
                        Enjoy on your TV.
                    </h1>
                    <h3>
                        Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
                    </h3>
                </div>
                <div className="SecondView">
                    <div className="VideoContainer">
                        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt=""/>
                        <video autoPlay="" playsInline="" muted="" loop="" source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4"> </video>
                    </div>
                </div>

            </div>
            <div className="getStartedThirdContainer">
                <div className="ThirdView">
                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" data-uia="our-story-card-img"/>
                </div>
                <div className="ThirdText">
                    <h1>
                        Download your shows to watch offline.
                    </h1>
                    <h3>
                        Save your favorites easily and always have something to watch.
                    </h3>
                </div>
                
            </div>
            <div className="getStartedFourthContainer">
                <div className="FourthText">
                    <h1>
                        Watch everywhere.
                    </h1>
                    <h3>
                        Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.
                    </h3>
                </div>
                <div className="FourthView">
                <div className="VideoContainerTwo">
                        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png" alt=""/>
                        <video autoPlay="" playsInline="" muted="" loop="" source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v" type="video/mp4"> </video>
                    </div>
                </div>

            </div>
            <div className="getStartedFifthContainer">
                <div className="FifthContainerHeader">
                    <h1>
                        Frequently Asked Questions
                    </h1>
                </div>
                <div className="FifthContainerAccordion">
                    Insert Accordion Here
                </div>
                <div className="getStartedForm">
                    Insert Form Here
                </div>
            </div>
            <div className="getStartedFooter">
                <div className="getStartedFooterFirstRow">
                    <a href="#">Questions? Contact us</a>
                </div>
                <div className="getStartedFooterSecondRow">
                    <a href="">FAQ</a>
                    <a href="">Help Center</a>
                    <a href="">Account</a>
                    <a href="">Media Center</a>
                    <a href="">Investory Relations</a>
                    <a href="">Jobs</a>
                    <a href="">Ways To Watch</a>
                    <a href="">Terms of Use</a>
                    <a href="">Privacy</a>
                    <a href="">Cookie Preferences</a>
                    <a href="">Corporate Information</a>
                    <a href="">Contact Us</a>
                    <a href="">Speed Test</a>
                    <a href="">Legal Notices</a>
                    <a href="">Netflix Originals</a>
                </div>
                <div className="getStartedFooterThirdRow">
                    Insert List Here
                </div>
                <div className="getStartedFooterFourthRow">
                    Netflix Egypt
                </div>
            </div>
        </div>
    )
}
