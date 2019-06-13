# 我的專案說明
[專案位址](https://github.com/kevin823lin/wd107b/tree/master/exercise/05-final)

[成果展示](https://kevin823lin.github.io/wd107b/exercise/05-final/)

## 主專案大致上分成三個區塊

### 1.導航欄
導航欄使用固定定位（position: fixed）將其固定於視窗上方

HTML:

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

CSS:

    .navbar {
        position: fixed;
        .
        .
    }

導航欄上的下拉式選單，游標移到dropbtn時(:hover)，會出現下拉式選單

下拉式選單CSS:

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

### 1. 鬼畫符
[專案位址](https://github.com/kevin823lin/wd107b/tree/master/exercise/05-final/canvas)

[成果展示](https://kevin823lin.github.io/wd107b/exercise/05-final/canvas/canvas.html)

### 2. 進位制換算
[專案位址](https://github.com/kevin823lin/wd107b/tree/master/exercise/05-final/dec)

[成果展示](https://kevin823lin.github.io/wd107b/exercise/05-final/dec/dec.html)

### 3. 計算機
[專案位址](https://github.com/kevin823lin/wd107b/tree/master/exercise/05-final/claculator)

[成果展示](https://kevin823lin.github.io/wd107b/exercise/05-final/claculator/claculator.html)
