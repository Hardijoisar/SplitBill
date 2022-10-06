// ['database.js', 'url_manager.js', 'color_theme.js',  'root_manager.js']

class Root_manager {
    constructor() {
        this.database = new Database(localStorage);
        this.url_manager = new url_manager();
        this.color_theme_obj = new color_theme();
        this.home = () => {
            return `<div class="header">
                        <div class="header-content">
                            <div class="icon-title-n-btn">
                                <div class="icon-n-title">
                                    <div id="header-icon-div" class="has-image">
                                        <img id="header-icon" src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg"/>
                                    </div>
                                    <div id="header-title">
                                        SplitBill
                                    </div>
                                </div>
                            </div>
                            <div id="options">
                                <div id="theme-toggle" onclick="color_theme_obj.toggle(this);">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="space"></div>
                    <div class="main">
                        <div class="title">Welcome to SplitBill</div>
                        <div class="description">
                            <span>SplitBill is easy to use and very helpful tool for</span>
                            splitting the bills between <span>payers and payees.</span>
                        </div>
                        <div class="title-n-create-btn">
                            <div class="title">
                                Your SplitBills
                            </div>
                            <button id="new-splitbill">
                                Create new Split
                                <!-- <div class="content">
                                    New SplitBill
                                </div> -->
                            </button>
                        </div>
                        <div id="splitbills">
                            <div class="zero-bill">
                                You don't have any SplitBill. Create one.
                            </div>

                            <!-- <div class="card">
                                <div class="content">
                                    <div class="name-n-btns">
                                        <div class="name">Road Trip</div>
                                        <div class="btns">
                                            <div class="cancel-btn">Cancel</div>
                                            <div class="dlt-btn">DLT</div>
                                        </div>
                                    </div>
                                </div>
                            </div> -->
                        </div>
                    </div>
                    <div class="space"></div>
                    <div class="footer">
                        <div class="content">
                            <a href="https://github.com/patelka2211" target="_blank">
                                Developed in 🇮🇳 with ❤️ by Kartavya Patel
                            </a>
                        </div>
                    </div>`;
        };

        this.splitbill_root = () => {
            return `<div class="header">
                        <div class="header-content">
                            <div class="icon-title-n-btn">
                                <div class="icon-n-title">
                                    <div id="header-icon-div" class="clickable"
                                        onclick="document.querySelector('#icon-info').classList.toggle('hide'); document.querySelector('#icon-url-input').focus();">
                                        <img id="header-icon" src="./assets/plus-icon.svg">
                                    </div>
                                    <div id="header-title" class="clickable"
                                        onclick="document.querySelector('#splitbill-title').focus();">
                                    </div>
                                </div>
                            </div>
                            <div id="options">
                                <div id="home"
                                    onclick="url_manager_obj.clear(false); root_manager_obj.set_home();"
                                    style="display: flex; flex-direction: column; align-items: center; justify-content: space-around;">
                                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 495.398 495.398"
                                        style="enable-background:new 0 0 495.398 495.398; width: 20px; height: 20px; fill: var(--text-pri);"
                                        xml:space="preserve">
                                        <g>
                                            <g>
                                                <g>
                                                    <path
                                                        d="M487.083,225.514l-75.08-75.08V63.704c0-15.682-12.708-28.391-28.413-28.391c-15.669,0-28.377,12.709-28.377,28.391
                            v29.941L299.31,37.74c-27.639-27.624-75.694-27.575-103.27,0.05L8.312,225.514c-11.082,11.104-11.082,29.071,0,40.158
                            c11.087,11.101,29.089,11.101,40.172,0l187.71-187.729c6.115-6.083,16.893-6.083,22.976-0.018l187.742,187.747
                            c5.567,5.551,12.825,8.312,20.081,8.312c7.271,0,14.541-2.764,20.091-8.312C498.17,254.586,498.17,236.619,487.083,225.514z" />
                                                    <path d="M257.561,131.836c-5.454-5.451-14.285-5.451-19.723,0L72.712,296.913c-2.607,2.606-4.085,6.164-4.085,9.877v120.401
                            c0,28.253,22.908,51.16,51.16,51.16h81.754v-126.61h92.299v126.61h81.755c28.251,0,51.159-22.907,51.159-51.159V306.79
                            c0-3.713-1.465-7.271-4.085-9.877L257.561,131.836z" />
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="space"></div>
                    <div class="split-bill">
                        <div id="save-warning">
                            Use normal window to save progress.
                        </div>
                        <div id="icon-info" class="hide">
                            <input id="icon-url-input" type="text" placeholder="Enter image URL or image file location" onkeyup="splitbills_obj.update_save_img_btn_state();">
                            <div class="btns">
                                <button class="remove-btn disable"
                                    onclick="document.querySelector('#icon-url-input').value=''; document.querySelector('#icon-info').classList.add('hide'); splitbills_obj.update_icon(true);">Remove</button>
                                <button class="save-image-btn" id="image-save-btn"
                                    onclick="document.querySelector('#icon-info').classList.add('hide'); splitbills_obj.update_icon(); document.querySelector('#icon-url-input').value='';">Save</button>
                                <button class="done-image-btn"
                                    onclick="document.querySelector('#icon-info').classList.add('hide');">Done</button>
                            </div>
                        </div>
                        <input type="text" id="splitbill-title" value="" placeholder="Enter SplitBill Name"
                            onkeyup="splitbills_obj.update_split_name(this.value); document.querySelector('#header-title').innerText = this.value.trim(); document.title = this.value.trim() + ' ∙ SplitBill';">
                        <div class="output">
                            <div class="mermaid" id="output-mermaid" style="display: none;">
                                graph
                                a((a)) -- hello --> b((b))
                            </div>
                            <img id="output-image" src="https://opengraph.githubassets.com/1/patelka2211/gdocs"
                                style="display: none;">
                        </div>
                        <div id="bills">
                        </div>
                        <button id="new-bill-btn" onclick="splitbills_obj.new_bill();">New Bill</button>
                        </div>
                        <div class="space"></div>`;
            // <!-- <div class="bill" id="bill-0">
            //     <input id="bill-0-name" class="title" type="text" placeholder="Enter bill title" value="Bill 1">
            //     <input id="bill-0-payers" class="payers" type="text"
            //         placeholder="Enter payers (eg. John Doe, Jane Doe)">
            //     <div id="bill-0-payers-amount" class="payers-amount-list">
            //         <input id="bill-0-payer-0" class="John-Doe-amount" type="text" placeholder="John Doe's amount">
            //         <input id="bill-0-payer-1" class="Jane-Doe-amount" type="text" placeholder="Jane Doe's amount">
            //     </div>
            //     <input class="total-cost" type="text" placeholder="Total cost">
            //     <div id="bill-0-error" class="error">Total cost must be less than or equal to 1500.</div>
            //     <input class="payees" type="text" placeholder="Enter payees (eg. John Doe, Jane Doe)">
            //     <div class="btns">
            //         <button class="remove-bill">Remove</button>
            //         <button class="save-bill">Save</button>
            //     </div>
            // </div> -->
        };

        this.root = document.querySelector("#root");

        this.sense_routes();
    }

