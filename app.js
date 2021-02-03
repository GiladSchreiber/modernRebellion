var WHITE = '#a48267';
var GREEN = '#4ef72f';
var BLUE = '#01feff';
var PURPLE = '#8c08f5';
var PINK = '#ff00e1';
var RED = '#ff002b';
var ORANGE = '#ff8f02';
var YELLOW = '#ffff03';
var initialColors = [GREEN, BLUE, PURPLE, PINK, RED, ORANGE, YELLOW, WHITE];
var initialText = ["ספרים", "חדשות", "מוזיקה", "אמנות", "וידאו", "סרט", "מיקום", "אחר"];

var currentMatch = "romeoAndJuliet";
var currentItem = "";
var resultPages = {
  "romeoAndJuliet" : ["04w", "07w", "09w", "10w", "11w", "13w", "15w", "21w",], 
  "romeoAndJulietVideos" : ["0", "1", "2", "12", "13"],
  "blackFlags" : ["01w", "03w", "05w", "08w", "14w", "16w", "20w", "22w"],
  "blackFlagsVideos" : ["0", "1", "2", "3"],
  "rosaParks" : ["05w", "07w", "11w", "15w", "18w", "19w", "20w", "24w"],
  "rosaParksVideos" : ["0", "1", "10", "13", "14"],
  "cotege" : ["01w", "03w", "04w", "14w", "16w", "17w",],
  "cotegeVideos" : ["0", "1", "2", "3", "13", "14"],
  "arabSpring" : ["03w", "04w", "05w", "06w", "07w", "11w", "13w", "20w",],
  "arabSpringVideos" : ["2", "3", "6", "9", "10", "13", "14"],
  "hippies" : ["02w", "06w", "09w", "10w", "11w", "14w", "17w", "21w", "22w", "23w"], 
  "hippiesVideos" : ["0", "3", "6", "9", "10", "12", "13"],
  "king" : ["05w", "06w", "10w", "18w", "19w",],
  "kingVideos" : ["0", "1", "6", "7", "12", "13", "14"],
  "teen" : ["02w", "06w", "08w", "12w", "13w", "21w"],
  "teenVideos" : [],
  "robinHood" : ["01w", "03w", "05w", "07w", "11w", "12w", "14w", "17w",],
  "robinHoodVideos" : ["0", "1", "2", "3", "5", "6", "10"],
  "lgbt" : ["04w", "05w", "06w", "07w", "10w", "11w", "16w", "23w"], 
  "lgbtVideos" : ["2", "4", "5", "7", "9", "10", "14"],
  "adam" : ["02w", "04w", "06w", "08w", "10w", "12w", "15w", "21w"],
  "adamVideos" : ["1", "2", "3", "4", "5", "8", "9", "11", "12"],
  "suffragette" : ["04w", "05w", "10w", "15w", "20w", "24w"],
  "suffragetteVideos" : ["1", "2", "3", "9", "10", "11", "12"],
  "sparta" : ["02w", "05w", "07w", "08w", "09w", "13w", "24w"],
  "spartaVideos" : ["1", "3", "4", "5", "6"],
  "partizans" : ["02w", "04w", "07w", "09w", "11w", "13w", "19w", "23w", "23w"],
  "partizansVideos" : ["3", "5", "6", "7", "8", "9"]
  }

