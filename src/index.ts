import { MerchantInfo } from "bakong-khqr";
import { MerchantQRGenerator, OptionalData } from "./generate-merchant-qr";
import { generateQRImage } from "./generate-qr";

const { khqrData } = require("bakong-khqr")

const optionalData: OptionalData = {
    currency: khqrData.currency.khr,
    amount: 100,
    billNumber: "#0001",
    mobileNumber: "855886963482",
    storeLabel: "MIS Coffee",
    terminalLabel: "msi",
    expirationTimestamp: Date.now() + (1 * 60 * 1000),
    merchantCategoryCode: "5999",
};

const merchantInfo: MerchantInfo = {
    bakongAccountID: "kongsamrach_phan1@aclb",
    merchantName: "MIS Coffee",
    merchantCity: "Phnom Penh",
    merchantID: "1xxxx001",
    acquiringBank: "Samrach",
    ...optionalData
};

const qrGen = new MerchantQRGenerator();
const response = qrGen.generateQR(merchantInfo);

console.log(response);

// Make generate qr image:
const qrText = response.data.qr
console.log("qrText = ", qrText)
const qrResponse = generateQRImage(qrText + "", "my-qr.png").then((filePath) => {
    console.log("QR code saved at:", filePath);
});

console.log("QR Response:", qrResponse);