const rating = 4;
const star = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
        viewBox="0 0 24 24" stroke-width="1.5"
        stroke-linecap="round" stroke-linejoin="round"
        class="lucide lucide-star-icon lucide-star fill-current">
        <path
        d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
    </svg>
    `;
const iconLists = document.querySelectorAll(".icons");
const iconsBagList = document.querySelectorAll(".icons-bag");
console.log(iconLists, "iconListsiconLists")
const lists = document.querySelectorAll(".stars");
lists.forEach((list) => {
    let html = "";
    for (let i = 1; i <= 5; i++) {
        html += `
    <li class="${i <= rating ? 'text-yellows-900' : 'text-grays-200'}">
        ${star}
    </li>
    `;
    }
    list.innerHTML = html;
})
iconLists.forEach((icon) => {
    let html = "";
    html += ` <button type="button" class="product-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round" class="lucide lucide-heart-icon lucide-heart">
                                    <path
                                        d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
                                </svg>
                            </button>
                            <button type="button" class="product-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round" class="lucide lucide-eye-icon lucide-eye">
                                    <path
                                        d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                                    <circle cx="12" cy="12" r="3" />
                                </svg>
                            </button>`
    icon.innerHTML = html;
})
iconsBagList.forEach((icon) => {
    let html = "";
    html += `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round"
                                    stroke-linejoin="round" class="lucide lucide-handbag-icon lucide-handbag">
                                    <path
                                        d="M2.048 18.566A2 2 0 0 0 4 21h16a2 2 0 0 0 1.952-2.434l-2-9A2 2 0 0 0 18 8H6a2 2 0 0 0-1.952 1.566z" />
                                    <path d="M8 11V6a4 4 0 0 1 8 0v5" />
                                </svg>`
    icon.innerHTML = html;
})
const itemStar = document.querySelectorAll(".item");
console.log(itemStar, "itemStaritemStaritemStar")
itemStar.forEach((icon) => {
    let html = "";
    for (let i = 1; i <= 5; i++) {
        html += `
    <li class="${i <= +icon.dataset.type ? 'text-yellows-900' : 'text-grays-200'}">
        ${star}
    </li>
    `;
    }
    icon.innerHTML = html;
})
