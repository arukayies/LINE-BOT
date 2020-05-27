/*
関数概要
 買い物リストをカルーセルテンプレートでLINEに送る処理

引数
 to 送る宛先

戻り値
 送信した結果のレスポンス
———————————–*/
function deleteShoppingLists(to) {
  /* スクリプトプロパティ情報を取得 */
  const prop = PropertiesService.getScriptProperties();
  /* 設定値を2にする */
  prop.setProperty("CONF", 2);
  /* 買い物リストの文字列を取得 */
  const stringLists = prop.getProperty("LIST");
  /* 買い物リストの文字列を配列に変換して取得 */
  const ArrayLists = stringLists.split(",");
  /* 先頭の『初期値』は削除する */
  ArrayLists.shift();

  /* 買い物リストが空の場合 */
  if (stringLists == "初期値") {
    const lineMessageObject = [
      {
        type: "text",
        text: "買い物リストは空っぽです。"
      }
    ];
    return pushLine(lineMessageObject, to);
    /* 買い物リストがある場合 */
  } else {
    /* 買い物リストが10件以上ある場合 */
    if (ArrayLists.length >= 10) {
      /* 10件ずつカルーセルテンプレートで送信する */
      let page = 0,
        newArrayLists = [],
        no = 0;
      for (page; page < Math.floor(ArrayLists.length / 10); page++) {
        for (no; no < 10 + page * 10; no++) {
          newArrayLists.push(ArrayLists[no]);
        }
        pushLine(createCarousels(newArrayLists), to)
        newArrayLists = [];
      }
      /* 10件で割った余りをカルーセルテンプレートで送信する */
      newArrayLists = [];
      no = page * 10;
      for (no; no < ArrayLists.length; no++) {
        newArrayLists.push(ArrayLists[no]);
      }
      pushLine(createCarousels(newArrayLists), to);
      /* 買い物リストが10件より少ない場合 */
    } else {
      pushLine(createCarousels(ArrayLists), to);
    }
  }
}
