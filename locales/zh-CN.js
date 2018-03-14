const metadata = {
  description: '包含一些文字处理相关的工作流',
  actionProviders: [
    {
      name: "Base64编码",
      description: "将这段文字进行Base64编码。"
    },
    {
      name: "首字母大写",
      description: "首字母大写。"
    },
    {
      name: "长文本截断",
      description: "将超过指定长度的文本进行截断。被截断的部分将使用省略号替换。"
    }
  ]
}

module.exports = {metadata}
