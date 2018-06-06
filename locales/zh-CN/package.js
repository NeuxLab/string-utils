module.exports = {
  description: '包含一些文字处理相关的工作流',
  actionProviders: [
    {
      name: "Base64编码",
      description: "将这段文字进行Base64编码。"
    },
    {
      name: "MD5摘要",
      description: "计算文字的md5值"
    }
   ]

}