var descriptions = {
  "romeoAndJuliet" : "מרד רומנטי של זוג מול משפחותיהם היהירות, שבירת מסגרות נוקשות ושמרניות והקרבה עצמית למען האהבה.",
  "blackFlags" : "כשציבור מחליט לקום ולהפגין מדי יום ביומו, באזורים נרחבים ברחבי הארץ, לסיום כהונתו הארוכה של ראש הממשלה.",
  "rosaParks" : "כשאישה מחליטה לקום ולעשות מעשה, או יותר נכון לשבת, אל מול חוסר צדק ושיוויון חברתי על בסיס צבע עור וגזע.",
  "cotege" : "מחאה נרחבת ליצירת סטנדרט כלכלי אחיד, להפחתת עול יוקר המחייה והזכות לקיום בסיסי אישי, משפחתי וקהילתי בכבוד.",
  "arabSpring" : "מהפכה חוצת מדינות כנגד שחיתות שלטונית, זכויות היסוד ואורח החיים של האזרחים, והתנגדות לשלטון טוטליטרי.",
  "hippies" : "מרד הקורא נגד מלחמה, שמרנות וצרכנות. אמונה בטבע הטוב של האדם, במוזיקה חוצת גבולות, ובאהבה מינית ורומנטית.",
  "king" : "סירוב לקבל אפליה על רקע גזעי, מלחמה על זכויות החופש הבסיסיות של כל אדם באשר הוא, ויוצרת מחאה בכוח המילה.",
  "teen" : "",
  "robinHood" : "לקיחת החוק לידיים ויצירת צדק חברתי וקהילתי אלטרנטיבי, לטובת מענק הזדמנויות שווה לכל שכבות האוכלוסיה.",
  "lgbt" : "מאבק של קהילה ותומכיה כנגד חוקי ממשלה שמרנים המונעים שיוויון לכלל האזרחים על בסיס הנטייה מינית.",
  "adam" : "מרד אישי, אי קבלת מרות, פיתוי ושבירת חוקים ומוסכמות, וזאת מבלי לדעת מה יהיו ההשלכות של החלטה שכזאת.",
  "suffragette" : "כשקהילת נשים יוצאת להיאבק למען זכות ההצבעה, כסמל לחוסר שיוויון מגדרי, ויוצרת הד עולמי שעשה היסטוריה.",
  "sparta" : "מלחמתו של עם עיקש, חזק ואמיץ למול כובשים גדולים בהרבה, ואימוץ אורח חיים ייחודי וקיצוני משאר המדינה.",
  "partizans" : "התנגדות של מעטים מול רבים, עם אמצעים דלים ונחישות אדירה, למען הצלת האחר גם במחיר של הקרבה עצמית."
}
var hebrewNames = {"romeoAndJuliet" : "רומיאו,ויוליה", "blackFlags" : "הדגלים,השחורים", "rosaParks" : "רוזה,פארקס",
"cotege" : "מחאת,הקוטג׳", "arabSpring" : "האביב,הערבי", "hippies" : "ילדי,הפרחים", "king" : "מרטין,לותר קינג", 
"teen" : "מרד,נעורים", "robinHood" : "רובין,הוד", "lgbt" : "מחאת,הלהט״ב", "adam" : "אדם,וחווה", 
"suffragette" : "<br/>סופרג׳יזם", "sparta" : "<br/>ספרטה", "partizans" : "<br/>פרטיזנים"};
var frames = {"romeoAndJuliet" : [RED, RED, RED, PINK, PINK, GREEN, GREEN, ORANGE, ORANGE, ORANGE, ORANGE, ORANGE, ORANGE, ORANGE, YELLOW],
              "blackFlags" : [BLUE, BLUE, RED, RED, BLUE, PINK, PINK, WHITE, WHITE, WHITE, BLUE, BLUE, BLUE, WHITE, YELLOW],
              "rosaParks" : [RED, RED, PINK, PINK, WHITE, WHITE, WHITE, WHITE, WHITE, GREEN, ORANGE, YELLOW, YELLOW, BLUE, BLUE],
              "cotege" : [RED, RED, RED, RED, PINK, WHITE, WHITE, WHITE, WHITE, WHITE, WHITE, WHITE, BLUE, BLUE, BLUE],
              "arabSpring" : [YELLOW, PINK, BLUE, YELLOW, PINK, GREEN, PINK, BLUE, BLUE, BLUE, ORANGE, YELLOW, BLUE, PINK, BLUE],
              "hippies" : [ORANGE, PURPLE, WHITE, PINK, YELLOW, PINK, PURPLE, WHITE, WHITE, ORANGE, ORANGE, PINK, PURPLE, PURPLE, WHITE],
              "king" : [RED, YELLOW, BLUE, PINK, BLUE, PINK, RED, RED, PINK, BLUE, BLUE, GREEN, RED, PURPLE, PURPLE],
              "teen" : [],
              "robinHood" : [ORANGE, PURPLE, ORANGE, ORANGE, PINK, WHITE, ORANGE, YELLOW, YELLOW, GREEN, RED, WHITE, PURPLE, PINK, PURPLE],
              "lgbt" : [BLUE, BLUE, BLUE, WHITE, RED, WHITE, WHITE, BLUE, WHITE, BLUE, WHITE, YELLOW, WHITE, YELLOW, BLUE],
              "adam" : [PINK, PURPLE, YELLOW, PURPLE, RED, RED, PINK, PINK, ORANGE, PURPLE, PINK, PINK, RED, WHITE, WHITE],
              "suffragette" : [PINK, ORANGE, BLUE, BLUE, WHITE, WHITE, WHITE, WHITE, PINK, BLUE, PURPLE, RED, PURPLE, PINK, BLUE],
              "sparta" : [YELLOW, PURPLE, WHITE, RED, ORANGE, RED, RED, YELLOW, PINK, PINK, PINK, YELLOW, PINK, WHITE, GREEN],
              "partizans" : [BLUE, BLUE, GREEN, ORANGE, WHITE, RED, PURPLE, WHITE, RED, WHITE, PINK, PINK, WHITE, PINK, WHITE]
};
var activeBtns = [];
var matches = ["romeoAndJuliet", "blackFlags", "rosaParks", "cotege", "arabSpring", "hippies", "king", "teen",
"robinHood", "lgbt", "adam", "suffragette", "sparta", "partizans"];
let body = document.getElementsByTagName("BODY")[0];
body.style.overflow = "hidden";

