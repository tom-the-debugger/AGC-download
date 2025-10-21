const bookmarks = document.getElementsByClassName("_dragThisLink")
for (let i = 0; i < bookmarks.length; i++) {
    hoverText = "Rename this to something meaningful"; // Changes the words of the dragged bookmark prompting the user to change the bookmarklet name
    bookmarks[i].addEventListener("mouseover", () => {
    bookmarks[i].innerHTML = hoverText;
    });

    defaultText = bookmarks[i].innerHTML;
    bookmarks[i].addEventListener("mouseout", () => {
    bookmarks[i].innerHTML = defaultText;
    });
}
