import React, { Component } from "react";
import Body from "./body";

import profilePicture from "./media/assets/profile_pic.jpg";

const center = "center-align";
class Main extends Component {
    state = {};

    render() {
        return (
            <div className={center}>
                <div className="row">
                    <div className="col s10 offset-s1 m8 offset-m2 l4 offset-l4" id="main">
                        <h3 className={center} id="my_name">
                            Felipe Garcia
                        </h3>{" "}
                        <p id="contact_me">813.992.4795 | FelipeDevSec@gmail.com</p>
                        <h5 className={center} id="my_job">
                            &lt;/A Developer &gt;
                        </h5>
                        <p className={center}>
                            <img
                                className="circle"
                                id="profile_picture"
                                src={profilePicture}
                                alt="profile pic"
                                width="20%"
                            />
                        </p>
                        <Body />
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;
