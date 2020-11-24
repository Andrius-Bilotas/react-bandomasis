
export default class ProductList {
    constructor() {
        this.productList = [];
    }

    getList() {
        return this.productList;
    }
    add(product) {
        this.productList.push(product);
    }
}