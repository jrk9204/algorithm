//순서대로 대문자는 소문자로 바꾸고 replace에서 정규표현식을 사용하여 바꿔나가면 된다.

function solution(new_id) {
  new_id = new_id.toLowerCase();
  new_id = new_id.replace(/[^a-z0-9-_.]/g, "");
  new_id = new_id.replace(/\.+/g, ".");
  new_id = new_id.replace(/^\.|\.$/g, "");

  if (new_id.length === 0) {
    new_id = "a";
  }
  if (new_id.length >= 16) {
    new_id = new_id.substring(0, 15);
    new_id = new_id.replace(/\.$/g, "");
  }
  if (new_id.length <= 2) {
    for (let i = new_id.length; i < 3; i++) {
      new_id += new_id[new_id.length - 1];
    }
  }

  return new_id;
}

solution("...!@BaT#*..y.abcdefghijklm");
