console.log("======= iniciando compresión ==========")
const compress_images = require("compress-images")
try {

    compress_images(
        "../bmw/**/*.{jpg,JPG,jpeg,JPEG}",
        "buildBmw/img/",
        { compress_force: false, statistic: true, autoupdate: true },
        false,
        { jpg: { engine: "webp", command: false } },
        { png: { engine: false, command: false } },
        { svg: { engine: false, command: false } },
        { gif: { engine: false, command: false } },
        function (err) {
            if (err) {
                console.error("ERROR BMW:", err);
            }
        }
    );

    compress_images(
        "../mini/**/*.{jpg,JPG,jpeg,JPEG}",
        "buildMini/img/",
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
        "../motorrad/**/*.{jpg,JPG,jpeg,JPEG}",
        "buildMotorrad/img/",
        { compress_force: false, statistic: true, autoupdate: true },
        false,
        { jpg: { engine: "webp", command: false } },
        { png: { engine: false, command: false } },
        { svg: { engine: false, command: false } },
        { gif: { engine: false, command: false } },
        function (err) {
            if (err) {
                console.error("ERROR BMWMOTORRAD:", err);
            }
        }
    );


} catch (error) {
    throw error
}