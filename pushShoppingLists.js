/*
関数概要
 買い物リストの内容をLINEに送信する処理

引数
 to 送る宛先

戻り値
 送信した結果のレスポンス
———————————–*/
function pushShoppingLists(to) {
  /* スクリプトプロパティ情報を取得 */
  const prop = PropertiesService.getScriptProperties();
  /* 設定値を0にする */
  prop.setProperty("CONF", 0);
  /* 買い物リストの文字列を取得 */
  const stringLists = prop.getProperty("LIST");
  /* 買い物リストの文字列を配列に変換して取得 */
  const ArrayLists = stringLists.split(",");

  /* 買い物リストが空の場合 */
  if (stringLists == "初期値") {
    let lineMessageObject = [
      {
        type: "text",
        text: "買い物リストは空っぽです。"
      }
    ];
    return pushLine(lineMessageObject, to);
    /* 買い物リストがある場合 */
  } else {
    let message = "買い物リストを表示します。\n";
    for (let i in ArrayLists) {
      if (ArrayLists[i] != "初期値") {
        message += "・" + ArrayLists[i] + "\n";
      }
    }
    let lineMessageObject = [
      {
        type: "text",
        text: message
      }
    ];
    return pushLine(lineMessageObject, to);
  }
}