


// a list of saved keywords
let savedKeywords = []

// load saved keyword
async function updateSavedKeywords() {

    let nullget_e = await StorageGet_Promise(null)

    // for default state
    // set
    if (!(Object.keys(nullget_e).includes("keyword_list"))) {
        await StorageSet_Promise({ "keyword_list": [] });
    }

    let tmp01 = await StorageGet_Promise("keyword_list")
    savedKeywords = tmp01["keyword_list"]

    console.log(savedKeywords)

}
updateSavedKeywords()



// a list of saved Groups' names
let savedGroups = [];

// load saved gropus
async function updateSavedGroups() {

    let nullget_e = await StorageGet_Promise(null)

    // for default state
    // set
    if (!(Object.keys(nullget_e).includes("group_list"))) {
        await StorageSet_Promise({ "group_list": [] });
    }

    // update
    let tmp01 = await StorageGet_Promise("group_list");
    savedGroups = tmp01["group_list"];
    console.log(savedGroups);

    console.log(123456789);
}
updateSavedGroups()



// a function to save keyword, group, memo at local
async function SSBsaveKGM(keyword, group) {
    // keyword
    console.log(4534523)
    let savedKeywordListtmp = await StorageGet_Promise("keyword_list");
    let savedKeywordList = savedKeywordListtmp["keyword_list"];
    console.log(savedKeywordList);
    if (!(savedKeywordList.includes(keyword))) {
        savedKeywordList.push(keyword);
        savedKeywordList.sort();
        StorageSet_Promise({ "keyword_list": savedKeywordList });
    }
    // group
    let savedGroupListtmp = await StorageGet_Promise("group_list");
    let savedGroupList = savedGroupListtmp["group_list"];
    if (!(savedGroupList.includes(group))) {
        savedGroupList.push(group);
        savedGroupList.sort();
        StorageSet_Promise({ "group_list": savedGroupList });
    }

}






// a function to save data

async function SSBsaveData(toSaveUrlsTitles) {



    // save

    console.log(347238945720348)

    // main data 
    // for default
    let nullget_e = await StorageGet_Promise(null)
    if (!(Object.keys(nullget_e).includes("mainDataObj"))) {
        await StorageSet_Promise({ "mainDataObj": {} });
    }


    let mainData_ = {};


    // making the base of the data

    console.log(mainData_)


    // making key (yyyymmddhhmmss url)
    // yyyymmddhhmmss
    let nowTmp = new Date()
    let tmp = ""
    let yyyymmddhhmmss = ""

    yyyymmddhhmmss += String(nowTmp.getFullYear()) + "-"

    tmp = "00" + String(nowTmp.getMonth() + 1)
    yyyymmddhhmmss += tmp.substring(tmp.length - 2) + "-"

    tmp = "00" + String(nowTmp.getDate())
    yyyymmddhhmmss += tmp.substring(tmp.length - 2) + "-"

    tmp = "00" + String(nowTmp.getHours())
    yyyymmddhhmmss += tmp.substring(tmp.length - 2) + "-"

    tmp = "00" + String(nowTmp.getMinutes())
    yyyymmddhhmmss += tmp.substring(tmp.length - 2) + "-"

    tmp = "00" + String(nowTmp.getSeconds())
    yyyymmddhhmmss += tmp.substring(tmp.length - 2)


    // key and data
    console.log(mainData_)
    // data



    let mainDataData = []  // [keyword, group, memo, title]

    // get keyword
    let mainDataGetKeyword = document.getElementById("txt_SSB_keyword_inp").value;
    mainDataData.push(mainDataGetKeyword);

    // get group
    let mainDataGetGroup = document.getElementById("txt_SSB_group_inp").value;
    mainDataData.push(mainDataGetGroup);

    // get memo
    let mainDataGetMemo = document.getElementById("txt_SSB_memo_textarea").value;
    mainDataData.push(mainDataGetMemo);


    console.log(mainDataData, "mainDataData")



    // here below are for UPDATE!!  COMING SOON!!!
    mainDataData.push("");
    mainDataData.push("");
    mainDataData.push("");


    // save keyword, group, memo at local 
    // keep async (must not wait this session)

    SSBsaveKGM(mainDataGetKeyword, mainDataGetGroup)    // a function to save keyword, group at local

    console.log(mainData_)


    for (let i of toSaveUrlsTitles) {
        // key url

        let mainDataKey = "";

        mainDataKey += yyyymmddhhmmss;
        mainDataKey += " ";
        mainDataKey += i[0]; // url


        console.log(mainData_, "before")
        // mainDataData が、 push される際に、コピーされていないと素の配列も書き換えられてしまうため、コピーする。


        mainData_[mainDataKey] = [...mainDataData];

        console.log("mainData_[mainDataKey]", mainData_[mainDataKey])
        console.log("i[1]", i[1])

        // mainData_[mainDataKey].push(i[1]); // title

        console.log(mainData_, "after")

        mainData_[mainDataKey].push(i[1])



    }
    // set main data

    let savedMainDatatmp = await StorageGet_Promise("mainDataObj");
    let savedMainData = savedMainDatatmp["mainDataObj"];
    console.log(savedMainData, mainData_)
    Object.assign(mainData_, savedMainData);
    await StorageSet_Promise({ "mainDataObj": mainData_ });



}




