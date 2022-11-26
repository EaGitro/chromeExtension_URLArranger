/* DOM

AMC_main

    AMC_main_header
        AMC_main_header_checkbox

        AMC_header_contents-tabs-txt

            AMC_main_header_TU
            AMC_main_header_date
            AMC_main_header_keyword
            AMC_main_header_memo

    
    AMC_One_Date_div
        AMC_subHead_date_div
            AMC_subHead_date_btn_a     (a btn ("select this all"))
            AMC_subHead_date_OnlyDate_div   (date)
            

        // each item

        AMC_eachItem
            AMC_eachItem_checkbox_class
                AMC_eachItem_checkbox       (check box)


            AMC_contents-tabs-txt
         
                AMC_eachItem_favicon-title-url_div
                    AMC_eachItem_title_a    (title)
                    AMC_eachItem_url_div    (url)

                AMC_eachItem_date

                AMC_eachItem_keyword-group

                    AMC_eachItem_keyword

                    AMC_eachItem_group

                AMC_eachItem_memo




*/


// making DOM of AMC sub head

function AMC_making_subHead(TF_first, M_ASI_AK_AG, Lang) {
    let forLangChoice_AMC_subHead_btn = ["select this all", "この範囲全てを選択"]

    let AMC_subHead = "";
    if (!TF_first) {
        AMC_subHead = "</div>"
    }
    AMC_subHead += "<div id='AMC_One_Date_div_"
    AMC_subHead += M_ASI_AK_AG;
    AMC_subHead += "' class='AMC_One_Date_div'>"


    AMC_subHead += "<div id='AMC_subHead_date_div_"
    AMC_subHead += M_ASI_AK_AG;
    AMC_subHead += "' class='AMC_subHead_date_div'>"


    AMC_subHead += "<div id='AMC_subHead_date_btn_a_"
    AMC_subHead += M_ASI_AK_AG;
    AMC_subHead += "' class='AMC_subHead_date_btn_a'><a>"
    AMC_subHead += forLangChoice_AMC_subHead_btn[Lang];
    AMC_subHead += "</a></div>"

    AMC_subHead += "<div id='AMC_subHead_date_OnlyDate_div_"
    AMC_subHead += M_ASI_AK_AG;
    AMC_subHead += "' class='AMC_subHead_date_OnlyDate_div'>"
    AMC_subHead += M_ASI_AK_AG;
    AMC_subHead += "</div>"


    AMC_subHead += "</div>"

    return AMC_subHead


}

// making DOM of AMC each item

function AMC_makig_eachItem(id_U_D, url, title, date, keyword, group, memo) {

    let txt_AMC_eachItem = "";

    txt_AMC_eachItem += "<div id='AMC_eachItem_"
    txt_AMC_eachItem += id_U_D;
    txt_AMC_eachItem += "' class='AMC_eachItem'>"

    txt_AMC_eachItem += "<div class='AMC_eachItem_checkbox_class'>"
    txt_AMC_eachItem += "<input type='checkbox' class='AMC_eachItem_checkbox'/>"
    txt_AMC_eachItem += "</div>"

    let nurl = url
    try {
        nurl = new URL(nurl)
        console.log("S")
    } catch {

    }

    // txt_AMC_eachItem += "<div class='AMC_eachItem_favicon'>"
    // txt_AMC_eachItem += "</div>"
    let pageHostname = nurl.hostname;

    txt_AMC_eachItem += "<div class='AMC_contents-tabs-txt'>"

    txt_AMC_eachItem += "<div class='AMC_eachItem_favicon-title-url_div'>"
    txt_AMC_eachItem += "<img src='https://www.google.com/s2/favicons?domain_url=" + pageHostname + "'>  "
    txt_AMC_eachItem += "<a href='"
    txt_AMC_eachItem += url;
    txt_AMC_eachItem += "' target='_blank' class='AMC_eachItem_title_a'>"
    txt_AMC_eachItem += title;
    txt_AMC_eachItem += "</a><br>"
    txt_AMC_eachItem += "<div class='AMC_eachItem_url_div'>"
    txt_AMC_eachItem += url;
    txt_AMC_eachItem += "</div>"
    txt_AMC_eachItem += "</div>"


    txt_AMC_eachItem += "<div class='AMC_eachItem_date'>"
    txt_AMC_eachItem += date;
    txt_AMC_eachItem += "</div>"

    txt_AMC_eachItem += "<div class='AMC_eachItem_keyword-group'>"

    txt_AMC_eachItem += "<div class='AMC_eachItem_keyword'>"
    txt_AMC_eachItem += keyword;
    txt_AMC_eachItem += "</div>"

    txt_AMC_eachItem += "<div class='AMC_eachItem_group'>"
    txt_AMC_eachItem += group;
    txt_AMC_eachItem += "</div>"

    txt_AMC_eachItem += "</div>"

    txt_AMC_eachItem += "<div class='AMC_eachItem_memo'>"
    txt_AMC_eachItem += memo;
    txt_AMC_eachItem += "</div>"

    txt_AMC_eachItem += "</div>"

    txt_AMC_eachItem += "</div>"

    return txt_AMC_eachItem




}




