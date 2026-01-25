const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const INPUT_DIR = 'prompts/images';
const OUTPUT_DIR = 'prompts/images/optimized';
const MAX_WIDTH = 800;
const QUALITY = 80;

// Supported extensions
const SUPPORTED_EXT = ['.jpg', '.jpeg', '.png', '.webp'];

async function optimizeImage(inputPath, outputPath) {
    try {
        const image = sharp(inputPath);
        const metadata = await image.metadata();

        // Only resize if wider than MAX_WIDTH
        let resizedImage = image;
        if (metadata.width > MAX_WIDTH) {
            resizedImage = image.resize(MAX_WIDTH, null, {
                withoutEnlargement: true
            });
        }

        // Convert to WebP with quality setting
        await resizedImage
            .webp({ quality: QUALITY })
            .toFile(outputPath);

        const inputStats = fs.statSync(inputPath);
        const outputStats = fs.statSync(outputPath);
        const savings = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);

        console.log(`✓ ${path.basename(inputPath)} → ${path.basename(outputPath)} (${savings}% smaller)`);
        return true;
    } catch (error) {
        console.error(`✗ Error processing ${inputPath}:`, error.message);
        return false;
    }
}

async function main() {
    // Ensure output directory exists
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    // Read all files in input directory
    const files = fs.readdirSync(INPUT_DIR);

    // Filter for image files (exclude directories and unsupported files)
    const imageFiles = files.filter(file => {
        const filePath = path.join(INPUT_DIR, file);
        const ext = path.extname(file).toLowerCase();
        return fs.statSync(filePath).isFile() && SUPPORTED_EXT.includes(ext);
    });

    if (imageFiles.length === 0) {
        console.log('ℹ️ No images found to optimize');
        return;
    }

    console.log(`📷 Found ${imageFiles.length} image(s) to process...\n`);

    let successCount = 0;

    for (const file of imageFiles) {
        const inputPath = path.join(INPUT_DIR, file);
        const outputName = path.basename(file, path.extname(file)) + '.webp';
        const outputPath = path.join(OUTPUT_DIR, outputName);

        const success = await optimizeImage(inputPath, outputPath);
        if (success) successCount++;
    }

    console.log(`\n✅ Optimized ${successCount}/${imageFiles.length} images`);
}

main().catch(console.error);
