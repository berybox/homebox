let jsonStr = ` 
{
    "general": {
        "description": "Sample HomeBox cofiguration file",
        "title": "HomeBox",
        "backgroundcolor": "#d0d7df",
        "textcolor": "#110c75",
        "hovercolor": "#899eb1",
        "iconsize": "64px",
        "fontsize": "1.2em",
        "orientation": "row"
    },
    "groups": [
        {
            "name": "Search engines",
            "items": [
                {"caption": "DuckDuckGo", "address": "https://duckduckgo.com/", "image": "./sampleimages/duckduckgo.png"},
                {"caption": "Google", "address": "https://google.com", "image": "badge://G"}
            ]
        },
        {
            "name": "Source code",
            "items": [
                {"caption": "HomeBox source", "address": "https://github.com/berybox/homebox/", "image": "./sampleimages/homebox.svg"},
                {"caption": "GitHub", "address": "https://github.com/", "image": "./sampleimages/github.png"}
            ]
        },
        {
            "name": "Social",
            "items": [
                {"caption": "Facebook", "address": "https://www.facebook.com/", "image": "badge://f|background-color:#3a559f;color:white"},
                {"caption": "Twitter", "address": "https://twitter.com/", "image": "badge://T|background-color:#60a9de"}
            ]
        }
    ]
}`; 
