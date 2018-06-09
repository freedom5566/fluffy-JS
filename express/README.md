為甚麼要做node?

因為以前有次想學node

剛好有一場黑客松
當天想直接用express做題目，當作練功

兩天當然是搞不定，直接爆炸給評審看XDDDD

從此node變成一個我怕怕的東西XDD

但是害怕的事物總是要克服

所以就有這個庫了

在加上現在這個時代工程師在走，JS不能不學！ 
***
### node
*package.json*的版本符號問題
* `~` 安裝小版號的最新版(修修BUG)。 
  + e.g. ~1.2.0 最新是1.3.5， 1.2.X最後一版是7，就會安裝1.2.7
* `^` 安裝第二個版號的最新版本(新增功能)。 
  - e.g. ^1.2.0 最新是2.1.0， 1.X.X最後一版是1.7.7，就會安裝1.7.7
* `*` 裝最新版(架構大改)

可以用yarn或npm來看套件最新版本

```sh
$ yarn info express version
$ npm info express version 
```

### typescript

js的語法拿來寫後端真的讓我有點不習慣XD

於是我想說試試看typescript

還蠻有趣的

    tsc --alwaysStrict -t ES2018 hello.ts
嚴格模式，並使用es2018

不過我想應該沒人想每次編譯都打一大串參數吧

所以可以先`tsc --init`，會建立一個`tsconfig.json`設定可以先打好在裏面

還有更多方便的[方法](https://www.typescriptlang.org/docs/home.html "typescript")


