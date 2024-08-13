// let hero = document.querySelector(".hero")
// let silde = document.querySelector("#silde")
// let animated = document.querySelector(".animated-wrapper")

// const time_line = new TimelineMax();

// // 參數1 要得變數名稱
// // 參數2 給他duration
// // 參數3 控指原始狀態
// // 參數4 控制結束狀態


// time_line.fromTo(
//     hero,
//     1,
//     {height : "0%"},
//     {height : "100%" , ease:Power2.easeInOut},
// ).fromTo(
//     hero,
//     1.5,
//     {width : "80%"},
//     {width : "100%" , ease:Power2.easeInOut},
// ).fromTo(
//     silde,
//     1,
//     {x: "-100%"},
//     {x: "0%" , ease:Power2.easeInOut},
//     "-=1.2",
// ).fromTo(
//     animated,
//     0.3,
//     {opacity:1},
//     {opacity:0},

// )

// //  ? 用settime function 裡面的point event 使fixed沒效果

// setTimeout(()=>{
//     animated.style.pointerEvents="none";
// },3000)


// ? 不會讓enter鍵 送出內容 Enter需要大寫 
window.addEventListener("keypress",(e)=>{
    if (e.key == "Enter") {
        e.preventDefault()
    }
});

// ? 預防預設的from表單的button 

let allbtn = document.querySelectorAll("button")
allbtn.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        e.preventDefault()
    })
})

//  ?改變select的顏色

let allselect = document.querySelectorAll("select")
allselect.forEach(select=>{
    select.addEventListener("change",(e)=>{
        setGPA()
        changcolor(e.target)
    })
})

// ? 同步GPA (Credit)
let credits = document.querySelectorAll(".credit")
credits.forEach((credit)=>{
    credit.addEventListener("input",()=>{
        setGPA()
    })
})



// 改驗顏色
function changcolor(target) {
    if (target.value == "A" || target.value =="A-") {
        target.style.backgroundColor ="lightgreen";
        target.style.color = "white"
    }
    else if (target.value == "B" || target.value =="B-" || target.value =="B+") {
        target.style.backgroundColor ="yellow";
        target.style.color = "white"
    }
    else if (target.value == "C" || target.value =="C-" || target.value =="C+") {
        target.style.backgroundColor ="pink";
        target.style.color = "white"
    }
    else if (target.value == "D" || target.value =="D-" || target.value =="D+") {
        target.style.backgroundColor ="blue";
        target.style.color = "white"
    }
    else if (target.value == "F" ) {
        target.style.backgroundColor ="gray";
        target.style.color = "white"
    }
}


//  成績分配圖
function convertor(grade) {
  switch (grade) {
    case "A":
      return 4.0;
    case "A-":
      return 3.7;
    case "B+":
      return 3.4;
    case "B":
      return 3.0;
    case "B-":
      return 2.7;
    case "C+":
      return 2.4;
    case "C":
      return 2.0;
    case "C-":
      return 1.7;
    case "D+":
      return 1.4;
    case "D":
      return 1.0;
    case "D-":
      return 0.7;
    case "F":
      return 0.0;
    default:
      return 0;
  }
}


// 算出GPA
function setGPA() {
    let formLength = document.querySelectorAll("form").length
    let credit = document.querySelectorAll(".credit")
    let select = document.querySelectorAll("select")
    let Creditsum = 0
    let sum = 0

    // ?計算學分
    for (let i = 0; i < credit.length; i++) {
        Creditsum += Number(credit[i].value)
        console.log(Number(credit[i].value))
    }

    // ?計算成績總和
    for (let i= 0; i < formLength; i++) {
        sum +=  Number(credit[i].value) * Number(convertor(select[i].value))
        console.log(Number(credit[i].value)* Number(convertor(select[i].value)))

    }

    let result ;
    if (result == 0) {
        result = (0.00).toFixed(2)
    }else{
        result = (sum/Creditsum).toFixed(2)
    }
    // console.log(result)
    document.getElementById("result-gpa").innerText=result
    
}