// set the keywords at selectbox

function set_SSB_keywordlist() {
    let txt_SSB_keyword_keywordlist_add_innerHTML = ""


    // load saved keyword
    if (savedKeywords.length != 0) {
        for (let i of savedKeywords) {
            let innerHTML_SSB_keywordlist_eachItem = ""

            innerHTML_SSB_keywordlist_eachItem += "<div id='"
            innerHTML_SSB_keywordlist_eachItem += "SK_"
            innerHTML_SSB_keywordlist_eachItem += i
            innerHTML_SSB_keywordlist_eachItem += "' "
            innerHTML_SSB_keywordlist_eachItem += "class='SSB_savedKeywords_list_item_class'"
            innerHTML_SSB_keywordlist_eachItem += ">"
            innerHTML_SSB_keywordlist_eachItem += i
            innerHTML_SSB_keywordlist_eachItem += "</div>"
            txt_SSB_keyword_keywordlist_add_innerHTML += innerHTML_SSB_keywordlist_eachItem
        }
        console.log(txt_SSB_keyword_keywordlist_add_innerHTML)
    }
    console.log(txt_SSB_keyword_keywordlist_add_innerHTML)
    console.log(savedKeywords.length)


    txt_SSB_keyword_keywordlist_add_innerHTML += ""
    document.getElementById("txt_SSB_keyword_keywordlist_div").innerHTML = txt_SSB_keyword_keywordlist_add_innerHTML

}


// set the groups at selectbox
function set_SSB_grouplist() {
    console.log(12312)
    let txt_SSB_group_grouplist_add_innerHTML = ""


    // load saved group
    if (savedGroups.length != 0) {
        for (let i of savedGroups) {
            let innerHTML_SSB_grouplist_eachItem = ""

            innerHTML_SSB_grouplist_eachItem += "<div id='"
            innerHTML_SSB_grouplist_eachItem += "SG_"
            innerHTML_SSB_grouplist_eachItem += i
            innerHTML_SSB_grouplist_eachItem += "' "
            innerHTML_SSB_grouplist_eachItem += "class='SSB_savedGroups_list_item_class'"
            innerHTML_SSB_grouplist_eachItem += ">"
            innerHTML_SSB_grouplist_eachItem += i
            innerHTML_SSB_grouplist_eachItem += "</div>"
            txt_SSB_group_grouplist_add_innerHTML += innerHTML_SSB_grouplist_eachItem
        }
        console.log(txt_SSB_group_grouplist_add_innerHTML)
    }
    console.log(txt_SSB_group_grouplist_add_innerHTML)



    document.getElementById("txt_SSB_group_grouplist_div").innerHTML = txt_SSB_group_grouplist_add_innerHTML

}








/*-------------------*/







// for Language choice
let Lang = 0    // 0: Eng, 1: JP

