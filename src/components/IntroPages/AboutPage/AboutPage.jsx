import React from 'react';
import MainLayout from '../../Layouts/MainLayout/MainLayout';

function AboutPage() {
  return (
    <MainLayout>
      <div className="container">
        <h2>Founded on a Passion for Better</h2>
        <p>
          Welcome to TCA Sub Scheduling, where simplicity meets efficiency in
          managing substitute teacher requests. Designed with TCA Teachers in
          mind, our platform streamlines the process of finding and scheduling
          substitutes, making it easy for you to focus on what matters most –
          providing quality education.
        </p>

        <div>
          <img src="" alt="" />
        </div>

        <ul className="points">
          <li>
            Eliminate stressful processes that administrators and teachers dread
          </li>
          <li>Save time and money lost to manual processes</li>
          <li>
            Provide consistent, high-quality student instruction with qualified
            and available subs
          </li>
        </ul>
      </div>
    </MainLayout>
  );
}

export default AboutPage;
