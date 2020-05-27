/*
関数概要
 LINEに送信する処理

引数
 lineMessageObject LINEに送るメッセージオブジェクト
 to 送る宛先

戻り値
 送信した結果のレスポンス
———————————–*/
function pushLine(lineMessageObject, to) {
  /* スクリプトプロパティ情報を取得 */
  const prop = PropertiesService.getScriptProperties();
  /* LINEに送信用のURL */
  const PUSH_API_URL = "https://api.line.me/v2/bot/message/push";

  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + prop.getProperty("TOKEN")
  };
  const data = {
    to: to,
    messages: lineMessageObject
  };
  const options = {
    method: "POST",
    headers: headers,
    payload: JSON.stringify(data)
  };
  return UrlFetchApp.fetch(PUSH_API_URL, options);
}
