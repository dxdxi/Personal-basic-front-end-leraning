document.addEventListener('DOMContentLoaded', function() {
  const userInput = document.getElementById('user-input');
  const checkBtn = document.getElementById('check-btn');
  const clearBtn = document.getElementById('clear-btn');
  const resultsDiv = document.getElementById('results-div');

  // 验证电话号码格式
  function validatePhoneNumber(phone) {
  // 移除所有非数字字符（保留数字和可能的空格、括号、破折号）
  const cleaned = phone.replace(/[^\d\s\(\)-]/g, '');
                
  // 验证各种有效的美国电话号码格式
  const validPatterns = [
    /^1?\s?\d{3}-\d{3}-\d{4}$/,          // 555-555-5555 或 1 555-555-5555
    /^1?\s?\(\d{3}\)\s?\d{3}-\d{4}$/,     // (555)555-5555 或 1 (555) 555-5555
    /^1?\s?\d{3}\s\d{3}\s\d{4}$/,         // 555 555 5555 或 1 555 555 5555
    /^\d{10}$/,                           // 5555555555
    /^1?\d{10}$/,                         // 15555555555
    /^1?\s?\(\d{3}\)\d{3}-\d{4}$/,        // 1(555)555-5555
    /^1\s\d{3}-\d{3}-\d{4}$/             // 1 555-555-5555
  ];
                
  // 检查是否符合任一有效模式
  const isValid = validPatterns.some(pattern => pattern.test(phone));
                
  // 额外的验证条件
  if (isValid) {
      // 提取所有数字
      const digits = phone.replace(/\D/g, '');
      // 检查数字长度（10或11位）
      if (digits.length === 10 || (digits.length === 11 && digits[0] === '1')) {
        // 检查区号是否有效（不能以0或1开头）
        const areaCode = digits.length === 10 ? digits.substring(0, 3) : digits.substring(1, 4);
        if (areaCode[0] === '0' || areaCode[0] === '1') {
            return false;
        }
        // 检查交换码是否有效（不能以0或1开头）
        const exchangeCode = digits.length === 10 ? digits.substring(3, 6) : digits.substring(4, 7);
        if (exchangeCode[0] === '0' || exchangeCode[0] === '1') {
            return false;
        }
        return true;
    }
  }
                
  return false;
}

  // 检查按钮点击事件
  checkBtn.addEventListener('click', function() {
    const phoneNumber = userInput.value.trim();
                
    if (!phoneNumber) {
      alert('Please provide a phone number');
      return;
    }
                
    const isValid = validatePhoneNumber(phoneNumber);
                
    resultsDiv.textContent = `${isValid ? 'Valid' : 'Invalid'} US number: ${phoneNumber}`;
    resultsDiv.className = isValid ? 'valid' : 'invalid';
  });

  // 清除按钮点击事件
  clearBtn.addEventListener('click', function() {
    resultsDiv.textContent = '';
    resultsDiv.className = '';
  });
});