import '../styles/EventDetail.css';

const EventDetail = ({ event }) => {
  if (!event) {
    return (
      <div className="event-detail-placeholder">
        <h2>请从时间轴选择一个事件</h2>
        <p>点击时间轴上的节点查看详细信息</p>
      </div>
    );
  }

  return (
    <div className="event-detail">
      <h2>{event.title} ({event.year})</h2>
      <div className="event-category">{event.category}</div>
      
      <div className="event-description">
        <p>{event.description}</p>
      </div>
      
      {event.keyFigures && event.keyFigures.length > 0 && (
        <div className="event-section">
          <h3>关键人物</h3>
          <ul className="event-list">
            {event.keyFigures.map((figure, index) => (
              <li key={index}>{figure}</li>
            ))}
          </ul>
        </div>
      )}
      
      {event.technologies && event.technologies.length > 0 && (
        <div className="event-section">
          <h3>相关技术</h3>
          <ul className="event-list">
            {event.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
      )}
      
      <div className="event-section">
        <h3>历史影响</h3>
        <p>{event.impact}</p>
      </div>
    </div>
  );
};

export default EventDetail;