/**
 * Gets computed translate values
 * @param {HTMLElement} element
 * @returns {Object}
 */
function getTranslateValues (element) {
  const style = window.getComputedStyle(element)
  const matrix = style['transform'] || style.webkitTransform || style.mozTransform

  // No transform property. Simply return 0 values.
  if (matrix === 'none') {
    return {
      x: 0,
      y: 0,
      z: 0
    }
  }

  // Can either be 2d or 3d transform
  const matrixType = matrix.includes('3d') ? '3d' : '2d'
  const matrixValues = matrix.match(/matrix.*\((.+)\)/)[1].split(', ')

  // 2d matrices have 6 values
  // Last 2 values are X and Y.
  // 2d matrices does not have Z value.
  if (matrixType === '2d') {
    return {
      x: matrixValues[4],
      y: matrixValues[5],
      z: 0
    }
  }

  // 3d matrices have 16 values
  // The 13th, 14th, and 15th values are X, Y, and Z
  if (matrixType === '3d') {
    return {
      x: matrixValues[12],
      y: matrixValues[13],
      z: matrixValues[14]
    }
  }
}

function vwTOpx(value) {
  var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;

  return (x*value)/100;
}

function vhTOpx(value) {
  var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;

  return (y*value)/100;
}

function pxTOvw(value) {
  var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;

  return (100*value)/x;
}

function pxTOvh(value) {
  var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;

  return (100*value)/y;
}

// alert(vhTOpx(3));
// alert(vwTOpx(30));

function toggleObject(id) {
    let indexInArray = activeBtns.indexOf(id);
    if (indexInArray > -1) {
      activeBtns.splice(indexInArray, 1);
    } else {
      activeBtns.push(id)
  }
}

function findCenter(elem) {
  const {x, y, z} = getTranslateValues(elem);
  var centerX = elem.offsetLeft + elem.offsetWidth / 2.0 + parseInt(x);
  var centerY = elem.offsetTop + elem.offsetHeight / 2.0 + parseInt(y);
  return [centerX , centerY];
}

function addLines(){
  $("line").remove();
  if (activeBtns.length <= 1) {
    return;
  }
  for (let i = 0; i < activeBtns.length; i++) {
    var newLine = document.createElementNS('http://www.w3.org/2000/svg','line');
    var firstCenter = findCenter(document.getElementById(activeBtns[i]));
    var secondCenter = findCenter(document.getElementById(activeBtns[(i + 1) % activeBtns.length]));
    newLine.setAttribute('x1',firstCenter[0]);
    newLine.setAttribute('y1',firstCenter[1]);
    newLine.setAttribute('x2',secondCenter[0]);
    newLine.setAttribute('y2',secondCenter[1]);
    $("svg").append(newLine);
  }
}