// 增加表單
let plus = document.querySelector(".plus-btn")
plus.addEventListener("click",()=>{
    let newform = document.createElement("form")
    let newdiv = document.createElement("div")
    newdiv.classList.add("grade")

    //  ?製作五個小元素
    let input1 = document.createElement("input")
    input1.setAttribute("type","text")
    input1.setAttribute("list","opt")
    input1.classList.add("class-category")

    // 第二個input
    let input2 = document.createElement("input")
    input2.setAttribute("type","text")
    input2.classList.add("class-number")

    // 第三個input
    let input3 = document.createElement("input")
    input3.setAttribute("type","number")
    input3.setAttribute("min","0")
    input3.setAttribute("max","6")
    input3.classList.add("credit")
    input3.addEventListener("input",()=>{
        setGPA()
    });

    // here is the select tag
  let newSelect = document.createElement("select");
  newSelect.classList.add("select");
  var opt1 = document.createElement("option");
  opt1.setAttribute("value", "");
  let textNode1 = document.createTextNode("");
  opt1.appendChild(textNode1);
  var opt2 = document.createElement("option");
  opt2.setAttribute("value", "A");
  let textNode2 = document.createTextNode("A");
  opt2.appendChild(textNode2);
  var opt3 = document.createElement("option");
  opt3.setAttribute("value", "A-");
  let textNode3 = document.createTextNode("A-");
  opt3.appendChild(textNode3);
  var opt4 = document.createElement("option");
  opt4.setAttribute("value", "B+");
  let textNode4 = document.createTextNode("B+");
  opt4.appendChild(textNode4);
  var opt5 = document.createElement("option");
  opt5.setAttribute("value", "B");
  let textNode5 = document.createTextNode("B");
  opt5.appendChild(textNode5);
  var opt6 = document.createElement("option");
  opt6.setAttribute("value", "B-");
  let textNode6 = document.createTextNode("B-");
  opt6.appendChild(textNode6);
  var opt7 = document.createElement("option");
  opt7.setAttribute("value", "C+");
  let textNode7 = document.createTextNode("C+");
  opt7.appendChild(textNode7);
  var opt8 = document.createElement("option");
  opt8.setAttribute("value", "C");
  let textNode8 = document.createTextNode("C");
  opt8.appendChild(textNode8);
  var opt9 = document.createElement("option");
  opt9.setAttribute("value", "C-");
  let textNode9 = document.createTextNode("C-");
  opt9.appendChild(textNode9);
  var opt10 = document.createElement("option");
  opt10.setAttribute("value", "D+");
  let textNode10 = document.createTextNode("D+");
  opt10.appendChild(textNode10);
  var opt11 = document.createElement("option");
  opt11.setAttribute("value", "D");
  let textNode11 = document.createTextNode("D");
  opt11.appendChild(textNode11);
  var opt12 = document.createElement("option");
  opt12.setAttribute("value", "D-");
  let textNode12 = document.createTextNode("D-");
  opt12.appendChild(textNode12);
  var opt13 = document.createElement("option");
  opt13.setAttribute("value", "F");
  let textNode13 = document.createTextNode("F");
  opt13.appendChild(textNode13);

  newSelect.appendChild(opt1);
  newSelect.appendChild(opt2);
  newSelect.appendChild(opt3);
  newSelect.appendChild(opt4);
  newSelect.appendChild(opt5);
  newSelect.appendChild(opt6);
  newSelect.appendChild(opt7);
  newSelect.appendChild(opt8);
  newSelect.appendChild(opt9);
  newSelect.appendChild(opt10);
  newSelect.appendChild(opt11);
  newSelect.appendChild(opt12);
  newSelect.appendChild(opt13);

//  ?增加 event
newSelect.addEventListener("change",(e)=>{
    setGPA(),
    changcolor(e.target)

})

//   製作新的button
let newbtn = document.createElement("button")
newbtn.classList.add("allbtn")
let newitag = document.createElement("i")
newitag.classList.add("fa-solid","fa-bomb")
newbtn.appendChild(newitag)

newbtn.addEventListener("click",(e)=>{
  e.preventDefault()
  e.target.parentElement.parentElement.style.animation=
  "scaledown 0.5s ease forwards";
  e.target.parentElement.parentElement.addEventListener("animationend",
    (e)=>{
      e.target.remove()
      setGPA()
    })
})






    newdiv.appendChild(input1)
    newdiv.appendChild(input2)
    newdiv.appendChild(input3)
     newdiv.appendChild(newSelect)
    newdiv.appendChild(newbtn)
   

    newform.appendChild(newdiv)

    let main_input = document.querySelector(".main-input")
    main_input.appendChild(newform)

    newform.style.animation = "scaleup 0.5s ease forwards"
});

// 刪除整個form

let trash = document.querySelectorAll(".allbtn")
trash.forEach((trash)=>{
    trash.addEventListener("click",(e)=>{
        e.target.parentElement.parentElement.classList.add("remove")
    })
});
// ? 給trash 功能不用刪除太快
trash.forEach((trash)=>{
  let nform = trash.parentElement.parentElement
  nform.addEventListener("transitionend",(e)=>{
    e.target.remove();
    setGPA()
  })
})


