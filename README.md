# express-graphql-vue
Udemyサイトを参考に各種パッケージをアップグレードして、クライアントから、Vue、GraphQL、Apollo、Expressで映画情報管理をするシステム

## セットアップ  
- graphql-httpを使用した （express-graphqlがno longer maintainedのため）  
  →GraphiQLを使用できないことから、GraphQLのバージョンを下げてexpressーgraphqlを利用するように変更  
- nodemonはnpm serveでOKだが、更新のたびに再起動しないためにnodemonを利用する  
> npx nodemon app   
  
- env読み込みはファイル先頭で実施すること  

- MongoDBはデフォルトで初期Connectを作成した際にIPアドレスを登録して、IP制限をオートで行う。そのため、IPアドレスが変更すると、アクセスがブロックされてしまう。  

## 理解
- MongoDBは、Collection＝Table　 