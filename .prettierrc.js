export default {
  tabWidth: 2, // 使用4个空格缩进
  semi: false, // 代码结尾是否加分号
  trailingComma: 'none', // 代码末尾不需要逗号
  singleQuote: true, // 是否使用单引号
  printWidth: 150, // 超过多少字符强制换行
  arrowParens: 'avoid', // 单个参数的箭头函数不加括号 x => x
  bracketSpacing: true, // 对象大括号内两边是否加空格 { a:0 }

  endOfLine: 'auto', // 文件换行格式 LF/CRLF
  useTabs: false, // 不使用缩进符,而使用空格
  quoteProps: 'as-needed', // 对象的key仅在必要时用引号
  jsxSingleQuote: false, // jsx不使用单引号,而使用双引号
  jsxBracketSameLine: false, // jsx标签的反尖括号需要换行
  rangeStart: 0, // 每个文件格式化的范围是文件的全部内容
  rangeEnd: Infinity, // 结尾
  requirePragma: false, // 不需要写文件开头的 @prettier
  insertPragma: false, // 不需要自动在文件开头插入 @prettier
  proseWrap: 'preserve', // 使用默认的折行标准
  htmlWhitespaceSensitivity: 'css', // 根据显示样式决定html要不要折行
  vueIndentScriptAndStyle: false // Vue文件脚本和样式标签缩进
  //在 windows 操作系统中换行符通常是回车 (CR) 加换行分隔符 (LF)，也就是回车换行(CRLF)，
  //然而在 Linux 和 Unix 中只使用简单的换行分隔符 (LF)。
  //对应的控制字符为 "\n" (LF) 和 "\r\n"(CRLF)。auto意为保持现有的行尾
  // 换行符使用 lf 结尾是 可选值"<auto|lf|crlf|cr>"
}
