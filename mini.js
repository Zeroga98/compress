console.log("======= iniciando ==========")
const { compress } = require("compress-images/promise");
const { async } = require("q");
try {
    let count = [];
    const processImages = async () => {
        const result = await compress({
            source: __dirname + "/mini/**/*.{jpg,JPG,jpeg,JPEG}",
            destination: __dirname + "/buildMini/",
            enginesSetup: {
                jpg: { engine: "webp", command: false },
                png: { engine: false, command: false },
                svg: { engine: false, command: false },
                gif: { engine: false, command: false }
            }
        });
        const { statistics, errors } = result;
        console.log(errors, "primer intento")
        if (errors.length) {
            console.log(errors, "Segundo intento")
            const resolve = await Promise.all(errors.map(async (folder) => {
                const resultTwo = await compress({
                    source: folder.input,
                    destination: __dirname + "/buildMini/",
                    enginesSetup: {
                        jpg: { engine: "webp", command: false },
                        png: { engine: false, command: false },
                        svg: { engine: false, command: false },
                        gif: { engine: false, command: false }
                    }
                });
                return resultTwo.errors
             /*    const { statistics, errorsTwo } = resultTwo;
                if (errorsTwo.length) {
                    count.push(errors[0])
                } */
            }))
            if (resolve.length) {
                console.log(count, "no se pudo guardar", resolve.length);
            }
        }
    };
    processImages();
} catch (error) {
    throw error
}