function SSB_making_DOM(Lang) {













    // a part of txt_SSB, for select-unsaved
    let txt_SSB_selectunsaved = ""


    let forLangChoice_selectunsaved = ["Select all unsaved", "未保存のものを全選択"]

    txt_SSB_selectunsaved += "<a id='selectunsaved_btn_id'>"
    txt_SSB_selectunsaved += forLangChoice_selectunsaved[Lang]
    txt_SSB_selectunsaved += "</a>"



    // a part of txt_SSB, for deselect
    let txt_SSB_deselect = ""

    let forLangChoice_deselect = ["Deselect all", "選択解除"]

    txt_SSB_deselect += "<a id='deselect_btn_id'>"
    txt_SSB_deselect += forLangChoice_deselect[Lang]
    txt_SSB_deselect += "</a>"



    // a part of txt_SSB for keyword
    let txt_SSB_keyword = ""

    let forLangChoice_keyword = ["Entering the keyword", "キーワードを入力"]

    txt_SSB_keyword += "<div id='txt_SSB_keyword_div'>"
    txt_SSB_keyword += forLangChoice_keyword[Lang]
    txt_SSB_keyword += "</div>"

    txt_SSB_keyword += "<input id='txt_SSB_keyword_inp' />"
    txt_SSB_keyword += "<div id='txt_SSB_keyword_keywordlist_div'>"

    txt_SSB_keyword += "</div>"
    // set the keywords at selectbox


    // a part of txt_SSB for group
    let txt_SSB_group = ""

    let forLangChoice_group = ["Entering the group name", "グループ名を入力"]

    txt_SSB_group += "<div id='txt_SSB_group_div'>"
    txt_SSB_group += forLangChoice_group[Lang]
    txt_SSB_group += "</div>"

    txt_SSB_group += "<input id='txt_SSB_group_inp' />"
    txt_SSB_group += "<div id='txt_SSB_group_grouplist_div'>"

    txt_SSB_group += "</div>"


    // a part of txt_SSB for memo (a note)
    let txt_SSB_memo = ""

    let forLangChoice_memo = ["Entering a note (within 50 characters)", "50文字以内でメモを入力"]

    txt_SSB_memo += "<div id='txt_SSB_memo_div'>"
    txt_SSB_memo += forLangChoice_memo[Lang]
    txt_SSB_memo += "</div>"

    txt_SSB_memo += "<div id='txt_SSB_memo_counter'>0/50"
    txt_SSB_memo += "</div>"


    txt_SSB_memo += "<textarea id='txt_SSB_memo_textarea' maxlength='50'></textarea> "



    // a part of txt_SSB for save
    let txt_SSB_save = ""

    let forLangChoice_save_div = ["Save!!", "この内容で保存"]

    txt_SSB_save += "<div id='txt_SSB_save_div'><a>"
    txt_SSB_save += forLangChoice_save_div[Lang]
    txt_SSB_save += "</a></div>"



    // txt_SSB to be innerHtml
    let txt_SSB = ""

    txt_SSB += "<div id ='SSB_main-div'>"

    txt_SSB += "<div id='SSB_select_deselect'>"

    txt_SSB += "<div id='select-unsaved'>"
    txt_SSB += txt_SSB_selectunsaved
    txt_SSB += "</div>"

    txt_SSB += "<div id='deselect'>"
    txt_SSB += txt_SSB_deselect
    txt_SSB += "</div>"

    txt_SSB += "</DIV>"

    txt_SSB += "<div id='SSB_inputs'>"

    txt_SSB += "<div id='keyword'>"
    txt_SSB += txt_SSB_keyword
    txt_SSB += "</div>"

    txt_SSB += "<div id='group'>"
    txt_SSB += txt_SSB_group
    txt_SSB += "</div>"

    txt_SSB += "<div id='memo'>"
    txt_SSB += txt_SSB_memo
    txt_SSB += "</div>"

    txt_SSB += "<div id='save'>"
    txt_SSB += txt_SSB_save
    txt_SSB += "</div>"

    txt_SSB += "</div>"


    txt_SSB += "</div>"


    /*---------------------*/
    /* set txt at DOM */

    document.getElementById("save-setting-box").innerHTML = txt_SSB;
    //     console.log("save-settig")
    //     console.log(txt_SSB)



    // addEventListener

    // selectunsaved btn
    document.getElementById("selectunsaved_btn_id").addEventListener("click", selectunsaved_btn_fn)


    // deselect btn
    document.getElementById("deselect_btn_id").addEventListener("click", deselect_btn_fn)




    // entering memo, counter
    document.getElementById("txt_SSB_memo_textarea").addEventListener("keyup", function (v) {
        console.log("aa")
        let textareaTxt = document.getElementById("txt_SSB_memo_textarea").value
        // console.log(textareaTxt)
        document.getElementById("txt_SSB_memo_counter").textContent = textareaTxt.length + "/50"
    })




    // save

    document.getElementById("txt_SSB_save_div").addEventListener("click",
        {
            Lang_addevent: Lang,
            handleEvent: SSB_save_addEvent
        }
    )

}

SSB_making_DOM(Lang)

/*------------------------------------- */



/* click events (addEventlistener) */


// selectunsaved btn
// document.getElementById("selectunsaved_btn_id").addEventListener("click", selectunsaved_btn_fn)
function selectunsaved_btn_fn() {
    console.log("selectunsaved_clicked")
    for (let selectunsaved_btn_fn_id of unsavedId) {
        // console.log(document.getElementById(selectunsaved_btn_fn_id).querySelector(".contents-tabs-checkboxs .contents-tabs-ch .checkbox"))
        qS_Check_select = document.getElementById(selectunsaved_btn_fn_id).querySelector(".contents-tabs-checkboxs .contents-tabs-ch .checkbox");
        qS_Check_select.checked = true;
    }
}


