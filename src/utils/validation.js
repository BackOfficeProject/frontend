export function validateEmployeeForm(formData) {
  const errors = {};

  if (!formData.name.trim()) {
    errors.name = "이름을 입력해주세요.";
  } else if (/\d/.test(formData.name)) {
    errors.name = "이름에 숫자를 포함할 수 없습니다.";
  }

  if (!formData.emailId.trim()) {
    errors.emailId = "이메일을 입력해주세요.";
  } else if (!/^[a-zA-Z0-9.]+$/.test(formData.emailId)) {
    errors.emailId = "이메일에는 특수문자를 포함할 수 없습니다.";
  }

  if (!formData.phone.trim()) {
    errors.phone = "전화번호를 입력해주세요.";
  } else if (!/^010\d{8}$/.test(formData.phone)) {
    errors.phone = "010으로 시작하는 11자리 숫자를 입력해주세요.";
  }

  if (!formData.department) {
    errors.department = "부서를 선택해주세요.";
  }

  if (!formData.position) {
    errors.position = "직책을 선택해주세요.";
  }

  if (!formData.joinDate) {
    errors.joinDate = "입사일을 입력해주세요.";
  }
  // else if (new Date(formData.joinDate) > new Date()) {
  //   errors.joinDate = "입사일은 오늘 이전이어야 합니다.";
  // }

  return errors;
}
