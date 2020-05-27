/*
関数概要
 買い物リストのカルーセルテンプレートのメッセージを組み立てる処理

引数
 shoppingLists  買い物リストの配列

戻り値
 lineMessageObjecを返す
———————————–*/
function createCarousels(shoppingLists) {
  let carousels = [];

  /* 買い物リストのカルーセルを組み立てる */
  for (let i in shoppingLists) {
    carousels.push({
      text: shoppingLists[i],
      actions: [
        {
          type: "postback",
          label: "買い物リストから削除",
          data: "delete=" + shoppingLists[i]
        }
      ]
    });
  }

  /* カルーセルテンプレートのメッセージを組み立てる */
  const lineMessageObject = [
    {
      type: "template",
      altText: "買い物リスト",
      template: {
        type: "carousel",
        columns: carousels,
        imageAspectRatio: "rectangle",
        imageSize: "cover"
      }
    }
  ];

  return lineMessageObject;
}
