'use strict';

const p = console.log;
const host = 'http://localhost'; //ローカルで掲示板を動かす場合の設定

//以下にコードを書きましょう。
/*
        <td><input type="text" id="registerName" placeholder="name" /></td>
        <td><input type="text" id="registerBio" placeholder="bio" /></td>
        <td><input type="text" id="registerPassword" placeholder="password" /></td>
        <td><button id="registerSubmit">送信</button></td>
*/
const registerSubmit = document.getElementById('registerSubmit');
registerSubmit.addEventListener('click', () => {
  alert('押された');
});
