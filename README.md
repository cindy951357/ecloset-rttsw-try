# ecloset-react-rttsw-try **作品説明**
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

這些**XXXPage**資料夾內的 CalendarPage.tsx, ClosetPage.tsx, OutfitPage.tsx
內容大同小異
差別只在於
```
<WithNestedNavPage navItemList={navItemList} defaultNavItem={NAV_VIEW_OUTFIT} />
```
中引入的navItemList與defaultNavItem不同

---

三.2 components目錄
在作者寫這份文件時，本目錄已經累積到十四個資料夾
不在此文件一一說明
僅就幾個較值得提出的程式碼做說明

1. CalendarGrid
2. OutfitItem
3. Puzzle