// 人工智能发展史数据
export const aiTimelineData = [
  {
    id: 1,
    year: 1950,
    title: "图灵测试提出",
    description: "艾伦·图灵提出了著名的图灵测试，这是判断机器是否具有智能的标准。",
    keyFigures: ["艾伦·图灵"],
    technologies: ["图灵测试"],
    impact: "为人工智能领域奠定了理论基础，提出了判断机器智能的标准。",
    category: "理论基础"
  },
  {
    id: 2,
    year: 1956,
    title: "达特茅斯会议",
    description: "在达特茅斯学院举行的会议上，\"人工智能\"一词被正式提出，标志着AI作为一个独立学科的诞生。",
    keyFigures: ["约翰·麦卡锡", "马文·明斯基", "克劳德·香农", "艾伦·纽厄尔"],
    technologies: ["逻辑理论家", "符号处理"],
    impact: "人工智能作为一个独立的研究领域正式诞生。",
    category: "学科诞生"
  },
  {
    id: 3,
    year: 1966,
    title: "ELIZA聊天机器人",
    description: "约瑟夫·韦森鲍姆创建了ELIZA，这是第一个能够与人类进行对话的聊天机器人。",
    keyFigures: ["约瑟夫·韦森鲍姆"],
    technologies: ["自然语言处理", "模式匹配"],
    impact: "开创了人机对话的先河，为后来的聊天机器人奠定了基础。",
    category: "应用"
  },
  {
    id: 4,
    year: 1969,
    title: "专家系统的兴起",
    description: "DENDRAL专家系统的开发，标志着基于规则的专家系统时代的开始。",
    keyFigures: ["爱德华·费根鲍姆"],
    technologies: ["专家系统", "知识工程"],
    impact: "专家系统成为AI的第一个商业应用，在医疗、化学等领域得到广泛应用。",
    category: "应用"
  },
  {
    id: 5,
    year: 1980,
    title: "第一次AI寒冬",
    description: "由于过高的期望与有限的计算能力，AI研究资金锐减，进入第一次\"AI寒冬\"。",
    keyFigures: [],
    technologies: [],
    impact: "AI研究资金大幅减少，研究进展放缓。",
    category: "发展挫折"
  },
  {
    id: 6,
    year: 1986,
    title: "反向传播算法",
    description: "杰弗里·辛顿等人重新发现并推广了反向传播算法，为神经网络的训练提供了有效方法。",
    keyFigures: ["杰弗里·辛顿", "戴维·鲁梅尔哈特", "罗纳德·威廉姆斯"],
    technologies: ["神经网络", "反向传播"],
    impact: "为深度学习的发展奠定了算法基础。",
    category: "算法突破"
  },
  {
    id: 7,
    year: 1997,
    title: "深蓝战胜国际象棋世界冠军",
    description: "IBM的深蓝超级计算机战胜了国际象棋世界冠军加里·卡斯帕罗夫。",
    keyFigures: ["加里·卡斯帕罗夫", "费·郝克尼"],
    technologies: ["博弈树搜索", "评估函数"],
    impact: "首次证明计算机在特定领域可以超越人类顶尖专家。",
    category: "里程碑"
  },
  {
    id: 8,
    year: 2006,
    title: "深度学习革命",
    description: "杰弗里·辛顿提出了深度学习的概念，并发表了关于深度信念网络的开创性论文。",
    keyFigures: ["杰弗里·辛顿"],
    technologies: ["深度学习", "深度信念网络"],
    impact: "开启了深度学习时代，为后来的AI爆发奠定了基础。",
    category: "算法突破"
  },
  {
    id: 9,
    year: 2011,
    title: "IBM Watson赢得智力竞赛",
    description: "IBM的Watson系统在美国智力竞赛节目Jeopardy!中战胜了人类冠军。",
    keyFigures: ["大卫·费鲁奇"],
    technologies: ["自然语言处理", "知识图谱", "机器学习"],
    impact: "展示了AI在自然语言理解和知识处理方面的能力。",
    category: "里程碑"
  },
  {
    id: 10,
    year: 2012,
    title: "ImageNet竞赛与AlexNet",
    description: "AlexNet在ImageNet图像识别竞赛中取得突破性进展，错误率比第二名低了10%以上。",
    keyFigures: ["亚历克斯·克里热夫斯基", "伊利亚·苏茨基弗", "杰弗里·辛顿"],
    technologies: ["卷积神经网络", "GPU加速"],
    impact: "标志着深度学习在计算机视觉领域的突破，引发了深度学习的热潮。",
    category: "算法突破"
  },
  {
    id: 11,
    year: 2014,
    title: "生成对抗网络(GAN)提出",
    description: "伊恩·古德费洛提出了生成对抗网络的概念，开创了生成式AI的新时代。",
    keyFigures: ["伊恩·古德费洛"],
    technologies: ["生成对抗网络", "无监督学习"],
    impact: "为AI创造性内容生成提供了新方法，推动了生成式AI的发展。",
    category: "算法突破"
  },
  {
    id: 12,
    year: 2016,
    title: "AlphaGo战胜围棋世界冠军",
    description: "谷歌DeepMind的AlphaGo战胜了围棋世界冠军李世石，展示了AI在复杂策略游戏中的能力。",
    keyFigures: ["李世石", "戴密斯·哈萨比斯"],
    technologies: ["深度强化学习", "蒙特卡洛树搜索"],
    impact: "被视为AI发展的重要里程碑，证明AI可以掌握高度复杂的策略游戏。",
    category: "里程碑"
  },
  {
    id: 13,
    year: 2017,
    title: "Transformer架构提出",
    description: "谷歌研究团队提出了Transformer架构，彻底改变了自然语言处理领域。",
    keyFigures: ["阿什什·瓦斯瓦尼", "诺亚姆·沙泽尔"],
    technologies: ["Transformer", "注意力机制"],
    impact: "为后来的BERT、GPT等模型奠定了基础，推动了NLP领域的革命。",
    category: "算法突破"
  },
  {
    id: 14,
    year: 2018,
    title: "BERT模型发布",
    description: "谷歌发布了BERT模型，在多项自然语言处理任务中取得了突破性进展。",
    keyFigures: ["雅各布·德夫林"],
    technologies: ["BERT", "预训练语言模型"],
    impact: "大幅提升了机器对自然语言的理解能力，推动了NLP技术的普及应用。",
    category: "算法突破"
  },
  {
    id: 15,
    year: 2020,
    title: "GPT-3发布",
    description: "OpenAI发布了拥有1750亿参数的GPT-3模型，展示了大型语言模型的强大能力。",
    keyFigures: ["山姆·奥特曼", "伊利亚·苏茨基弗"],
    technologies: ["GPT-3", "大型语言模型"],
    impact: "展示了大型语言模型在文本生成、对话和创意写作等方面的惊人能力。",
    category: "算法突破"
  },
  {
    id: 16,
    year: 2021,
    title: "DALL-E图像生成",
    description: "OpenAI发布了DALL-E，能够根据文本描述生成高质量图像的AI系统。",
    keyFigures: ["OpenAI研究团队"],
    technologies: ["DALL-E", "多模态学习"],
    impact: "开创了AI艺术创作的新时代，展示了AI在创意领域的潜力。",
    category: "应用"
  },
  {
    id: 17,
    year: 2022,
    title: "ChatGPT发布",
    description: "OpenAI发布了ChatGPT，这是一个能够进行自然对话的大型语言模型，迅速获得了广泛关注。",
    keyFigures: ["山姆·奥特曼", "OpenAI团队"],
    technologies: ["ChatGPT", "强化学习人类反馈(RLHF)"],
    impact: "引发了生成式AI的热潮，推动了AI技术在各行各业的应用。",
    category: "里程碑"
  },
  {
    id: 18,
    year: 2023,
    title: "多模态大模型兴起",
    description: "GPT-4、Claude等多模态大模型相继发布，能够同时处理文本、图像等多种模态的信息。",
    keyFigures: ["OpenAI团队", "Anthropic团队"],
    technologies: ["GPT-4", "多模态学习"],
    impact: "进一步扩展了AI的能力边界，向通用人工智能迈进了一步。",
    category: "算法突破"
  }
];

// 搜索函数
export const searchAIHistory = (query) => {
  if (!query) return [];
  
  const lowercaseQuery = query.toLowerCase();
  
  return aiTimelineData.filter(item => {
    return (
      item.title.toLowerCase().includes(lowercaseQuery) ||
      item.description.toLowerCase().includes(lowercaseQuery) ||
      item.keyFigures.some(figure => figure.toLowerCase().includes(lowercaseQuery)) ||
      item.technologies.some(tech => tech.toLowerCase().includes(lowercaseQuery)) ||
      item.impact.toLowerCase().includes(lowercaseQuery) ||
      item.category.toLowerCase().includes(lowercaseQuery) ||
      item.year.toString().includes(lowercaseQuery)
    );
  });
};