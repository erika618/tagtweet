// location.pathnameプロパティで””内のパス名を指定
if (location.pathname.match("tweets/new")){
  // 最初の HTML 文書の読み込みと解析が完了したとき、スタイルシート、画像、サブフレームの読み込みが完了するのを待たずに発生
  document.addEventListener("DOMContentLoaded", () => {
    const inputElement = document.getElementById("tweets_tag_name");
    inputElement.addEventListener("keyup", () => {
      const keyword = document.getElementById("tweets_tag_name").value;
      // console.log(keyword);
      const XHR = new XMLHttpRequest();
      // openメソッドの第一引数にHTTPメソッド、第二引数にURL、第三引数には非同期通信であることを示すためにtrueを指定(7行目でフォームから取得した文字列をsearchアクションに対しリクエストを送る)
      XHR.open("GET", `search/?keyword=${keyword}`, true);
      // レスポンス形式を指定
      XHR.responseType = "json";
      // 定義したリクエストを送信
      XHR.send();
    })
  });
};