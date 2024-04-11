import React from "react";
import "./Developers.css";

export default function Developers() {
    return (
        <div className="Developers">
            <h1 className="developers-heading">DEVELOPERS</h1>
            <div className="developers-content">
                <div className="dev-1 dev">
                    <div className="dev-image">
                        <img
                            src="https://github.com/DeepanshAgarwal.png"
                            alt="Deepansh Agarwal"
                        />
                    </div>
                    <div className="dev-content">
                        <h2>Deepansh Agarwal</h2>
                        <p>
                            Deepansh is a full-stack developer with a passion
                            for creating web applications. He is a student at
                            BITS Pilani, Pilani Campus, persuing a degree in
                            Electrical and Electronics Engineering.
                        </p>
                        <div className="dev-links">
                            <p>
                                <a href="https://www.linkedin.com/in/deepansh-agarwal/">
                                    LinkedIn
                                </a>
                            </p>
                            <p>
                                <a href="https://github.com/DeepanshAgarwal">
                                    GitHub
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
