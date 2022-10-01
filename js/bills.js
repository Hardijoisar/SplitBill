class Bills {
    constructor(input_json) {
        this.input_json = input_json;
    }
}

let input_json = [
    {
        payers: ["Jainik Bakshi", "Jayneel Shah", "Kartavya Patel"],
        payers_amount: [500, 500, 500],
        total_cost: 1260,
        payees: [
            "Jainik Bakshi",
            "Jal Patel",
            "Jayneel Shah",
            "Kartavya Patel",
        ],
    },
    {
        payers: ["Jal Patel"],
        payers_amount: [389],
        total_cost: 389,
        payees: [
            "Jainik Bakshi",
            "Jal Patel",
            "Jayneel Shah",
            "Kartavya Patel",
        ],
    },
];

// class Bills {
//     constructor(input) {
//         this.input = input;
//         this.item_count = 500;
//         this.output = [];
//         this.person_id = Object();
//         this.reverse_person_id = Object();
//         this.cost_object = Object();
//     }

//     get_percentage_amount() {
//         let amount_list = this.input.payers_amount;
//         let cost = 0;

//         amount_list.forEach((each_cost) => {
//             cost += each_cost;
//         });

//         if (this.input.total_cost <= cost) {
//             this.cost_per_payee =
//                 this.input.total_cost / this.input.payees.length;

//             let amount_id = `amount_${this.item_count.toString(16)}((${
//                 cost - this.input.total_cost
//             } Rs.))`;

//             amount_list.forEach((each_cost, index) => {
//                 let person_id = `person_${this.item_count.toString(16)}`;
//                 this.person_id[person_id] = this.input.payers[index];
//                 this.reverse_person_id[this.input.payers[index]] = person_id;

//                 this.output.push([
//                     amount_id,
//                     `${person_id}((${this.input.payers[index]}))`,
//                     `${
//                         (cost - this.input.total_cost) *
//                         (amount_list[index] / cost)
//                     } Rs.`,
//                 ]);

//                 this.cost_object[person_id] =
//                     each_cost -
//                     (cost - this.input.total_cost) *
//                         (amount_list[index] / cost);

//                 if (this.input.payees.indexOf(this.input.payers[index]) != -1) {
//                     this.cost_object[person_id] -= this.cost_per_payee;
//                 }

//                 this.item_count += 1;
//             });

//             return true;
//         }

//         return false;
//     }

//     generate_output() {
//         let percentage_amount = this.get_percentage_amount();

//         if (percentage_amount != false) {
//             this.generate_person_id();

//             let cost_object = Object.entries(this.cost_object).sort((a, b) => {
//                 if (a[1] == b[1]) return 0;
//                 return a[1] > b[1] ? 1 : -1;
//             });

//             while (cost_object.length != 1) {
//                 if (
//                     cost_object[0][1] + cost_object[cost_object.length - 1][1] <
//                     0
//                 ) {
//                     cost_object[0][1] += cost_object[cost_object.length - 1][1];

//                     this.output.push([
//                         `${cost_object[0][0]}((${
//                             this.person_id[cost_object[0][0]]
//                         }))`,
//                         `${cost_object[cost_object.length - 1][0]}((${
//                             this.person_id[
//                                 cost_object[cost_object.length - 1][0]
//                             ]
//                         }))`,
//                         `${Math.abs(
//                             cost_object[cost_object.length - 1][1]
//                         )} Rs.`,
//                     ]);

//                     cost_object.splice(cost_object.length - 1, 1);
//                 } else {
//                     cost_object[cost_object.length - 1][1] += cost_object[0][1];

//                     this.output.push([
//                         `${cost_object[0][0]}((${
//                             this.person_id[cost_object[0][0]]
//                         }))`,
//                         `${cost_object[cost_object.length - 1][0]}((${
//                             this.person_id[
//                                 cost_object[cost_object.length - 1][0]
//                             ]
//                         }))`,
//                         `${Math.abs(cost_object[0][1])} Rs.`,
//                     ]);

//                     cost_object.splice(0, 1);
//                 }
//             }

//             this.get_mermaid_text();
//         }
//     }

//     generate_person_id() {
//         let payers = new Set(this.input.payers);
//         let payees = new Set(this.input.payees);
//         let final_array = new Set(
//             [...payees].filter((name) => !payers.has(name))
//         );

//         final_array.forEach((person) => {
//             let person_id = `person_${this.item_count.toString(16)}`;
//             this.person_id[person_id] = person;

//             this.reverse_person_id[person] = person_id;

//             this.cost_object[person_id] = -1 * this.cost_per_payee;

//             this.item_count += 1;
//         });
//     }

//     get_mermaid_text() {
//         let output = `graph\n`;

//         this.output.forEach((element) => {
//             output += `${element[0]} --> |${element[2]}| ${element[1]}\n`;
//         });

//         console.log(output);
//     }
// }

// let Bills_obj = new Bills(input_json);

// Bills_obj.generate_output();
