import React, { Component } from "react";
import Project from "./project";
/*
function Lang() {
    return (
        <React.Fragment>
            <br />
            <h6>Coder in: </h6>
            <h4 id="language_skill">
                <b>Javascript</b>
            </h4>
        </React.Fragment>
    );
}
*/
class Body extends Component {
    state = {
        data: [
            {
                name: "Double Trouble",
                link: "/dt",
                key: "project_dt",
            },
            {
                name: "youtube-sockets",
                link: "https://github.com/felipeGarciaDiaz/YouTube-Socket-Streamer",
                key: "project_yts",
            },
            {
                name: "Net-Nuke",
                link: "https://github.com/felipeGarciaDiaz/netNuke",
                key: "project_netNuke",
            },
            {
                name: "Secha Forwarder",
                link: "https://github.com/felipeGarciaDiaz/Secha",
                key: "project_secha",
            },
            {
                name: "Bing Cheats",
                link: "https://github.com/felipeGarciaDiaz/BingCheats",
                key: "project_bingCheats",
            },
        ],

        nextPage: true,
        skill: "J",
    };

    render() {
        if (this.state.nextPage === true) {
            return (
                <div className="col s12">
                    <h4 className="align-center" id="my_projects">
                        Projects
                        <hr />
                    </h4>
                    <React.Fragment>
                        {this.state.data.map((section) => (
                            <Project key={section.key} title={section.name} link={section.link} />
                        ))}
                    </React.Fragment>

                    <h1>
                        <span className="align-center material-icons">
                            <h1 id="next_page" onClick={this.handleNextPage}>
                                navigate_next
                            </h1>
                        </span>
                    </h1>
                </div>
            );
        } else {
            return (
                <div className="col s12">
                    <h4 className="align-center" id="about_me">
                        About Me
                    </h4>
                    <hr />
                    <p id="my_desc">
                        I love computers, ever since i was a kid they have been a passion of mine. This has helped me
                        learn a lot of interesting technologies and has introduced to me countless hobbies! If you want
                        to hire me, you should know that my strong suits are mostly in web, app, and game development!
                    </p>
                    <h6>Proficient with: </h6>
                    <h4 id="language_skill">
                        <b>{this.state.skill}</b>
                    </h4>

                    <h1>
                        <span className="align-center material-icons">
                            <h1 id="next_page" onClick={this.handleNextPage}>
                                chevron_left
                            </h1>
                        </span>
                    </h1>
                </div>
            );
        }
    }
    handleNextPage = () => {
        if (this.state.nextPage === true) {
            this.setState({ nextPage: false });
            console.log(this.state.nextPage);
        } else {
            this.setState({ nextPage: true });
            console.log(this.state.nextPage);
        }
    };

    componentDidMount() {
        const skillData = [
            [..."Javascript"],
            [..."Typescript"],
            [..."ReactJS"],
            [..."React Native"],
            [..."HTML5"],
            [..."CSS3"],
            [..."NodeJS"],
            [..."MongoDB"],
            [..."Phaser 3"],
            [..."Python"],
        ];

        let arrayClimber = 0;
        let currentIndex = 0;
        let block = false;
        const moveSkill = () => {
            if (block === false && arrayClimber < skillData[currentIndex].length) {
                arrayClimber += 1;
                if (arrayClimber === skillData[currentIndex].length) {
                    block = true;
                }
            } else if (block === true && arrayClimber > 1) {
                arrayClimber -= 1;
                if (arrayClimber === 1) {
                    currentIndex++;
                    block = false;
                }
            }

            if (skillData.length === currentIndex) {
                currentIndex = 0;
                return;
            }
            this.setState({ skill: skillData[currentIndex].slice(0, arrayClimber).join("") });
        };

        setInterval(moveSkill, 150);
    }
}

export default Body;
