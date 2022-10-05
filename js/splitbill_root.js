// ['database.js', 'url_manager.js', 'splitbill_root.js']

class Splitbills {
    constructor() {
        this.database_obj = new Database(localStorage);
        this.url_manager_obj = new url_manager();
        this.split_id = "";

        this.header_title = () => {
            return document.querySelector("#header-title");
        };

        this.splitbill_title = () => {
            return document.querySelector("#splitbill-title");
        };

        this.tab_icon = () => {
            return document.querySelector("#tab-icon");
        };

        this.header_icon = () => {
            return document.querySelector("#header-icon");
        };

        this.bills = () => {
            return document.querySelector("#bills");
        };

        setTimeout(() => {
            try {
                this.update_save_img_btn_state();
            } catch (error) {}
        }, 100);
    }

    set_split(split_id) {
        this.split_id = split_id;

        let split_obj = this.database_obj.get(split_id);

        this.tab_icon().setAttribute(
            "href",
            split_obj.icn_url == ""
                ? "https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg"
                : split_obj.icn_url
        );
        document.title = `${split_obj.name} ∙ SplitBill`;
        this.header_title().innerText = split_obj.name;
        this.splitbill_title().value = split_obj.name;

        this.header_icon().src =
            split_obj.icn_url == "" ? split_obj.dflt_icn : split_obj.icn_url;

        this.set_bills();
    }

    update_save_img_btn_state() {
        if (document.querySelector("#icon-url-input").value == "") {
            document.querySelector("#image-save-btn").classList.add("disable");
            document.querySelector("#image-save-btn").disabled = true;
        } else {
            document
                .querySelector("#image-save-btn")
                .classList.remove("disable");
            document.querySelector("#image-save-btn").disabled = false;
        }
    }

    update_split_name(new_name) {
        let split_obj = this.database_obj.get(this.split_id);
        split_obj.name = new_name;
        this.database_obj.set(this.split_id, split_obj);
    }

    update_icon(remove = false) {
        let icon_url_input = document.getElementById("icon-url-input");
        let header_icon = document.getElementById("header-icon");

        let split_obj = this.database_obj.get(this.split_id);

        if (
            remove ||
            icon_url_input.value == "" ||
            icon_url_input.value == null
        ) {
            split_obj.icn_url = "";
            header_icon.src = split_obj.dflt_icn;
            this.database_obj.set(this.split_id, split_obj);
            this.tab_icon().setAttribute(
                "href",
                "https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg"
            );
            return;
        }

        split_obj.icn_url = icon_url_input.value;
        header_icon.src = split_obj.icn_url;
        this.database_obj.set(this.split_id, split_obj);
        this.tab_icon().setAttribute("href", split_obj.icn_url);
    }

    set_bills() {
        let bills = this.database_obj.get(this.split_id).bills;
        document.getElementById("bills").innerHTML = "";

        Object.keys(bills).forEach((bill_id) => {
            document.getElementById(
                "bills"
            ).innerHTML += `<div id="bill-${bill_id}" class="bill">
                                <input id="bill-${bill_id}-name" class="title" type="text" placeholder="Enter bill title" value="${bills[bill_id].name}" onkeyup="splitbills_obj.update_bill_name('${bill_id}', this.value);">
                                <input id="bill-${bill_id}-payers" class="payers" type="text"
                                    placeholder="Enter payers (eg. John Doe, Jane Doe)" value="${bills[bill_id].payers}" onkeyup="splitbills_obj.update_payers_name('${bill_id}');">
                                <div id="bill-${bill_id}-payers-amount" class="payers-amount-list">
                                <!-- <input id="bill-${bill_id}-payer-0" class="John-Doe-amount" type="text" placeholder="John Doe's amount">
                                    <input id="bill-${bill_id}-payer-1" class="Jane-Doe-amount" type="text" placeholder="Jane Doe's amount"> -->
                                </div>
                                <input class="total-cost" type="text" placeholder="Total cost">
                                <div id="bill-${bill_id}-error" class="error">Total cost must be less than or equal to 1500.</div>
                                <input class="bill-${bill_id}-payees" type="text" placeholder="Enter payees (eg. John Doe, Jane Doe)" value="${bills[bill_id].payees}">
                                <div class="btns">
                                    <button class="remove-bill" onclick="splitbills_obj.remove_bill('${bill_id}');" id="remove-bill-${bill_id}">Remove</button>
                                    <button class="save-bill disable" disabled id="save-bill-${bill_id}">Save</button>
                                </div>
                            </div>`;
        });
    }

    update_bill_name(bill_id, new_name) {
        let split_obj = this.database_obj.get(this.split_id),
            bills_obj = split_obj.bills[bill_id];

        bills_obj.name = new_name;

        split_obj.bills[bill_id] = bills_obj;

        this.database_obj.set(this.split_id, split_obj);
    }

