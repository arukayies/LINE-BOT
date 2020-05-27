/*
関数概要
 買い物リストBOTのメイン処理

引数
 e LINEから受け取ったイベント情報

戻り値
 なし
———————————–*/
function doPost(e) {
  /* テキスト内容によって制御 */
  try {
    const res = e.postData.getDataAsString();
    const event = JSON.parse(res).events[0];

    switch (event.type) {
      /* メッセージイベントの場合 */
      case "message":
        getMessage(event);
        break;
      /* ポストバックイベントの場合 */
      case "postback":
        getPostback(event);
        break;
      default:
        addLog(res);
        break;
    }
  } catch (e) {
    addLog(e);
  }
}