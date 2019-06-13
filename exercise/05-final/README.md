# 我的專案說明
[專案位址](https://github.com/kevin823lin/wd107b/tree/master/exercise/05-final)

[成果展示](https://kevin823lin.github.io/wd107b/exercise/05-final/)

## 專案架構大致分成三個區塊

### 1.導航欄
導航欄使用固定定位（position: fixed）將其固定於視窗上方

**HTML:**

    <div class="navbar">
        <button id="sidebtn" style="background: none;" onclick="sidebtn()"><i class="fa fa-bars"></i></button>
        <a href="#home">Home</a>
        <a href="https://news.google.com/?hl=zh-TW&gl=TW&ceid=TW:zh-Hant">News</a>
        <div class="dropdown">
            <button class="dropbtn">聯絡我 <i class="fa fa-caret-down"></i></button>
            <div class="dropdown-content">
                <li><a href="https://www.facebook.com/Kevin.abcdefg">&nbsp;Facebook</a></li>
                <li><a href="https://www.instagram.com/hao.823/">&nbsp;Instagram</a></li>
                <li><a href="mailto:s110710528@gmail.com">&nbsp;Email</a></li>
            </div>
        </div>
    </div>

**CSS:**

    .navbar {
        position: fixed;
        .
        .
    }

導航欄上的下拉式選單，游標移到dropbtn時(:hover)，會出現下拉式選單

**下拉式選單CSS:**

    .dropbtn {
        .
        .
    }

    .dropdown-content {
        display: none;
        .
        .
    }

    .dropdown-content li {
        .
        .
    }

    .dropdown-content a {
        .
        .
    }

    .dropdown-content a:hover {
        background-color: #e0e0e0
    }

    .dropdown:hover .dropdown-content {
        display: block;
    }

    .dropdown:hover .dropbtn {
        background-color: #3e8e41;
    }

### 2.側邊欄
放置各小專案連結的位置
利用導航欄上的側邊欄圖示開關側邊欄

**側邊欄開關函式JS:**

    function sidebtn() {
        var sidebar = document.getElementsByClassName("sidebar");
        var content = document.getElementsByClassName("content");
        if (sidebar[0].style.width == "0px") {
            for (let i = 0; i < sidebar.length; i++)
                sidebar[i].style.width = "140px";
            for (let i = 0; i < content.length; i++)
                content[i].style.left = "140px";
        }
        else {
            for (let i = 0; i < sidebar.length; i++)
                sidebar[i].style.width = "0px";
            for (let i = 0; i < content.length; i++)
                content[i].style.left = "0px";
        }
    }

### 3.內文
呈現各小專案的位置

## 各小專案介紹

### 1. 主畫面

### 2. 鬼畫符
[專案位址與說明](https://github.com/kevin823lin/wd107b/tree/master/exercise/05-final/canvas)

[成果展示](https://kevin823lin.github.io/wd107b/exercise/05-final/canvas/canvas.html)

### 3. 進位制換算
[專案位址與說明](https://github.com/kevin823lin/wd107b/tree/master/exercise/05-final/dec)

[成果展示](https://kevin823lin.github.io/wd107b/exercise/05-final/dec/dec.html)

### 4. 計算機
[專案位址與說明](https://github.com/kevin823lin/wd107b/tree/master/exercise/05-final/claculator)

[成果展示](https://kevin823lin.github.io/wd107b/exercise/05-final/claculator/claculator.html)