function checkMatchWithRabel(rabel) {
  var counter = 0;
  for (let i = 0, l = activeBtns.length; i < l; i++) {
    if (resultPages[rabel].includes(activeBtns[i])) {
      counter += 1;
    }
  }
  return counter;
}

function checkMatch(){
  var maxMatch = 0;
  var chosenPage = "";
  for (key in resultPages) {
    var counter = checkMatchWithRabel(key);
    if (counter > maxMatch) {
      maxMatch = counter;
      chosenPage = key;
    }
  }
  return [chosenPage, maxMatch / 5];
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function toggleScreens(showScreen) {
  let displays = ["none", "block"];
  let overflow = ["hidden", "auto"];
  body.style.overflow = overflow[showScreen];
    document.getElementById("resultPage").style.display = displays[showScreen];
    document.getElementById("wholeContent").style.display = displays[(showScreen + 1) % 2];
}

function translateRotate(minX, maxX, minY, maxY, minDeg, maxDeg) {
  var translationStr = "translate(".concat(getRndInteger(minX, maxX), "vw, ", getRndInteger(minY, maxY), "vh)");
    var rotationStr = "rotate(".concat(getRndInteger(minDeg, maxDeg), "deg)");
    return translationStr + " " + rotationStr;
}
 
var buttons = document.getElementsByTagName("button");
for (let i = 0, l = buttons.length; i < l; i++) {
  buttons[i].style.transform = translateRotate(-5, 5, -5, 5, -5, 5);
  buttons[i].addEventListener('click', function() {
    toggleObject(this.id);
    this.classList.toggle("active");
    this.classList.toggle("non-active");
    addLines();
  if (activeBtns.length == 5) {
      var outputMatch = checkMatch();
      currentMatch = outputMatch[0];
      setResultHeaders(outputMatch[1], currentMatch);
      addItems();
      setTimeout(function() {
        toggleScreens(1);
      }, 1000);
    }
  })
}

// resultPage functions

var resVideo = document.getElementById("resVideo");
var res = document.getElementById("res");
var resDesc = document.getElementById("resDesc");
var menu = document.getElementById("menu");
var cover = document.getElementById("cover");

let oneLineHeaders = ["partizans", "suffragette", "sparta"];
let upperNames = ["romeoAndJuliet", "king", "lgbt"];
let lowerNames = ["rosaParks"];
function setResultHeaders(percentage, rabelName) {
    var roundPercentage = Math.round(percentage * 100);
    document.getElementById("percentage").innerHTML = "את.ה " + roundPercentage + "%";
    let rabelName1 = document.getElementById("rabelName1");
    let rabelName2 = document.getElementById("rabelName2");
    let desc = document.getElementById("description");
    if (!oneLineHeaders.includes(currentMatch)) {
      let currentStr = hebrewNames[rabelName].split(",");
      rabelName1.innerHTML = currentStr[0];
      rabelName2.innerHTML = currentStr[1];
    } else {
      rabelName2.innerHTML = hebrewNames[rabelName];
      rabelName1.innerHTML = "";
    }
    if (lowerNames.includes(currentMatch)) {
      rabelName2.style.lineHeight = "80px";
      rabelName2.style.marginBottom = "20px";
      desc.style.paddingTop = "10px";
    } else if (upperNames.includes(currentMatch)){
      rabelName2.style.lineHeight = "120px";
      rabelName2.style.marginBottom = "auto";
      desc.style.paddingTop = "0";
    } else {
      rabelName2.style.lineHeight = "100px";
      rabelName2.style.marginBottom = "auto";
      desc.style.paddingTop = "10px";
    }
    desc.innerHTML = descriptions[rabelName];
}

function createVideoElem() {
  var item = document.createElement("video");
  item.type = "mp4";
  item.style.volume = 0;
  item.autoplay = "true";
  item.muted = "true";
  item.loop = "true";
  return item;
}

function createImageElem() {
  var item = document.createElement("input");
    item.type = "image";
    return item;
}

function resOnLoad(elem) {
  resDesc.style.left =  ($(window).width() + elem.offsetWidth - resDesc.offsetWidth / 2.0) / 2.0 + "px";
  resDesc.style.top = $(window).height() / 2 - 40 + "px";
  menu.style.left = ($(window).width() - elem.offsetWidth) / 2.0 - menu.offsetWidth - 10 + "px";
  menu.style.top = ($(window).height() - elem.offsetHeight) / 2.0 - 3 + "px";
}
res.addEventListener('load', function() {
  resOnLoad(this);
})

resVideo.addEventListener('loadedmetadata', function() {
  resOnLoad(this);
})

function addItem(id, isBottom) {
  var div = document.createElement("div");
  let itemColor = frames[currentMatch][parseInt(id)];
  div.classList.add("rellax");
  div.setAttribute("data-rellax-speed", getRndInteger(0, 10).toString());
  var isVideo = resultPages[currentMatch + "Videos"].includes(id);
  var item = isVideo ? createVideoElem() : createImageElem();
  var extension = isVideo ? "mp4" : "jpg";
  item.classList.add("item");
  item.id = id;
  item.src = "items/" + currentMatch + "/" + id + "." + extension;
  item.style.outline = "3px solid " + itemColor;
  div.style.zIndex = 9990;
  div.style.position = "relative";
  item.style.transform = translateRotate(-40, 40, 0, 150, -8, 8);
  item.style.width = (10 * getRndInteger(2, 4)).toString() + "vw";
  item.addEventListener('mouseenter', function() {
    item.style.outline = "12px solid" + itemColor;
    div.style.zIndex = 9995;
  });
  item.addEventListener('mouseleave', function() {
    item.style.outline = "3px solid " + itemColor;
    div.style.zIndex = 9990;
  });

  item.addEventListener('click', function(event) {
    body.style.overflow = "hidden";
    cover.style.display = "block";
    cover.style.backgroundColor = itemColor;
    currentItem = item.id;
    resDesc.src = "items/" + currentMatch + "/" + id + "Res.png";
    var preview = isVideo ? resVideo : res;
    preview.src = item.src;
    preview.style.display = "block";
    if (item.offsetWidth > item.offsetHeight) {
        preview.style.width = "90vh";
        preview.style.height = "auto";
    } else {
        preview.style.height = "90vh";
        preview.style.width = "auto";
    }
    resDesc.style.display = "block";
    menu.style.display = "block";
    event.stopPropagation();
  });
  div.appendChild(item);
  document.getElementById("innerItems").appendChild(div);
}

var items = document.getElementsByClassName("item");
var types = document.getElementsByClassName("type");
var typeTitles = document.getElementsByClassName("typeTitle");
var nextBtn = document.getElementById("next");
var resultHeaders = document.getElementById("resultHeaders");

let blank = document.getElementById("blank");
for (let i = 0; i < types.length; i++) {
  types[i].style.backgroundColor = initialColors[i];
  types[i].addEventListener("mouseenter", function( event ) {
    typeTitles[i].innerHTML = initialText[i];
    // blank.style.display = "block";
    blank.style.opacity = 0.8;
    for (let j = 0; j < items.length; j++) {
      if (frames[currentMatch][j] != initialColors[i]) {
        // items[j].style.opacity = 0.3;
      } else {
        items[j].parentElement.style.zIndex = 9995;
      }
    };
  });
  types[i].addEventListener("mouseleave", function( event ) {
    // blank.style.display = "none";
    blank.style.opacity = 0;
    typeTitles[i].innerHTML = "";
    setTimeout(function() {
      for (let j = 0, m = items.length; j < m; j++) {
        // items[j].style.opacity = 1.0;
        items[j].parentElement.style.zIndex = 9990;
      };
    }, 150);
  });
}

function addItems() {
    var innerItems = document.createElement("div");
    innerItems.id = "innerItems";
    document.getElementById("items").appendChild(innerItems);
    for (let i = 0, l = frames[currentMatch].length; i < l; i++) {
      addItem(i.toString(), false);
    }
    var rellax = new Rellax('.rellax');
    itemsOpen = true;

}

function removeItems() {
  document.getElementById("innerItems").remove();
  itemsOpen = false;
}

var returnBtn = document.getElementById("return");
returnBtn.addEventListener('click', function() {
  $("line").remove();
  activeBtns = [];
  for (let i = 0, l = buttons.length; i < l; i++) {
    buttons[i].classList.remove("active");
    buttons[i].classList.add("non-active");
  }
  removeItems();
  toggleScreens(0);
})


nextBtn.addEventListener('click', function() {
  currentMatch = matches[(matches.indexOf(currentMatch) + 1) % matches.length];
  setResultHeaders(checkMatchWithRabel(currentMatch) / 5, currentMatch);
  removeItems();
  window.scrollTo(0, 0);
  addItems();
});

window.addEventListener('click', function (e) {
   closeResult();
});

document.addEventListener('keydown', logKey);

function logKey(e) {
  if (e.code == 'Space') {
      window.scrollTo(0, 0);
      currentMatch = 'adam';
      setResultHeaders('0.8', currentMatch);
      addItems();
      toggleScreens(1);
  }
}

function closeResult() {
  body.style.overflow = "auto";
  cover.style.display = "none";
  res.src = "";
  res.style.display = "none";
  resVideo.style.display = "none";
  resVideo.src = "";
  resDesc.style.display = "none";
  menu.style.display = "none";
  resDesc.src = "";
}

var scrollDirection = 1;

function isElemOutOfView(elem){
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    return scrollDirection == -1 ? docViewBottom < elemTop : docViewTop > elemBottom;
}

function updateItem(item) {
  const {x, y, z} = getTranslateValues(item);
  var docViewTop = $(window).scrollTop();
  var docViewBottom = window.pageYOffset + $(window).height();
  item.style.width = (10 * getRndInteger(2, 4)).toString() + "vw";
  if (scrollDirection == -1) {
    let yTranslation = pxTOvh(docViewTop - $(window).height() - item.offsetHeight);
    item.style.transform = translateRotate(-40, 40, yTranslation, yTranslation, -8, 8);
  } else {
    let yTranslation = pxTOvh(item.offsetTop + parseInt(y) + item.offsetHeight) + 100;
    item.style.transform = translateRotate(-40, 40, yTranslation, yTranslation, -8, 8);
  } 
}

var itemsOpen = false;
var oldScroll = 0;
window.addEventListener("scroll", function (e) {
  if (itemsOpen) {
    if (oldScroll > $(window).scrollTop()) {
      scrollDirection = -1;
    } else if (oldScroll < $(window).scrollTop()) {
      scrollDirection = 1;
    }
    oldScroll = $(window).scrollTop();
    var items = document.getElementsByClassName("item");
    for (let i = 0; i < items.length; i++) {
      if (isElemOutOfView(items[i])) {
        updateItem(items[i]);
      }
    }
  }
});


function menuClicked(id) {
  currentItem = id;
  let itemColor = frames[currentMatch][parseInt(id)];
  console.log(id);
    var isVideo = resultPages[currentMatch + "Videos"].includes(id);

    var item = document.getElementById(id);
    resDesc.src = "items/" + currentMatch + "/" + id + "Res.png";
    var elemOn = isVideo ? resVideo : res;
    var elemOff = isVideo ? res : resVideo;
    elemOff.style.display = "none";
    elemOff.src = "";
    elemOn.src = item.src;
    elemOn.style.display = "block";
    if (item.offsetWidth > item.offsetHeight) {
        elemOn.style.width = "90vh";
        elemOn.style.height = "auto";
    } else {
        elemOn.style.height = "90vh";
        elemOn.style.width = "auto";
    }
}

menu.addEventListener("click", function(event) {
  var currentFrames = frames[currentMatch];
  for (var i = 1; i < currentFrames.length; i++) {
    var currentI = (i + parseInt(currentItem)) % currentFrames.length;
    if (currentFrames[currentI] == currentFrames[parseInt(currentItem)]) {
        menuClicked(currentI.toString());
        event.stopPropagation();
        break;
    }
  }
})