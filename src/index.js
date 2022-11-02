import './index.less'
import {data} from './components/article/article.js'
import {menuItems} from './components/menu/menu.js'

const header = document.querySelector(".header")

const articleMaker = (articleObj) => {
    let articleContainer = document.createElement("div")
    let articleTitle = document.createElement("h2")
    let date = document.createElement("p")
    let p1 = document.createElement("p")
    let p2 = document.createElement("p")
    let p3 = document.createElement("p")
    let expandButton = document.createElement("span")
    
    articleContainer.classList.add("article")
    articleTitle.textContent = articleObj.title
    date.classList.add("date")
    date.textContent = articleObj.date
    p1.textContent = articleObj.firstParagraph
    p2.textContent = articleObj.secondParagraph
    p3.textContent = articleObj.thirdParagraph
    expandButton.classList.add("expandButton")
    expandButton.textContent = "+"

    expandButton.addEventListener("click", (e) => {
        articleContainer.classList.toggle("article-open")
    })

    articleContainer.appendChild(articleTitle)
    articleContainer.appendChild(date)
    articleContainer.appendChild(p1)
    articleContainer.appendChild(p2)
    articleContainer.appendChild(p3)
    articleContainer.appendChild(expandButton)

    return articleContainer
}

const menuMaker = (menuArr) => {
    let menuDrop = document.createElement("div")
    let list = document.createElement("ul")
    let menu = document.querySelector(".menu-button")

    menu.addEventListener("click",(e) => {
        menuDrop.classList.toggle("menu--open")
    })
    menuDrop.classList.add("menu")
    menuDrop.appendChild(list)

    menuArr.forEach(el => {
        let item = document.createElement("li")
        item.textContent = el
        list.appendChild(item)
    })

    return menuDrop
}

header.appendChild(menuMaker(menuItems))

data.forEach((el) => {
    let article = articleMaker(el)
    document.querySelector(".articles").appendChild(article)
});