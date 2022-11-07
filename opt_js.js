



// for Asynchronous to make the function return Promise 
function StorageGet_Promise(key) {
    return new Promise(
        (resolve) => {
            chrome.storage.local.get(key, function (data) { resolve(data) })

        }
    )
}

function StorageSet_Promise(obj) {
    return new Promise(
        (resolve) => {
            chrome.storage.local.set(obj, function () { resolve() })
        }
    )
}



// for side-menu_css.css, change the color to pink
function sideMenu_pink(id_css) {
    let id_css_list = ["SM_NO_top_div", "SM_ASI_top_div", "SM_AK_top_div", "SM_AG_top_div"];

    for (let i of id_css_list){
        let toGrayDom=document.getElementById(i);
        toGrayDom.style.backgroundColor="#f3f3f3";
    }

    let toPinkDom=document.getElementById(id_css);
    toPinkDom.style.backgroundColor="#fff5fb";
}



// a list of saved urls
let savedUrls = []

// savedUrls.push("https://blog.visvirial.com/articles/575")
// chrome.storage.local.set({ "url_list": savedUrls }, function (e) { console.log(e); console.log("local set") });




// load strage local


// updated when something was saved (in opt_save-setting-box)

// load saved url list ("url_list")




async function updateSavedUrls() {

    /**
     * ここから始める。
     * やり直し
     * 
     */





    /*    let updateSavedUrls_promise_get = function () {
            return new Promise((resolve01) => {
                chrome.storage.local.get(null, function (data) { resolve01(data) })
            }
            )
        }
    */


    // for default state
    let nullget_e = await StorageGet_Promise(null)

    console.log("nullget_e", nullget_e)


    // set

    if (!(Object.keys(nullget_e).includes("mainDataObj"))) {
        await StorageSet_Promise({ "mainDataObj": {} })
        savedUrls = []
    }
    else {



        let savedUrlsTmp = nullget_e['mainDataObj']
        savedUrls = Object.keys(savedUrlsTmp).map(
            function (v) {
                return v.split(" ")[1]
            }
        )

        savedUrls = Array.from(new Set(savedUrls));
        console.log("savedUrls", savedUrls)
    }

}
updateSavedUrls()


// 





// a list of saved id (for checkbox) 
let savedId = []



// a list of unsaved id (for checkbox) 
let unsavedId = []


// a list of all id
let allId = []


// a list of all url
let all_Id_Url = {}




// for sanitize!!
function htmlsanitize(str) {
    return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
}


function in_query(tabs) {
    console.log("in")
    let txt = ""

    let tabids = []

    savedId = []
    unsavedId = []
    allId = []
    all_Id_Url = {}


    // console.log("abc")
    for (let i = 0; i < tabs.length; i++) {
        console.log('inconsole')

        // pageHostname=tabs[i].url.hostname
        // console.log(pageHostname)
        // これではだめで、一度URLオブジェクトを作る必要がある

        let tabURL = tabs[i].url;

        if (!(tabURL == location.href)) {

            let tabtitle = htmlsanitize(tabs[i].title)

            let nurl

            try {
                nurl = new URL(tabURL)
                console.log("S")
            } catch {
                nurl = tabtitle;
                console.log(nurl)
                console.log("___E")
            }


            // let nurl = tabURL;
            let pageHostname = nurl.hostname

            // let sharp_removed_url
            // if (tabURL.match(/#/)) {
            //     sharp_removed_url = tabURL.split("#")[0]
            //     // console.log(sharp_removed_url, "sharp_removed_url")
            // } else {
            //     sharp_removed_url = tabURL;
            // }

            txt += "<div class='contents-tabs' id='"
            txt += tabs[i].id
            txt += "'>"

            txt += "<span class='contents-tabs-checkboxs'>"

            txt += "<span class='contents-tabs-ch'>"
            txt += "<input type='checkbox' class='checkbox'/>"
            txt += "</span>"

            txt += "<span class='contents-tabs-saved'>"

            // console.log(sharp_removed_url, "in", savedUrls)
            // console.log(Boolean(sharp_removed_url in savedUrls))

            allId.push(tabs[i].id)
            console.log(tabs[i].id, tabs[i].url)

            if (savedUrls.length != 0) {
                console.log(1212)

                // console.log("l!=0")
                if (savedUrls.includes(tabURL)) {
                    // console.log("being in savedUrls")

                    console.log(1)
                    txt += "saved!"
                    savedId.push(tabs[i].id)
                }
                else {
                    console.log(2)
                    unsavedId.push(tabs[i].id)
                }
            }
            else if (savedUrls.length == 0) {
                console.log(3)

                // console.log("l==0")
                unsavedId.push(tabs[i].id)
            }
            else { }

            txt += "</span>"

            txt += "</span>"

            txt += "<span class='contents-tabs-txt'>"
            txt += '<img src="https://www.google.com/s2/favicons?domain_url=' + pageHostname + '">'
            txt += " "
            txt += '<a'//   href="'
            // txt += tabURL
            txt += '>'
            txt += tabtitle
            txt += "</a>"
            txt += "<br><div class='contents-url'>"
            txt += tabURL
            txt += "</div></span></div>"
            // console.log(tabs[i].id)
            tabids.push(tabs[i].id)

            console.log([tabs[i].url, tabtitle])

            all_Id_Url[tabs[i].id] = [tabs[i].url, tabtitle]

            console.log(all_Id_Url)
            /*console.log(
                savedId,
                unsavedId,
                allId
            )*/
        }
    }

    document.getElementById("main-contents").innerHTML = txt;



    for (let i of tabids) {
        // console.log("before_addEvent")
        // console.log(i)
        document.getElementById(i).querySelector('.contents-tabs-txt').addEventListener('click', function () {
            // let j = i
            // console.log(i)
            // console.log(typeof (i))
            // console.log(tabids)
            chrome.tabs.update(i, { active: true })
        })
    }


}
// }





function reload() {
    console.log("reloaded")

    chrome.tabs.query({}, in_query)

    sideMenu_pink("SM_NO_top_div")

}
// function movepage(tabid) {
//     chrome.tabs.update(
//         tabid
//     )
// }

console.log(0)
chrome.tabs.query({}, in_query)



console.log(1)
// reload()
console.log(2)



chrome.tabs.onMoved.addListener(reload)
chrome.tabs.onDetached.addListener(reload)
chrome.tabs.onMoved.addListener(reload)
chrome.tabs.onRemoved.addListener(reload)
chrome.tabs.onCreated.addListener(reload)
chrome.tabs.onUpdated.addListener(reload)

// }

// aタグにhrefを設定するとそれを触ったときにreload()が動く。