// deselect btn
// document.getElementById("deselect_btn_id").addEventListener("click", deselect_btn_fn)

function deselect_btn_fn() {
    for (let deselect_btn_fn_id of allId) {
        qS_Check_deselect = document.getElementById(deselect_btn_fn_id).querySelector(".contents-tabs-checkboxs .contents-tabs-ch .checkbox")
        qS_Check_deselect.checked = false;
    }

}



// saved keuword list (each item) (must be exected after set_SSB_keywordlist() )
function savedKeywordList_addEvent() {
    for (let i of savedKeywords) {
        let IdName = "SK_"
        IdName += i
        document.getElementById(IdName).addEventListener("click", { keyword_name: i, handleEvent: SKaddEvent_id })

    }
    function SKaddEvent_id() {
        console.log("A")
        let KN = this.keyword_name;
        let tmp = document.getElementById("txt_SSB_keyword_inp")
        tmp.value = KN

    }

}


// saved group list (each item) (must be exected after set_SSB_grouplist() )
function savedGroupList_addEvent() {
    for (let i of savedGroups) {
        let IdName = "SG_"
        IdName += i
        document.getElementById(IdName).addEventListener("click", { group_name: i, handleEvent: SGaddEvent_id })

    }
    function SGaddEvent_id() {
        console.log("A")
        let GN = this.group_name;
        let tmp = document.getElementById("txt_SSB_group_inp")
        tmp.value = GN

    }

}



// // entering memo, counter
// document.getElementById("txt_SSB_memo_textarea").addEventListener("keyup", function (v) {
//     console.log("aa")
//     let textareaTxt = document.getElementById("txt_SSB_memo_textarea").value
//     // console.log(textareaTxt)
//     document.getElementById("txt_SSB_memo_counter").textContent = textareaTxt.length + "/50"
// })


// clear the inputs, textarea
function clearInputsTextarea() {
    document.getElementById("txt_SSB_keyword_inp").value = "";
    document.getElementById("txt_SSB_group_inp").value = "";
    document.getElementById("txt_SSB_memo_textarea").value = "";
    document.getElementById("txt_SSB_memo_counter").textContent = "0/50";

}






// exec async functions and related functions

async function allAsyncFnctions() {
    // saved keywords
    console.log("い")
    await updateSavedKeywords()
    console.log("ろ")
    set_SSB_keywordlist()
    console.log("は")
    savedKeywordList_addEvent()
    console.log("に")
    // saved groups
    console.log("")
    await updateSavedGroups()
    console.log(123124142342)
    set_SSB_grouplist()
    savedGroupList_addEvent()

}
allAsyncFnctions()



// save

// document.getElementById("txt_SSB_save_div").addEventListener("click", SSB_save_addEvent)
function SSB_save_addEvent() {
    let Lang = this.Lang_addevent;


    // get cheked url
    let toSaveUrlsTitles = [];


    for (let i in all_Id_Url) {
        tmpDom = document.getElementById(i).querySelector(".contents-tabs-checkboxs .contents-tabs-ch .checkbox");
        if (tmpDom.checked == true) {
            if (!(all_Id_Url[i][0] == location.href)) {
                toSaveUrlsTitles.push(all_Id_Url[i]);
                console.log(toSaveUrlsTitles)
            }
        }
    }
    toSaveUrlsTitles = Array.from(new Set(toSaveUrlsTitles));

    console.log(toSaveUrlsTitles, "toSaveUrlsTitles");
    /* toSaveUrlsTitles
    Array
    [
        [url,title],
        [url,title]
    ]
    */

    // when nothing selected

    if (toSaveUrlsTitles.length == 0) {
        let forLangChoice_SSB_nothing_selected = ["Nothing has been selected!", "何も選択さいません"];

        window.alert(forLangChoice_SSB_nothing_selected[Lang])
    } else {

        let forLangChoice_SSB_successfullySaved = [" items has been saved successfully!", "個のURLが保存されました"]


        // save

        console.log(toSaveUrlsTitles)

        when_save(toSaveUrlsTitles, Lang);

        window.alert(toSaveUrlsTitles.length + forLangChoice_SSB_successfullySaved[Lang])


    }


}






/* when save */

async function when_save(toSaveUrlsTitles, Lang) {
    await SSBsaveData(toSaveUrlsTitles);
    await allAsyncFnctions()
    await updateSavedUrls()
    deselect_btn_fn(); // checkbox == false
    clearInputsTextarea()

    await SM_making_DOM(Lang)
    reload()
    sideMenu_pink("SM_NO_top_div")

}


// }



/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/