// functions for addEventListener (opt_side-menu.js)

async function SM_top_subHead_making_DOM(asi_ak_ag, Lang) {

    ASSB_making_DOM(Lang);

    // making DOM of top in main
    let mainDataObjTmp = await StorageGet_Promise("mainDataObj");
    let mainDataObj = mainDataObjTmp["mainDataObj"];


    let txt_AMC = "";

    txt_AMC += "<div id='AMC_main'>"


    txt_AMC += "<div id='AMC_main_header'>"


    txt_AMC += "<div id='AMC_main_header_checkbox'>"
    let forLangChoice_AMC_header_checkbox = ["select", "選択"];
    txt_AMC += forLangChoice_AMC_header_checkbox[Lang];
    txt_AMC += "</div>"


    txt_AMC += "<div id='AMC_header_contents-tabs-txt'>"


    txt_AMC += "<div id='AMC_main_header_TU'>"
    let forLangChoice_AMC_header_TU1 = ["saved urls", "保存済みURL"];
    txt_AMC += forLangChoice_AMC_header_TU1[Lang];
    txt_AMC += "<br>"
    let forLangChoice_AMC_header_TU2 = ["titles", "タイトル"];
    txt_AMC += forLangChoice_AMC_header_TU2[Lang]
    txt_AMC += "</div>"

    txt_AMC += "<div id='AMC_main_header_date'>"
    let forLangChoice_AMC_header_date = ["date<br>(Year-Month-Date-<br>Hour-Second)", "保存日時<br>(年-月-日-時-秒)"];
    txt_AMC += forLangChoice_AMC_header_date[Lang];
    txt_AMC += "</div>"

    txt_AMC += "<div id='AMC_main_header_KG'>"

    txt_AMC += "<div id='AMC_main_header_keyword'>"
    let forLangChoice_AMC_header_keyword = ["keywords", "キーワード"];
    txt_AMC += forLangChoice_AMC_header_keyword[Lang];
    txt_AMC += "</div>"

    txt_AMC += "<div id='AMC_main_header_group'>"
    let forLangChoice_AMC_header_group = ["groups", "グループ名"];
    txt_AMC += forLangChoice_AMC_header_group[Lang];
    txt_AMC += "</div>"

    txt_AMC += "</div>"

    txt_AMC += "<div id='AMC_main_header_memo'>"
    let forLangChoice_AMC_header_memo = ["notes", "メモ"];
    txt_AMC += forLangChoice_AMC_header_memo[Lang];
    txt_AMC += "</div>"

    txt_AMC += "</div>"


    txt_AMC += "</div>"



    // All Saved Items
    if (asi_ak_ag == "ASI") {

        // to pink
        sideMenu_pink("SM_ASI_top_div");

        let DateSortedObjKeyArr = Object.keys(mainDataObj).sort();

        let M_ASI_AK_AG = ''

        let ASI_allDate = new Set();

        let TF_first = true;

        for (let i in mainDataObj) { // mainDataObj { "Date url" :[]}
            let ThisDate = i.split(" ")[0]

            ASI_allDate.add(ThisDate);

            if (M_ASI_AK_AG != ThisDate) {

                M_ASI_AK_AG = ThisDate;

                txt_AMC += AMC_making_subHead(TF_first, M_ASI_AK_AG, Lang);

                TF_first = false;


            }

            let AMC_eachItem = "";
            AMC_eachItem += AMC_makig_eachItem(
                i,
                i.split(" ")[1],
                mainDataObj[i][6],
                ThisDate,
                mainDataObj[i][0],
                mainDataObj[i][1],
                mainDataObj[i][2]
            );

            txt_AMC += AMC_eachItem;


        }

        txt_AMC += "</div>"

        document.getElementById("main-contents").innerHTML = txt_AMC;


        // addEvent (select this all)

        for (let i of ASI_allDate) {

            let idAddEvent = "AMC_One_Date_div_";
            idAddEvent += i;
            let element_AMC_OneDate_div = document.getElementById(idAddEvent);
            element_AMC_OneDate_div.querySelector(".AMC_subHead_date_btn_a").addEventListener("click",
                {
                    AMC_DOM: element_AMC_OneDate_div,
                    handleEvent: AMC_addEvent_selectThisAll
                }
            )
        }


    }



    // All Keywords
    else if (asi_ak_ag == "AK") {

        sideMenu_pink("SM_AK_top_div")

        // arrange data, categorizing with keyword

        let arrangeDataKeyword = {};  // {keyword : {data},...}

        // arrangeDataKeywords
        for (let i of savedKeywords) {
            arrangeDataKeyword[i] = {};
        }

        for (let i in mainDataObj) {
            let keywordOfMainData = "";
            keywordOfMainData = mainDataObj[i][0];
            console.log(i);
            console.log(keywordOfMainData);
            let tmp = arrangeDataKeyword[keywordOfMainData];    // tmp => {}
            console.log(arrangeDataKeyword, tmp)
            tmp[i] = mainDataObj[i];

        }


        // making DOM

        let TF_first = true;
        for (let i in arrangeDataKeyword) {
            let M_ASI_AK_AG = i;
            txt_AMC += AMC_making_subHead(TF_first, M_ASI_AK_AG, Lang);

            let AMC_eachItem = "";

            let dataDataObj = arrangeDataKeyword[i];    // {data,data,...}. data => {"date url":[...]} 

            for (let dataData in dataDataObj) {

                AMC_eachItem += AMC_makig_eachItem(
                    dataData,
                    dataData.split(" ")[1],
                    mainDataObj[dataData][6],
                    dataData.split(" ")[0],
                    mainDataObj[dataData][0],
                    mainDataObj[dataData][1],
                    mainDataObj[dataData][2]
                );
            }
            TF_first = false;

            txt_AMC += AMC_eachItem;
        }

        txt_AMC += "</div>"

        document.getElementById("main-contents").innerHTML = txt_AMC;


        // addEvent (select this all)
        for (let i in arrangeDataKeyword) {

            let idAddEvent = "AMC_One_Date_div_";
            idAddEvent += i;
            let element_AMC_OneDate_div = document.getElementById(idAddEvent);
            element_AMC_OneDate_div.querySelector(".AMC_subHead_date_btn_a").addEventListener("click",
                {
                    AMC_DOM: element_AMC_OneDate_div,
                    handleEvent: AMC_addEvent_selectThisAll
                }
            )

        }

    }



    // All Groups
    else if (asi_ak_ag == "AG") {

        sideMenu_pink("SM_AG_top_div");

        // arrange data, categorizing with groupname

        let arrangeDataGroup = {};  // {group : {data},...}

        // arrangeDataKeywords
        for (let i of savedGroups) {
            arrangeDataGroup[i] = {};
        }

        for (let i in mainDataObj) {
            let groupOfMainData = "";
            groupOfMainData = mainDataObj[i][1];
            console.log(i);
            console.log(groupOfMainData);
            let tmp = arrangeDataGroup[groupOfMainData];    // tmp => {}

            tmp[i] = mainDataObj[i];

        }


        // making DOM

        let TF_first = true;
        for (let i in arrangeDataGroup) {
            let M_ASI_AK_AG = i;
            txt_AMC += AMC_making_subHead(TF_first, M_ASI_AK_AG, Lang);

            let AMC_eachItem = "";

            let dataDataObj = arrangeDataGroup[i];    // {data,data,...}. data => {"date url":[...]} 

            for (let dataData in dataDataObj) {

                AMC_eachItem += AMC_makig_eachItem(
                    dataData,
                    dataData.split(" ")[1],
                    mainDataObj[dataData][6],
                    dataData.split(" ")[0],
                    mainDataObj[dataData][0],
                    mainDataObj[dataData][1],
                    mainDataObj[dataData][2]
                );
            }
            TF_first = false;

            txt_AMC += AMC_eachItem;
        }

        txt_AMC += "</div>"

        document.getElementById("main-contents").innerHTML = txt_AMC;



        // addEvent (select this all)
        for (let i in arrangeDataGroup) {

            let idAddEvent = "AMC_One_Date_div_";
            idAddEvent += i;
            let element_AMC_OneDate_div = document.getElementById(idAddEvent);
            element_AMC_OneDate_div.querySelector(".AMC_subHead_date_btn_a").addEventListener("click",
                {
                    AMC_DOM: element_AMC_OneDate_div,
                    handleEvent: AMC_addEvent_selectThisAll
                }
            )

        }
    }






}

function SM_top_subHead_addEvent() {
    let asi_ak_ag = this.ASI_AK_AG;
    let Lang = this.Lang;
    SM_top_subHead_making_DOM(asi_ak_ag, Lang)
}




function AMC_addEvent_selectThisAll() {
    let AMC_DOM = this.AMC_DOM;
    console.log(AMC_DOM);
}