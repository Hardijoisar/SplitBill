class Root_manager {
    constructor() {
        this.home = () => {
            return `<div class="header">
                        <div class="header-content">
                            <div class="icon-title-n-btn">
                                <div class="icon-n-title">
                                    <div id="header-icon"></div>
                                    <div id="header-title">
                                        SplitBill
                                    </div>
                                    <!-- <div id="saved-status" class=""> -->
                                    <!-- Leave Private tab
                                        <br>
                                        to save. -->
                                    <!-- Saved
                                    </div> -->
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
                            <div id="new-splitbill">
                                <div class="content" onclick="alert('hello world');">
                                    New SplitBill
                                </div>
                            </div>
                        </div>
                        <div id="splitbills">
                            <div class="zero-bill">
                                You don't have any SplitBill. Create one.
                            </div>

                            <div class="card">
                                <div class="content">
                                    <div class="name-n-btns">
                                        <div class="name">Road Trip</div>
                                        <div class="btns">
                                            <div class="cancel-btn">Cancel</div>
                                            <div class="dlt-btn">DLT</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
        this.root = document.querySelector("#root");
    }

    set_root(html) {
        this.root.innerHTML = html;
    }
}

let Root_manager_obj = new Root_manager();

// Root_manager_obj.set_root(Root_manager_obj.home());
