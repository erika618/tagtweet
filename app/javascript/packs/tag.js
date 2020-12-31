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
      XHR.onload = () => {
        // console.log("非同期通信成功");
        // レスポンスとして返ってくるデータの受け取り
        // タグを表示させる要素を取得
        const searchResult = document.getElementById("search-result");
        // インクリメンタルサーチが行われるたびに、直前の検索結果を消す
        searchResult.innerHTML = "";
        if (XHR.response) {          
          const tagName = XHR.response.keyword;
        // 検索結果があるだけ繰り返す
        tagName.forEach((tag) => {
          // タグ名を格納するための要素を用意する
          const childElement = document.createElement("div");
          // 指定した要素上に新しい属性を追加、または既存の属性の値を変更(name,value)
          childElement.setAttribute("class", "child");
          // 生成した要素に検索結果のタグ名を指定
          childElement.setAttribute("id", tag.id);
          // タグ名をを"search-result"に挿入
          childElement.innerHTML = tag.name;
          searchResult.appendChild(childElement);
          // クリックしたタグ名がフォームに入力されるようにする
          const clickElement = document.getElementById(tag.id);
          clickElement.addEventListener("click", () => {
            document.getElementById("tweets_tag_name").value = clickElement.textContent;
            clickElement.remove();
            });
          });
        };
      };
    });
  });
};