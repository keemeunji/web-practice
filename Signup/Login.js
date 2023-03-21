// 1. 엘리먼트 정보 가져오기
// 1-1. 아이디 정보 가져오기
// 1. 아이디 입력창 정보 가져오기
 let elInputUsername = document.querySelector('#username'); 
 // 2. 성공 메시지 정보 가져오기
 let elSuccessMessage = document.querySelector('.success-message');
 // 3. 실패 메시지 정보 가져오기 (글자수 제한 4~12글자)
 let elFailureMessage = document.querySelector('.failure-message');
 // 4. 실패 메시지 정보 가져오기 (영어 또는 숫자)
 let elFailureMessageTwo = document.querySelector('.failure-message2');

 // 1-2. 비밀번호 정보 가져오기
 // 1. 비밀번호 입력창 정보 가져오기
 let elInputPassword = document.querySelector('#password');
 // 2. 비밀번호 확인 입력창 정보 가져오기
 let elInputPasswordRetype = document.querySelector('#password-retype');
 // 3. 실패 메시지 정보 가져오기 (비밀번호 불일치)
 let elMismatchMessage = document.querySelector('.mismatch-message');
 // 4. 실패 메시지 정보 가져오기 (8글자 이상, 영문, 숫자, 특수문자 미사용)
 let elStrongPasswordMessage = document.querySelector('.strongPassword-message');

 // 2. 유효성 검증 함수 작성하기
 // 2-1. 아이디 : 글자 수 제한 (4글자 이상, 12글자 이하)
 function idLength(value) {
    return value.length >= 4 && value.length <=12
 }

 // 2-2. 아이디 : 영어 또는 숫자만 가능
 function onlyNumberAndEnglish(str) {
    return /^[A-Za-z0-9][A-Za-z0-9]*$/.test(str); // ??
 }

 // 2-3. 비밀번호 : 8글자 이상, 영문, 숫자, 특수문자 사용
 function strongPassword(Str) {
    return /^(?=.*[A-Za-z])(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(str); // 특수문자 순서 중요??
 }

 // 2-4. 비밀번호 확인 : 비밀번호와 비밀번호 확인 일치
 function isMatch (password1, password2) {
    return password1 === password2;
 }

 // 3. 이밴트 핸들러
 // 3-1. 아이디 이벤트 (4글자 이상, 12글자 이하, 영어 또는 숫자만 가능)
 elInputUsername.onkeyup = function () {
    // 값을 입력한 경우
    if (elInputUsername.value.length !== 0) {
      // 영어 또는 숫자 외의 값을 입력했을 경우
      if(onlyNumberAndEnglish(elInputUsername.value) === false) {
        elSuccessMessage.classList.add('hide');
        elFailureMessage.classList.add('hide');
        elFailureMessageTwo.classList.remove('hide'); // 영어 또는 숫자만 가능합니다
      }
      // 글자 수가 4~12글자가 아닐 경우
      else if(idLength(elInputUsername.value) === false) {
        elSuccessMessage.classList.add('hide'); // 성공 메시지가 가려져야 함
        elFailureMessage.classList.remove('hide'); // 아이디는 4~12글자이어야 합니다
        elFailureMessageTwo.classList.add('hide'); // 실패 메시지2가 가려져야 함
      }
      // 조건을 모두 만족할 경우
      else if(idLength(elInputUsername.value) || onlyNumberAndEnglish(elInputUsername.value)) {
        elSuccessMessage.classList.remove('hide'); // 사용할 수 있는 아이디입니다
        elFailureMessage.classList.add('hide'); // 실패 메시지가 가려져야 함
        elFailureMessageTwo.classList.add('hide'); // 실패 메시지2가 가려져야 함
      }
    }
    // 값을 입력하지 않은 경우 (지웠을 때)
    // 모든 메시지를 가린다.
    else {
      elSuccessMessage.classList.add('hide');
      elFailureMessage.classList.add('hide');
      elFailureMessageTwo.classList.add('hide');
    }
  }

// 3-2. 비밀번호 이벤트 (8글자 이상, 영문, 숫자, 특수문자 사용)
elInputPassword.onkeyup = function() {

    // console.log(elInputPassword.value);
    // 값을 입력한 경우
    if (elInputPassword.value.length !== 0) {
        if(strongPassword(elInputPassword.value)) {
            elStrongPasswordMessage.classList.add('hide');
        }
        else {
            elStrongPasswordMessage.classList.remove('hide');
        }
    }
    // 값을 입력하지 않은 경우 (지웠을 때)
    // 모든 메시지를 가린다.
    else {
        elStrongPasswordMessage.classList.add('hide');
    }
};

// 3-3. 비밀번호 확인 이벤트 (비밀번호와 비밀번호 확인 일치)
elInputPasswordRetype.onkeyup = function() {
    
    // console.log(elInputPasswordRetype.value);
    if (elInputPasswordRetype.value.length !== 0) {
        if(isMatch(elInputPassword.value, elInputPasswordRetype.value)) {
            elMismatchMessage.classList.add('hide');
        }
        else {
            elMismatchMessage.classList.remove('hide');
        }
    }
    else {
        elMismatchMessage.classList.add('hide');
    }
};