    sense_routes() {
        let params = this.url_manager.get_params();

        if (Object.keys(params).indexOf("split_id") != -1) {
            this.open_splitbill(params.split_id);
            return;
        }

        this.url_manager.clear(true);
        this.set_home();
    }

    set_home() {
        this.root.innerHTML = this.home();
        document
            .querySelector("#tab-icon")
            .setAttribute(
                "href",
                "https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg"
            );

        document.title = "SplitBill";

        this.color_theme_obj.default();

        let create_new_splitbill = () => {
            let new_split_json = Object(),
                time_now = new Date().getTime();

            new_split_json.id = time_now.toString(36);
            new_split_json.bills = {};
            new_split_json.birth = time_now;
            new_split_json.dflt_icn = "./assets/plus-icon.svg";
            new_split_json.icn_url = "";
            new_split_json.output_img = "";
            new_split_json.name = this.database.has("split_bills")
                ? `Untitled ${
                      Object.keys(this.database.get("split_bills")).length + 1
                  }`
                : "Untitled 1";

            let temp_split_bills_obj = this.database.get("split_bills");

            if (temp_split_bills_obj == null) {
                temp_split_bills_obj = [];
            }

            temp_split_bills_obj.push(new_split_json.id);

            this.database.set("split_bills", temp_split_bills_obj);

            this.database.set(new_split_json.id, new_split_json);

            return new_split_json.id;
        };

        document.querySelector("#new-splitbill").onclick = () => {
            let split_id = create_new_splitbill();

            this.url_manager.set_params(
                {
                    split_id: split_id,
                },
                false
            );

            this.open_splitbill(split_id);
        };
    }

    open_splitbill(split_id) {
        if (this.database.has(split_id)) {
            this.root.innerHTML = this.splitbill_root();
            splitbills_obj.set_split(split_id);

            setTimeout(() => {
                try {
                    document
                        .querySelector("#save-warning")
                        .classList.add("hide");
                } catch (error) {}
            }, 500);
            setTimeout(() => {
                try {
                    document.querySelector("#save-warning").style.display =
                        "none";
                } catch (error) {}
            }, 6 * 1000);
        } else {
            this.url_manager.clear(true);
            this.set_home();
        }
    }
}

let root_manager_obj = new Root_manager();

window.addEventListener("popstate", (e) => {
    root_manager_obj.sense_routes();
});
