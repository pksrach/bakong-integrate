import type { MerchantInfo } from "bakong-khqr";
const { BakongKHQR } = require("bakong-khqr");


export interface OptionalData {
    currency?: number;
    amount?: number;
    billNumber?: string;
    mobileNumber?: string;
    storeLabel?: string;
    terminalLabel?: string;
    expirationTimestamp?: number;
    merchantCategoryCode?: string;
}

export class MerchantQRGenerator {
    private bakongKHQR: any;

    constructor() {
        this.bakongKHQR = new BakongKHQR();
    }

    generateQR(merchantData: MerchantInfo) {
        return this.bakongKHQR.generateMerchant(merchantData);
    }
}