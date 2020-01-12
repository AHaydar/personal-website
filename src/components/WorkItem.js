import React from 'react';
import './WorkItem.scss';

const WorkItem = ({ workItemTitle, workItemContent, workItemIcon }) => (
  <div className="work-item">
    {workItemIcon}
    <h4>{workItemTitle}</h4>
    <div className="work-item-content">{workItemContent}</div>
  </div>
);

export default WorkItem;
