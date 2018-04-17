/**
 * @author Artem Burykin <nisoartem@gmail.com>
 */
import {TranslatorService} from '../services/translator.service';

/**
 * Контроллер для компонента переводчика
 */
export class TranslatorController {
    /**
     * Конструктор
     *
     * @param {TranslateService} TranslatorService сервис перевода
     */
    constructor (TranslatorService) {
        this.translateService = TranslatorService;
        this.word = 'test';
        this.translation = '';
    }

    /**
     * Перевести текущее установленное слово
     */
    translate() {
        this.translateService.translate(this.word).then((translation) => {
            this.translation = translation;
        });
    }
}
