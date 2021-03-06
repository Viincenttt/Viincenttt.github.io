import React from 'react';

import './Profile.css';

export const Profile : React.FC = (): JSX.Element => {
    return (
        <section id="profile" className="profile">
            <h1>Vincent Kok</h1>
            <h2>Software engineer</h2>

            <p>
                I'm a software engineer with over 10 years of experience in .NET, web-development and software engineering. 
                My expertise is back-end, but I am also familiar with various popular front-end frameworks such as Angular and React.
            </p>

            <a href="#projects" className="button">View my work</a>
        </section>
    );
}

export default Profile;