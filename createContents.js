/*
関数概要
 買い物リストのFlex Messageを組み立てる処理

引数
 shoppingLists  買い物リストの配列
 message リストのタイトルメッセージ

戻り値
 lineMessageObjecを返す
———————————–*/
function createContents(shoppingLists, message, button_type) {
  let contents = [];

  /* 買い物リストのカルーセルを組み立てる */
  for (let i in shoppingLists) {
    /* 空文字以外 */
    if (shoppingLists[i] != "") {
      contents.push({
        "type": "button",
        "action": {
          "type": "postback",
          "label": shoppingLists[i],
          "data": "delete=" + shoppingLists[i]
        },
        "style": button_type,//買い物リストを表示するときprimary、削除するときは灰色のボタンsecondary
        "height": "sm"
      });
    }
  }

  /* Flex Messageを組み立てる */
  const lineMessageObject = [{
    "type": "flex",
    "altText": "this is a flex message",
    "contents": {
      "type": "bubble",
      "body": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": message,
            "weight": "bold",
            "size": "xl"
          }
        ]
      },
      "footer": {
        "type": "box",
        "layout": "vertical",
        "spacing": "sm",
        "contents": contents,
        "flex": 0
      }
    }
  }];

  return lineMessageObject;
}
