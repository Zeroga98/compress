console.log("======= iniciando compresión ==========", __dirname)
const compress_images = require("compress-images")
try {

    compress_images(
        __dirname + "/mini/**/*.{jpg,JPG,jpeg,JPEG}",
        __dirname + "/buildMini/img/",
        { compress_force: false, statistic: true, autoupdate: true },
        false,
        { jpg: { engine: "webp", command: false } },
        { png: { engine: false, command: false } },
        { svg: { engine: false, command: false } },
        { gif: { engine: false, command: false } },
        function (err) {
            if (err) {
                console.error("ERROR MINI:", err);
            }
        }
    );

    compress_images(
        __dirname + "/bmw/**/*.{jpg,JPG,jpeg,JPEG}",
        __dirname + "/buildBmw/img/",
        { compress_force: false, statistic: true, autoupdate: true },
        false,
        { jpg: { engine: "webp", command: false } },
        { png: { engine: false, command: false } },
        { svg: { engine: false, command: false } },
        { gif: { engine: false, command: false } },
        function (err) {
            if (err) {
                console.error("ERROR MINI:", err);
            }
        }
    );
    compress_images(
        __dirname + "/motorrad/**/*.{jpg,JPG,jpeg,JPEG}",
        __dirname + "/buildMotorrad/img/",
        { compress_force: false, statistic: true, autoupdate: true },
        false,
        { jpg: { engine: "webp", command: false } },
        { png: { engine: false, command: false } },
        { svg: { engine: false, command: false } },
        { gif: { engine: false, command: false } },
        function (err) {
            if (err) {
                console.error("ERROR MINI:", err);
            }
        }
    );
    
} catch (error) {
    throw error
}