'use strict';

document.addEventListener('DOMContentLoaded', async function() {
    let json;
    if (typeof jsonStr != "undefined") {
        json = JSON.parse(jsonStr);
    } else {
        let resp = await fetch("./index.json");
        json = await resp.json();    
    }
    
    let title = json["general"]["title"];
    if (typeof title != "undefined") {
        document.title = title;
    }

    setCSS(json["general"]);
    createGroups(json["groups"]);
});

function setCSS(general) {
    let root = document.querySelector(':root');

    let updateDict = [
        {"key": "--color-bg", "val": general["backgroundcolor"]},
        {"key": "--color-fr", "val": general["textcolor"]},
        {"key": "--color-hov", "val": general["hovercolor"]},
        {"key": "--icon-size", "val": general["iconsize"]},
        {"key": "--font-size", "val": general["fontsize"]},
        {"key": "--orientation", "val": general["orientation"]}
    ];

    for (let d of updateDict) {
        if (typeof d["val"] != "undefined" && d["val"] != "") {
            root.style.setProperty(d["key"], d["val"]);
        }
    }

    //special case
    if (general["orientation"] == "column" || general["orientation"] == "column-reverse") {
        root.style.setProperty("--orientation-display", "flex");
    }
}

function createGroups(groups) {
    let template = document.createElement("template");    
    let groupsHtml = groupsToHTML(groups);
    template.innerHTML = groupsHtml.trim();

    let links = document.querySelector("#links");
    links.innerHTML = "";
    links.append(template.content);
}

function groupsToHTML(groups) {
    let groupsHtml = ""
    for (let group of groups) {
        let groupName = group["name"];
        let itemsHtml = itemsToHTML(group["items"]);
        let groupHtml = `
            <div class="group">
                <div class="header">${groupName}</div>
                <div class="items">
                    ${itemsHtml}
                </div>
            </div>
        `
        groupsHtml += groupHtml;
    }
    return groupsHtml;
}

function itemToHTML(caption, address, image) {
    let imgHtml;
    if (image.startsWith("badge://")) {
        let badgeStrs = image.slice(8).split("|");
        let badgeStr = badgeStrs[0];
        let badgeStyle = "";
        if (badgeStrs.length > 1) {
            badgeStyle = badgeStrs[1];
        }
        imgHtml = `<span class="badge" style="${badgeStyle}">${badgeStr}</span>`
    } else {
        imgHtml = `<img src="${image}"/>`
    }

    let itemHtml = `
        <a href="${address}">
            <div class="link">
                <span class="icon">${imgHtml}</span>
                <span class="text">${caption}</span>
            </div>
        </a>
    `;
    return itemHtml;
}

function itemsToHTML(items) {
    let itemsHtml = "";
    for (let item of items) {
        itemsHtml += itemToHTML(item["caption"], item["address"], item["image"]);
    }
    return itemsHtml;
}