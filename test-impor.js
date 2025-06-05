import LenguajeListener from './generated/LenguajeListener.js';

export class TestImport extends LenguajeListener {
    enterStat(ctx) {
        console.log(`Se detectó una: ${ctx.constructor.name}`);
    }
}
