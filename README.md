# Simplify Traffic admin panel web application v.0.4.3 on Angular 2 

**Опубликовано с согласием правобладателя @SamyRai**

## Текущие версии компонентов:

- Node.js v.6.9.4
- NPM v.3.10.10
- Angular2 v.2.4.6
- Angular2 Bootstrap v.1.3.3
- Twitter Bootstrap v.4.0.0-alpha.2
- TsLint v.4.0.2
- TypeScript v.2.0.6
- Angular-l10n v.2.0.2
- Angular2-cookie v.1.2.6

## 0.1.0 - Начало

- Основная структура панели управления
- Сборка в трех режимах (dev, prod, prod.exp)
- Механизм unit-тестирования на основе karma (2 реальных теста)
- Механизм e2e-тестирования на основе protracktor (1 пробный тест)
- Оформление в лучших традициях JS, TS и Angular2
 
## 0.2.0 - Базовая часть
 
- обновлены основные компоненты работы и сборки
- добавлены механизмы тестирования
- весь проект переработан в соотвествии с Angular2 style guide и проектной схемой
- обновлена проектная схема

## 0.3.0 - Авторизация
  
- реализован полный функционал объектов SESSION, USER, AGENCY. (создание, получение, изменение +
  парсинг)
- добавлен функционал онлайн и офлайн аунтефикации (с установленным таймаутом)
- добавлен функционал работы с cookie, установка срока действия
- добавлен фунционал защищенной маршрутизации и доступа к управлению (с переводом на
  cтраницу авторизации и последующим возвратом к предыдущей)
- добавлен функционал выхода пользователя
- реализовано отображение реального текущего пользователя на навигац. панели
- доработан механизм перебора типов
- переработан парсинг ответов (Дамир все изменил)
- добавлена обработка и вывод ошибок механизма авторизации

## 0.3.1

- добавлены в объект сессии сслыки на пользователя и агенство
- проверка обращений по адресам с параметрами данных (для разных пользователей)
- приложение адаптировано к Json-api
- изменен формат перечислений и перебор типов объектов
- доведен до ума сервис авторизации
- задокументированы: главный модуль, типы, модуль админ-панели
- переделаны конструкторы объектов
- мелкие недочеты

## 0.4.0 - Локализация

- исправлена иконка сервиса
- исправлен механиз авторизационных куки
- подключение модуля локализации, обновление зависимостей, отладка сборки
- подправлены пункты и стиль меню
- реализовано переключение языков на странице авторизации и панели управления
- реализовано сохранение локал. данных в куки
- на странице авторизации организован вывод мультиязычных строк, вывод кнопки с выбором страны
- на странице палени управления организован:
   - вывод мультиязычных строк
   - вывод кнопки с выбором страны
   - вывод даты в соответствии с текущим метополож.
- исправлен баг с выходом при нажатии кнопки в меню боковой панели
- задокументирован новый функционал
- наведен порядок с версиями

## 0.4.1
  
- на панель навигации выводится и обновляется текущее время
- при перенаравлении по другим маршрутам результат перенаправления отлеживается и обрабатывается

## 0.4.2

- закончена реализация всех объектов сервиса (согласно проекту)

## 0.4.3

- добавлены все остальные классы объектов (согласно структуре БД)
- добавлены json-заглушки для всех классов объектов (согласно структуре БД)
- в TripStatus удалена зависимость и добавлены три поля
- Trip, Vehicle, Route дополнены
- в процессе взаимодействия классов и заглушен, протестированы и те и другие
- авторизация переведена на работу с сервером
- временно набросан механизм загрузки и парсинга всех объектов (для тестирования)

## 0.4.4

- completed translation of the source text into English
- added and implemented JsonParsingInterface
- added and implemented JsonSynthesisInterface
- added environment "backend" and congured others
- fixed field pick-up-type
- fixed timepoint type
- fixed error notification output in AuthComponent

## 0.4.5

- added missing file app.js to the repository
- fixed API links

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
