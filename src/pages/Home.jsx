import React from 'react';
import RemindersCourses from '../components/RemindersCourses';
import Profile from '../components/Profile';

const Home = () => {
    return (
        <div className="container mx-auto p-6">
            <Profile />
            <RemindersCourses />
        </div>
    );
};

export default Home;
