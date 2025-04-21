[English](./README_EN.md) [简体中文]

# 人工智能发展史可视化 Web 应用

本项目是一个基于 React + Vite 的 Web 应用，旨在以时间线和交互方式展示人工智能的发展历程。

## 主要功能
- 以时间线方式展示人工智能领域的重要事件
- 支持事件详情查看
- 支持事件搜索与筛选
- 现代响应式界面设计

## 目录结构
```
src/
  App.jsx              # 主应用组件
  main.jsx             # 入口文件
  assets/              # 静态资源（如图片）
    react.svg
  components/          # 主要功能组件
    EventDetail.jsx
    Search.jsx
    Timeline.jsx
  data/
    aiHistory.js       # 人工智能发展史数据
  styles/              # 各组件样式
    EventDetail.css
    Search.css
    Timeline.css
  App.css
  index.css
```

## 启动方式
1. 安装依赖：
   ```bash
   npm install
   ```
2. 启动开发服务器：
   ```bash
   npm run dev
   ```
3. 打开浏览器访问提示的本地地址即可体验应用。

## 依赖
- React
- Vite

---
如需扩展功能或反馈建议，欢迎提交 issue。
