'use strict';

const p = console.log;
const host = 'http://localhost'; //ローカルで掲示板を動かす場合の設定

//以下にコードを書きましょう。
const registerSubmit = document.getElementById('registerSubmit');
registerSubmit.addEventListener('click', () => {
  const name = document.getElementById('registerName').value;
  const bio = document.getElementById('registerBio').value;
  const password = document.getElementById('registerPassword').value;
  p({ name, bio, password });
});
