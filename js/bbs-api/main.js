'use strict';

const p = console.log;
const host = 'http://13.112.0.23:20780'; //ローカルで掲示板を動かす場合の設定

//以下にコードを書きましょう。
const registerSubmit = document.getElementById('registerSubmit');
registerSubmit.addEventListener('click', () => {
  const name = document.getElementById('registerName').value;
  const bio = document.getElementById('registerBio').value;
  const password = document.getElementById('registerPassword').value;
  const obj = { name, bio, password };
  const body = JSON.stringify(obj);
  const method = "POST";
  const headers = { 'Content-Type': 'application/json' };
  const url = host + '/register';
  p('body', body);
  fetch(url, { method, headers, body })
    .then((res) => res.json())
    .then(p)
    .catch(p);
});
