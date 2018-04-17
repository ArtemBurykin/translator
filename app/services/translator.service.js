/**
 * @author Artem Burykin <nisoartem@gmail.com>
 */
import angular from 'angular';

/**
 * Сервис перевода
 */
export class TranslatorService {

    /**
     * Конструктор
     *
     * @param $http
     * @param $q
     */
    constructor($http, $q) {
        this.$http = $http;
        this.$q = $q;
        this.key = 'trnsl.1.1.20180413T105916Z.63009e332683bae2.f01325db01f50fae8c318e4001fc383976e68c8f';
        this.url = 'https://translate.yandex.net/api/v1.5/tr.json/translate';
    }

    /**
     * Перевести слово с использованием API
     * @param {string} word
     */
    translate(word) {
        let defer = this.$q.defer();
        let callUrl = this.url + '?key=' + this.key + '&text=' + word + '&lang=ru-en';

        this.$http.get(callUrl).then((result) => {
            let translation = result && result.data && result.data.text;
            let formated = translation.join(', ')
            defer.resolve(formated);
        },(error) => {
            def.resolve();
            throw new Error(error);
        });

        return defer.promise;
    }
}
