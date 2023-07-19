AOS.init();
const dataDoEvento = new Date("Jan 13, 2024 00:00:00");
const timeStampDoEvento = dataDoEvento.getTime();
const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();
    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;
    const diaEmMS = 86400000;
    const horaEmMS = 3600000;
    const minutoEmMS = 60000;
    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMS);
    const horasAteOevento = Math.floor(distanciaAteOEvento % diaEmMS / horaEmMS);
    const minutosAteOevento = Math.floor(distanciaAteOEvento % horaEmMS / minutoEmMS);
    const sedosAteOevento = Math.floor(distanciaAteOEvento % minutoEmMS / 1000);
    document.getElementById("contador").innerHTML = `${diasAteOEvento}d ${horasAteOevento}h ${minutosAteOevento}m ${sedosAteOevento}s`;
    if (distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById("contador").innerHTML = "Parabuains !!!";
    }
}, 1000);

//# sourceMappingURL=index.f75de5e1.js.map
