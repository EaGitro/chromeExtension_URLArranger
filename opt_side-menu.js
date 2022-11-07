
async function SM_making_DOM(Lang) {

    
    await allAsyncFnctions()

    let txt_SM = "";


    let forLangChoice_SM_NO_subHead = ["Now Open Tabs", "現在開いているタブ"];
    let txt_SM_NO = "";

    txt_SM_NO += "<div id='SM_NO_top_div'>";
    txt_SM_NO += "<a id='SM_NO_sub-head_a'>"
    txt_SM_NO += forLangChoice_SM_NO_subHead[Lang];
    txt_SM_NO += "</a>";
    txt_SM_NO += "</div>";

    txt_SM += txt_SM_NO;


    let forLangChoice_SM_ASI_subHead = ["All Saved Items", "全ての保存済みURL"]
    let txt_SM_ASI = "";
    txt_SM_ASI += "<div id='SM_ASI_top_div'>";
    txt_SM_ASI += "<a id='SM_ASI_sub-head_a'>";
    txt_SM_ASI += forLangChoice_SM_ASI_subHead[Lang];
    txt_SM_ASI += "</a>";
    txt_SM_ASI += "</div>";


    txt_SM += txt_SM_ASI;



    let forLangChoice_SM_AK_subHead = ["All Keywords", "キーワード別"];
    let txt_SM_AK = "";
    txt_SM_AK += "<div id='SM_AK_top_div'>";

    txt_SM_AK += "<div id='SM_AK_sub-head_div'>";
    txt_SM_AK += "<a id='SM_AK_sub-head_a'>";
    txt_SM_AK += forLangChoice_SM_AK_subHead[Lang];
    txt_SM_AK += "</a>";
    txt_SM_AK += "</div>"

    txt_SM_AK += "<div id='SM_AK_chest-selectbox_div'>";
    console.log(savedKeywords)

    for (let i of savedKeywords) {
        console.log(i)
        let txt_SM_AK_tmp = "";
        txt_SM_AK_tmp += "<div id='SM_AK_selectbox_";
        txt_SM_AK_tmp += i;
        txt_SM_AK_tmp += "' class='SM_AK_selectbox'>";
        txt_SM_AK_tmp += i;
        txt_SM_AK_tmp += "</div>";

        txt_SM_AK += txt_SM_AK_tmp;

    }

    txt_SM_AK += "</div>";

    txt_SM_AK += "</div>";


    txt_SM += txt_SM_AK;



    let forLangChoice_SM_AG_subHead = ["All Groups", "グループ別"];
    let txt_SM_AG = "";
    txt_SM_AG += "<div id='SM_AG_top_div'>"

    txt_SM_AG += "<div id='SM_AG_sub-head_div'>"
    txt_SM_AG += "<a id='SM_AG_sub-head_a'>";
    txt_SM_AG += forLangChoice_SM_AG_subHead[Lang];
    txt_SM_AG += "</a>";
    txt_SM_AG += "</div>";

    txt_SM_AG += "<div id='SM_AG_chest-selectbox_div'>";

    for (let i of savedGroups) {
        let txt_SM_AG_tmp = "";
        txt_SM_AG_tmp += "<div id='SM_AG_selectbox_";
        txt_SM_AG_tmp += i;
        txt_SM_AG_tmp += "' class='SM_AG_selectbox'>";
        txt_SM_AG_tmp += i;
        txt_SM_AG_tmp += "</div>";

        txt_SM_AG += txt_SM_AG_tmp;

    }


    txt_SM_AG += "</div>";

    txt_SM_AG += "</div>";


    txt_SM += txt_SM_AG;


    // set to dom

    document.getElementById("side-menu").innerHTML = txt_SM;



    // addEvent (display the opt_js.js)
    document.getElementById("SM_NO_top_div").addEventListener("click", function () {
        reload();
        allAsyncFnctions();
        console.log(Lang)
        SSB_making_DOM(Lang)
        
    }
    )


    // addEvent (function is in opt_alter_main-contents.js)
    document.getElementById("SM_ASI_top_div").addEventListener("click",
        {
            Lang: Lang,
            ASI_AK_AG: "ASI",
            handleEvent: SM_top_subHead_addEvent
        }
    )

    document.getElementById("SM_AK_sub-head_div").addEventListener("click",
        {
            Lang: Lang,
            ASI_AK_AG: "AK",
            handleEvent: SM_top_subHead_addEvent
        }
    )


    document.getElementById("SM_AG_sub-head_div").addEventListener("click",
        {
            Lang: Lang,
            ASI_AK_AG: "AG",
            handleEvent: SM_top_subHead_addEvent
        }
    )

    /*  COMING SOON!!
    
        for (let i of savedKeywords) {
            let tmpId = "SM_AK_selectbox_" + i;
            document.getElementById(tmpId).addEventListener("click",
                {
                    Lang: Lang,
                    v: i,
                    handleEvent: SM_AK_selectbox_addEvent
                }
            )
        }
    
        for (let i of savedGroups) {
            let tmpId = "SM_AG_selectbox_" + i;
            document.getElementById(tmpId).addEventListener("click",
                {
                    Lang: Lang,
                    v: i,
                    handleEvent: SM_AG_selectbox_addEvent
                }
            )
        }
        */

}
SM_making_DOM(0);