    update_payers_name(bill_id, payers_list = null) {
        if (payers_list == null) {
            payers_list = document.getElementById(
                `bill-${bill_id}-payers`
            ).value;
        }

        let payers_amnt_div = document.getElementById(
            `bill-${bill_id}-payers-amount`
        );

        if (payers_list == "") {
            payers_amnt_div.innerHTML = "";
            return;
        }

        let split_obj = this.database_obj.get(this.split_id),
            bills_obj = split_obj.bills[bill_id];

        let name_id = (name) => {
            name = name.toLowerCase();
            name = name.replaceAll(" ", "-");
            return name;
        };

        let payers_list_obj = payers_list.split(","),
            new_payers_list = "";

        let payers_amnt_div_html = "";

        for (let index = 0; index < payers_list_obj.length; ) {
            payers_list_obj[index] = payers_list_obj[index].trim();
            payers_list_obj[index] = payers_list_obj[index].replace(/ +/d, " ");

            if (payers_list_obj[index] == "") {
                payers_list_obj.splice(index, 1);
            } else {
                let default_value = "";
                try {
                    default_value = document.getElementById(
                        `bill-${bill_id}-payer-${index}`
                    ).value;
                } catch (error) {}

                payers_amnt_div_html += `<input id="bill-${bill_id}-payer-${index}" type="text" placeholder="${payers_list_obj[index]}'s amount" value="${default_value}">`;
                new_payers_list +=
                    (index == 0 ? "" : ", ") + payers_list_obj[index];
                index++;
            }
        }

        payers_amnt_div.innerHTML = payers_amnt_div_html;

        bills_obj.payers = new_payers_list;

        split_obj.bills[bill_id] = bills_obj;

        this.database_obj.set(this.split_id, split_obj);
    }

    remove_bill(bill_id) {
        document.getElementById(`bill-${bill_id}`).remove();

        let split_obj = this.database_obj.get(this.split_id);

        if (Object.keys(split_obj.bills).length == 1) {
            split_obj.bills = {};
        } else {
            delete split_obj.bills[bill_id];
        }
        this.database_obj.set(this.split_id, split_obj);
    }

    new_bill() {
        let bill_id = new Date().getTime().toString(18);
        let bill = document.createElement("div");
        bill.setAttribute("class", "bill");
        bill.setAttribute("id", `bill-${bill_id}`);

        let split_obj = this.database_obj.get(this.split_id);

        let new_bill_obj = {};

        new_bill_obj.name = `Bill ${Object.keys(split_obj.bills).length + 1}`;
        new_bill_obj.payers = "";
        new_bill_obj.payers_amnt = [];
        new_bill_obj.total_amnt = null;
        new_bill_obj.payees = "";

        split_obj.bills[bill_id] = new_bill_obj;
        this.database_obj.set(this.split_id, split_obj);

        bill.innerHTML = `<input id="bill-${bill_id}-name" class="title" type="text" placeholder="Enter bill title" value="${new_bill_obj.name}" onkeyup="splitbills_obj.update_bill_name('${bill_id}', this.value);">
                          <input id="bill-${bill_id}-payers" class="payers" type="text"
                              placeholder="Enter payers (eg. John Doe, Jane Doe)" onkeyup="splitbills_obj.update_payers_name('${bill_id}');">
                          <div id="bill-${bill_id}-payers-amount" class="payers-amount-list">
                              <!-- <input id="bill-${bill_id}-payer-0" class="John-Doe-amount" type="text" placeholder="John Doe's amount">
                              <input id="bill-${bill_id}-payer-1" class="Jane-Doe-amount" type="text" placeholder="Jane Doe's amount"> -->
                          </div>
                          <input class="total-cost" type="text" placeholder="Total cost">
                          <div id="bill-${bill_id}-error" class="error">Total cost must be less than or equal to 1500.</div>
                          <input class="bill-${bill_id}-payees" type="text" placeholder="Enter payees (eg. John Doe, Jane Doe)">
                          <div class="btns">
                              <button class="remove-bill" onclick="splitbills_obj.remove_bill('${bill_id}');" id="remove-bill-${bill_id}">Remove</button>
                              <button class="save-bill disable" disabled id="save-bill-${bill_id}">Save</button>
                          </div>`;

        document.querySelector("#bills").appendChild(bill);
    }
}

let splitbills_obj = new Splitbills();

//let temp_img_url = 'https://pbs.twimg.com/profile_images/1572573363255525377/Xz3fufYY_400x400.jpg'

/*
mermaid.render("preparedScheme", code, function (code) {
    temp_mermaid.innerHTML = code;
});
*/
