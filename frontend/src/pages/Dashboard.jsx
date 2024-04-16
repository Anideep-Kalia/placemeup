import React from 'react';
import Header from '../components/Header';


function Dashboard() {
  // Dummy data for demonstration
  const dailyLoginStreak = 11; // Example value
  const numberOfPostsAppliedFor = 20; // Example value
  const opportunities = {
    open: 30,
    closed: 15,
    recentPlacementOpenings: 5,
  };

  return (
    <>
      <Header />
      <div>
        <h2>Daily Login Streak</h2>
        <p>{dailyLoginStreak}</p>
      </div>
      <div>
        <h2>Number of Posts Applied For</h2>
        <p>{numberOfPostsAppliedFor}</p>
      </div>
      <div>
        <h2>Opportunities</h2>
        <ul>
          <li>Open: {opportunities.open}</li>
          <li>Closed: {opportunities.closed}</li>
          <li>Recent Placement Openings: {opportunities.recentPlacementOpenings}</li>
        </ul>
      </div>
    </>
  );
}

export default Dashboard;
