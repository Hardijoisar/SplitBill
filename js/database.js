class Database {
    constructor(storage_plan) {
        this.storage_plan = storage_plan;
    }

    set(key, value) {
        if (typeof value == "object") {
            this.storage_plan.setItem(key, JSON.stringify(value));
            return;
        }
        this.storage_plan.setItem(key, value);
    }

    delete_pair(key) {
        if (key in this.storage_plan) this.storage_plan.removeItem(key);
    }

    get(key) {
        if (key in this.storage_plan) {
            try {
                return JSON.parse(this.storage_plan.getItem(key));
            } catch (error) {
                return this.storage_plan.getItem(key);
            }
        }
        return null;
    }

    clear() {
        return this.storage_plan.clear();
    }
}

// graph RL
//     C[C]--> |140 Rs| B[B]
//     D[D]--> |60 Rs| B[B]
//     D[D]--> |80 Rs| A[A]
