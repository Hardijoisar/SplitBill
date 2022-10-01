// import Database from database.js
// [Database, color_theme]

class color_theme {
    constructor() {
        this.database_obj = new Database(window.localStorage);
        this.light_theme_icon = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                        x="0px" y="0px" viewBox="0 0 22.006 22.006" style="enable-background:new 0 0 22.006 22.006; fill: black;"
                                        xml:space="preserve">
                                        <g>
                                            <g>
                                                <path style="fill: var(--text-pri);" d="M4.63,6.045c0.394,0.393,1.028,0.399,1.421,0.006c0.39-0.39,0.393-1.021-0.007-1.421l-1.4-1.4
                                C4.249,2.835,3.617,2.829,3.223,3.223c-0.391,0.39-0.394,1.02,0.007,1.421L4.63,6.045z" />
                                                <path style="fill: var(--text-pri);" d="M20.997,10.003h-1.98c-0.559,0-1.011,0.444-1.011,1c0,0.553,0.443,1,1.011,1h1.98
                                c0.559,0,1.009-0.443,1.009-1C22.006,10.451,21.562,10.003,20.997,10.003z" />
                                                <path style="fill: var(--text-pri);" d="M4,11.003c0-0.552-0.444-1-1.01-1H1.009c-0.558,0-1.009,0.444-1.009,1c0,0.553,0.443,1,1.009,1
                                H2.99C3.548,12.003,4,11.56,4,11.003z" />
                                                <path style="fill: var(--text-pri);" d="M11.003,5c-3.313,0-6,2.687-6,6s2.687,6,6,6c3.312,0,6-2.687,6-6S14.315,5,11.003,5z M11.003,15
                                c-2.209,0-4-1.791-4-4s1.791-4,4-4s4,1.791,4,4S13.212,15,11.003,15z" />
                                                <path style="fill: var(--text-pri);" d="M4.63,15.962l-1.4,1.4c-0.395,0.395-0.401,1.027-0.007,1.421c0.391,0.39,1.021,0.393,1.421-0.007
                                l1.4-1.4c0.395-0.395,0.401-1.027,0.007-1.421C5.66,15.563,5.03,15.562,4.63,15.962z" />
                                                <path style="fill: var(--text-pri);" d="M17.376,6.045l1.4-1.401c0.395-0.395,0.399-1.027,0.007-1.421c-0.392-0.39-1.021-0.393-1.421,0.007
                                l-1.4,1.4c-0.395,0.395-0.4,1.028-0.007,1.421C16.347,6.441,16.976,6.444,17.376,6.045z" />
                                                <path style="fill: var(--text-pri);" d="M11.003,18.006c-0.553,0-1,0.444-1,1.011v1.98c0,0.559,0.444,1.009,1,1.009
                                c0.553,0,1-0.442,1-1.009v-1.98C12.003,18.458,11.56,18.006,11.003,18.006z" />
                                                <path style="fill: var(--text-pri);" d="M17.376,15.962c-0.395-0.395-1.027-0.4-1.421-0.007c-0.39,0.392-0.394,1.021,0.007,1.421l1.4,1.4
                                c0.395,0.395,1.027,0.399,1.421,0.007c0.391-0.39,0.394-1.021-0.007-1.421L17.376,15.962z" />
                                                <path style="fill: var(--text-pri);" d="M11.003,4c0.553,0,1-0.443,1-1.01V1.01c0-0.558-0.443-1.01-1-1.01c-0.553,0-1,0.444-1,1.01v1.98
                                C10.003,3.548,10.447,4,11.003,4z" />
                                            </g>
                                        </g>
                                    </svg>`;
        this.dark_theme_icon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                                </svg>`;
        this.auto_theme_icon = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="fill: var(--text-pri);">
                                    <g data-name="43. Brightness">
                                        <path
                                            d="M18.553,16.576c.03-.044.066-.082.095-.126s.048-.088.075-.131a7.969,7.969,0,0,0,.409-.713c.057-.114.113-.228.166-.344a8.091,8.091,0,0,0,.329-.851c.026-.083.045-.167.068-.251a7.751,7.751,0,0,0,.182-.811c.017-.1.033-.2.047-.3A8.006,8.006,0,0,0,20,12c0-.264-.015-.524-.04-.782-.006-.064-.017-.126-.025-.189-.024-.2-.052-.395-.09-.589-.011-.055-.025-.11-.037-.165-.045-.207-.1-.41-.158-.611l-.03-.095a7.921,7.921,0,0,0-4.465-4.918c-.038-.017-.077-.031-.115-.047q-.24-.1-.487-.179c-.123-.041-.247-.079-.372-.115q-.1-.027-.2-.051a7.969,7.969,0,0,0-1.214-.22A7.475,7.475,0,0,0,12,4a8,8,0,1,0,.918,15.943c.091-.01.18-.028.27-.041.212-.032.422-.07.629-.118.1-.024.2-.05.3-.078q.291-.081.573-.182c.1-.036.2-.069.294-.108.2-.082.4-.174.592-.271.074-.037.15-.069.223-.108a8.017,8.017,0,0,0,.709-.436c.107-.073.208-.155.312-.233.128-.1.255-.2.377-.3s.212-.188.315-.286.224-.223.332-.339c.092-.1.186-.2.273-.3C18.273,16.96,18.416,16.77,18.553,16.576ZM13.669,6.266c.116.033.238.052.35.091l.086.031a5.973,5.973,0,0,1,.827.382c.073.041.143.087.214.131a5.76,5.76,0,0,1,.568.4c.112.088.219.182.324.278q.194.176.37.368c.109.118.213.239.312.366a5.9,5.9,0,0,1,.343.486c.062.1.124.194.18.295a5.982,5.982,0,0,1,.329.7c.032.083.062.166.091.25a5.941,5.941,0,0,1,.226.83c.01.052.016.106.024.158A6.044,6.044,0,0,1,18,12a6.151,6.151,0,0,1-.057.782q-.015.117-.036.234a5.836,5.836,0,0,1-.131.586c-.021.078-.041.156-.066.233a5.606,5.606,0,0,1-.232.6c-.042.094-.087.185-.133.275,0,.011-.012.021-.017.031A5.962,5.962,0,0,1,13,9,5.888,5.888,0,0,1,13.669,6.266ZM6,12a6,6,0,0,1,5.581-5.979,7.972,7.972,0,0,0,4.46,10.4c-.045.041-.088.083-.135.123-.1.083-.2.162-.3.239-.073.054-.144.112-.219.163a5.864,5.864,0,0,1-.539.332c-.047.026-.1.046-.145.07-.153.077-.308.15-.467.214-.069.028-.14.052-.211.077-.144.052-.291.1-.439.14-.074.02-.148.04-.222.057-.157.037-.316.066-.476.09-.067.01-.133.023-.2.03A5.846,5.846,0,0,1,12,18,6.006,6.006,0,0,1,6,12Z" />
                                        <path d="M12.02,2a1,1,0,0,0,0-2h-.01a1,1,0,0,0,.01,2Z" />
                                        <path d="M19.8,3.222h-.01a1.005,1.005,0,1,0,.01,0Z" />
                                        <path d="M23.02,11h-.01a1.005,1.005,0,1,0,.01,0Z" />
                                        <path d="M19.8,18.778h-.01a1.005,1.005,0,1,0,.01,0Z" />
                                        <path d="M12.02,22h-.01a1.005,1.005,0,1,0,.01,0Z" />
                                        <path d="M4.242,18.778H4.231a1.006,1.006,0,1,0,.011,0Z" />
                                        <path d="M1.02,11H1.01a1.005,1.005,0,1,0,.01,0Z" />
                                        <path d="M4.242,5.222a1,1,0,0,0,0-2H4.231a1,1,0,0,0,.011,2Z" />
                                    </g>
                                </svg>`;

        setTimeout(() => {
            this.default();
        }, 100);
    }

    default() {
        try {
            this.element = document.querySelector("#theme-toggle");
        } catch (err) {
            console.log(err);
        }

        let current_theme = this.database_obj.get("color-theme");

        if (current_theme == null) {
            this.set_auto_theme();
            return;
        }

        if (current_theme == "light") {
            this.set_light_theme();
        } else if (current_theme == "dark") {
            this.set_dark_theme();
        } else if (current_theme == "auto") {
            this.set_auto_theme();
        }
    }

    toggle(element) {
        this.element = element;
        let current_theme = this.database_obj.get("color-theme");

        if (current_theme == null) {
            this.set_auto_theme();
        }

        if (current_theme == "light") {
            this.set_dark_theme();
        } else if (current_theme == "dark") {
            this.set_auto_theme();
        } else if (current_theme == "auto") {
            this.set_light_theme();
        }
    }

    set_auto_theme() {
        if (
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
        ) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }

        this.database_obj.set("color-theme", "auto");
        if (this.element != undefined) {
            this.element.innerHTML = this.light_theme_icon;
        }
    }

    set_light_theme() {
        this.database_obj.set("color-theme", "light");
        document.body.classList.remove("dark-mode");
        if (this.element != undefined) {
            this.element.innerHTML = this.dark_theme_icon;
        }
    }

    set_dark_theme() {
        this.database_obj.set("color-theme", "dark");
        document.body.classList.add("dark-mode");
        if (this.element != undefined) {
            this.element.innerHTML = this.auto_theme_icon;
        }
    }
}

let color_theme_obj = new color_theme();
