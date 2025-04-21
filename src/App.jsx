import { useState, useEffect } from 'react'
import './App.css'
import Timeline from './components/Timeline'
import EventDetail from './components/EventDetail'
import Search from './components/Search'
import { aiTimelineData, searchAIHistory } from './data/aiHistory'

function App() {
  const [events, setEvents] = useState(aiTimelineData)
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [searchResults, setSearchResults] = useState(null)

  // 处理事件选择
  const handleSelectEvent = (event) => {
    setSelectedEvent(event)
  }

  // 处理搜索
  const handleSearch = (query) => {
    if (!query.trim()) {
      setEvents(aiTimelineData)
      setSearchResults(null)
      return
    }
    
    const results = searchAIHistory(query)
    setEvents(results)
    setSearchResults({
      query,
      count: results.length
    })
  }

  // 重置搜索
  const resetSearch = () => {
    setEvents(aiTimelineData)
    setSearchResults(null)
  }

  return (
    <div className="app-container">
      <header>
        <h1>人工智能发展史知识图谱</h1>
        <p className="app-description">探索人工智能从理论诞生到现代应用的关键里程碑</p>
      </header>

      <Search onSearch={handleSearch} />
      
      {searchResults && (
        <div className="search-results-info">
          <p>找到 <strong>{searchResults.count}</strong> 个与 "{searchResults.query}" 相关的结果</p>
          <button className="reset-button" onClick={resetSearch}>重置</button>
        </div>
      )}

      <Timeline data={events} onSelectEvent={handleSelectEvent} />
      
      <EventDetail event={selectedEvent} />
      
      <footer>
        <p>© 2024 人工智能发展史知识图谱 | 基于React构建</p>
      </footer>
    </div>
  )
}

export default App
