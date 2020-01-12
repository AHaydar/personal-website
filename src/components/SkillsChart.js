import React from 'react';
import PieChart from 'react-minimal-pie-chart';
import './SkillsChart.scss';

const skills = [
  { title: 'Development', value: 33, color: '#FF7250' },
  { title: 'Testing', value: 33, color: '#419EDA' },
  { title: 'Leadership', value: 33, color: '#323456' }
];

const SkillsChart = () => (
  <PieChart
    data={skills}
    animate={true}
    animationDuration={500}
    animationEasing="ease-out"
    className="skills-chart"
    viewBoxSize={[100, 100]}
    cx={-80}
    radius={50}
    label={true}
  />
);

export default SkillsChart;
