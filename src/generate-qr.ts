import * as fs from "fs";
import * as path from "path";
import * as QRCode from "qrcode";

/**
 * Generates a QR code image from the given text and saves it to /public/qr.
 * @param text The text to encode in the QR code.
 * @param filename The filename for the generated QR image (e.g., "qr.png").
 * @returns The full path to the saved QR image.
 */
export async function generateQRImage(text: string, filename: string): Promise<string> {
    if (!text || typeof text !== "string") {
        throw new Error("QR text must be a non-empty string");
    }
    const outputDir = path.join(__dirname, "..", "public", "qr");
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }
    const filePath = path.join(outputDir, filename);

    await QRCode.toFile(filePath, text, {
        color: {
            dark: "#000000",
            light: "#FFFFFF"
        },
        width: 300
    });

    return filePath;
}