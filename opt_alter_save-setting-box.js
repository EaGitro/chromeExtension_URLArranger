function ASSB_making_DOM(Lang) {
    let txt_ASSB = "";

    let forLangChoice_ASSB_open = ["Open selected items", "選択されているものを開く"];

    txt_ASSB += "<div id='ASSB_main_div'>"

    txt_ASSB += "<div id='ASSB_open_div'>"
    txt_ASSB += "<a>"
    txt_ASSB += forLangChoice_ASSB_open[Lang];
    txt_ASSB += "</a>"
    txt_ASSB += "</div>"

    txt_ASSB += "<div id='ASSB_gear_img_div'>"
    txt_ASSB += "<img src='chrome_ex_GEAR.PNG' id='ASSB_gear_img'>"
    txt_ASSB += "</div>"

    txt_ASSB += "</div>"

    document.getElementById("save-setting-box").innerHTML = txt_ASSB;

}