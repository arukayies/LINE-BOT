/*
関数概要
 買い物リストを追加モードにする処理

引数
 to 送る宛先

戻り値
 送信した結果のレスポンス
———————————–*/
function addShoppingLists(to) {
  /* スクリプトプロパティ情報を取得 */
  const prop = PropertiesService.getScriptProperties();
  /* 設定値を1にする */
  prop.setProperty("CONF", 1);
  /* 使い方の内容 */
  const message =
    `追加したい品目を入力してください。
改行すると、複数追加できます。`;
  const lineMessageObject = [
    {
      type: "text",
      text: message,
    },
  ];
  return pushLine(lineMessageObject, to);
}