import { useState } from 'react';
import '../styles/Timeline.css';

const Timeline = ({ data, onSelectEvent }) => {
  const [hoveredEvent, setHoveredEvent] = useState(null);

  // 按年份排序数据
  const sortedData = [...data].sort((a, b) => a.year - b.year);

  // 计算时间轴位置
  const calculatePosition = (index) => {
    return {
      left: `${(index / (sortedData.length - 1)) * 100}%`
    };
  };

  return (
    <div className="timeline-container">
      <div className="timeline-line"></div>
      
      {sortedData.map((event, index) => (
        <div 
          key={event.id}
          className={`timeline-event ${hoveredEvent === event.id ? 'hovered' : ''}`}
          style={calculatePosition(index)}
          onClick={() => onSelectEvent(event)}
          onMouseEnter={() => setHoveredEvent(event.id)}
          onMouseLeave={() => setHoveredEvent(null)}
        >
          <div className="timeline-dot"></div>
          <div className="timeline-label">
            <div className="timeline-year">{event.year}</div>
            <div className="timeline-title">{event.title}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;