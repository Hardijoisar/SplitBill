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
        if (this.storage_plan.hasOwnProperty(key)) {
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

    has(key) {
        return this.storage_plan.hasOwnProperty(key);
    }
}
