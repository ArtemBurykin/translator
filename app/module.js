
import angular from 'angular';

import {TranslatorService} from './services/translator.service';
import {TranslatorComponent} from './config/translator.config';
import css from './styles/translator.css';

angular.module('translator', [])
    .service('TranslatorService', TranslatorService)
    .component('trans', TranslatorComponent);