// !排序演算法 必須複習 
let btn1 = document.querySelector(".Asce")
let btn2 = document.querySelector(".Desc")

btn1.addEventListener("click",()=>{
  handleSorting("descending")
})

// 有改過
btn2.addEventListener("click",()=>{
  handleSorting("ascending")
})

function handleSorting(direction) {
  let grader = document.querySelectorAll("div.grade")
  let objectarr = []

  for (let i = 0; i < grader.length; i++) {
    let class_name = grader[i].children[0].value
    let class_number = grader[i].children[1].value
    let class_credit = grader[i].children[2].value
    let class_grade = grader[i].children[3].value

    // console.log(class_name,class_number,class_credit,class_grade)
    if (
      !(class_name == ""
       && class_number == "" 
       && class_credit == "" 
       && class_grade == "")
    ) {
       let class_obj={
      class_name,
      class_number,
      class_credit,
      class_grade
    };
    objectarr.push(class_obj)
      
    }
   
  }
  
  // ? 取得arrobj 之後 , 轉換grade成分數
  for (let i = 0; i < objectarr.length; i++) {
      objectarr[i].class_gradenum = convertor(objectarr[i].class_grade)    
    
  }

  objectarr = mergeSort(objectarr)
  if (direction == "descending") {
    objectarr = objectarr.reverse();
  }
  // element 可以使用inner
  
  let allinput = document.querySelector(".main-input")
  allinput.innerHTML="";

  for (let i =0; i< objectarr.length; i++ ){
    allinput.innerHTML += `<form>
    <div class="grade">
        <input
        type="text"
        placeholder="class-category"
        class="class-category"
        list="opt"
        value=${objectarr[i].class_name}
        /><!--
        --><input
        type="text"
        placeholder="class number"
        class="class-number"
        value=${objectarr[i].class_number}
        /><!--
        --><input
        type="number"
        placeholder="credits"
        min="0"
        max="6"
        class="credit"
        value=${objectarr[i].class_credit}
        /><!--
        --><select name="select" class="select">
        <option value=""></option>
        <option value="A">A</option>
        <option value="A-">A-</option>
        <option value="B+">B+</option>
        <option value="B">B</option>
        <option value="B-">B-</option>
        <option value="C+">C+</option>
        <option value="C">C</option>
        <option value="C-">C-</option>
        <option value="D+">D+</option>
        <option value="D">D</option>
        <option value="D-">D-</option>
        <option value="F">F</option></select
        ><!--
        --><button class="allbtn">
        <i class="fa-solid fa-bomb"></i>
        </button>
    </div>
    </form>`;
  }

  // 改變select 但是需要用js 改
  let grade = grader.document.querySelectorAll("div.grade")
  for (let i =0; i < grade.length; i++){
    grade[i].children[3].value = objectarr[i].class_grade;
  }

  // 改變SELECT顏色
  let allselects = document.querySelectorAll("select")
  allselects.forEach((select)=>{
    changcolor(select)
    select.addEventListener("input",(e)=>{
      setGPA()
      changcolor(e.target)
    })
  })

  // credit事件
  let allCredits = document.querySelectorAll(".credit")
  allCredits.forEach((credit)=>{
    credit.addEventListener("change",()=>{
      setGPA()
    })
  })

  // 垃圾桶
  trash = document.querySelectorAll(".allbtn")
  allltrash.forEach((trash)=>{
    trash.addEventListener("click",(e)=>{
      e.preventDefault()
      e.target.parentElement.parentElement.style.animation=
      "scaledown 0.5s ease forwards";
      e.target.parentElement.parentElement.addEventListener("animationend",
        (e)=>{
          e.target.remove()
          setGPA()
        })
    })
  })
 

}

// ! 好戲登場 演算法
function merge(a1,a2) {
  let result = []
  let i = 0
  let j = 0

  while (i < a1.length && j  < a2.length) {
    if (a1[i].class_gradenum > a2[j].class_gradenum) {
      result.push(a2[j])
      j++;
    }else{
      result.push(a1[i])
      i++
    }
  }

  while(i < a1.length){
    result.push(a1[i])
    i++
  }
  while(j < a2.length){
    result.push(a2[j])
    j++
  }

  return result
}

// !! 使用到遞迴 可以用FUNCTIOM在另一個FUN裡面
function mergeSort(arr) {
  if (arr.length == 0) {
    return;
  }

  if (arr.length == 1) {
    return arr;
  }else{
    let middle = Math.floor(arr.length/2)
    let left = arr.slice(0,middle);
    let right = arr.slice(middle , arr.length);
    return merge(mergeSort(left),mergeSort(right))
  }
}