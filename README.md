# ecloset-react-rttsw-try **作品説明**
零
```
npm install --legacy-peer-deps
npm start
```

---

一.1 解釋 RTTSW 縮寫分別為何
* React 18.2.0
* TypeScript 4.7.4
* TailwindCSS 3.1.5
* Storybook 6.5.9
* Webpack 5.73.0

一.2 解釋本 repository 的目的與內容
目的主要是讓作者我可以磨練前端功力
加上我很喜歡研究穿搭
所以就製作了這個穿搭日曆的 App
在這個App中，使用者可以拼裝一組全套的穿搭，然後再指定要在哪一天穿上這套穿搭
*但要注意的是，目前作者寫的專案是純前端的，也就是玩了一陣子App後瀏覽器視窗一關閉，存過的資料就會消失，亦即沒有真實的後端，是用Redux在處理瀏覽體驗時的暫存資料*


---


二 src下的目錄有：
1. assets
2. components
3. locales
4. stories
5. utils


---

三 針對src下較重要的**pages**與**components**目錄做說明

---

三.1 pages目錄
目錄內的資料夾有：
1. CalenderPage
2. ClosetPage
3. OutfitPage

這三個個目錄不會是唯一的三個目錄，
未來還會針對新的 pages 添加目錄
*至少會添加的目錄將會是 TagsPage 與 SettingsPage*

這些**XXXPage**資料夾內的 CalendarPage.tsx, ClosetPage.tsx, OutfitPage.tsx
內容大同小異
差別只在於
```
<WithNestedNavPage navItemList={navItemList} defaultNavItem={NAV_VIEW_OUTFIT} />
```
中引入的**navItemList**與**defaultNavItem**不同，此二 constants 都被定義在個別的 .tsx 檔案內

---

三.2 components目錄
在作者寫這份文件時，本目錄已經累積到十四個資料夾
不在此文件一一說明
僅就幾個較值得提出的程式碼做說明

1. CalendarGrid
2. OutfitItem
3. Puzzle

三.2.1 CalendarGrid
1. 主要的自定函數目前只有
```
onOutfitCellClick()
```
其做的事情為
```
dispatch(setZoomedInAreaContent({
            viewMode: 'SIMPLE_MODE',
            clothIDs: clothFiles,
        }));
```
在這裡做的事情不複雜，只是要在 global 的 state management 告知彈窗要放大瀏覽的圖片相關的資訊
為釐清而補充說明的是，其中viewMode是為了scalability而有
這變數是希望可以讓 user 自選想要看清爽的版面模式（只有衣服穿搭照片）還是要看資訊豐富的版面模式(例如多出衣服品牌資訊或衣服特徵資訊等等的)
dispatch之後，會受到影響的是 
```
src/components/ZoomedInOutfitItem/ZoomedInOutfitItem.tsx
```
2. 在 jsx 區域最主要的 迴圈 為`outfitDate.outfitDateTupleArr.map((tuple, i) => { 略})`
tuple[0] 是 放日曆上這一套穿搭的"日期"，目前版本是暫定一天只能有一個穿搭，未來可能會擴充（ＸＤ）
而 **tuple[1]** 是放 **mockOutfitId** 即穿搭的編號
迴圈所要 render 的最大主角是 <OutfitItem> 與其上方位置的日期（每一格不秀月份而只秀是幾號）

在 render <OutfitItem>時，必須指定四件衣服的IDs參數 (最少是一件，最多是四件)。
<OutfitItem>將在本文件後續的 三.2.2 段落中被提及。

三.2.2 OutfitItem
1. 在 jsx 的主迴圈大架構為
```
clothIDs.map((clothID, i) => {略}
```
其中 **clothID** 是從父元件傳進來的引數。需注意的是，一套穿搭會對應到多個衣服單品，穿搭-to-單品是 one-to-many 的 mapping。

2. 關於 OutfitItem 的 **borderRadiusList**
由於要營造出左上、右上、右下、左下四個位置有不同的 border radius 效果，所以 **borderRadiusList** 是一個寫死的常數。