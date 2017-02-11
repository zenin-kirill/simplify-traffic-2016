Simplify Traffic admin panel web application v.0.4.0

  Текущие версии компонентов:

- Node.js v.6.9.4
- NPM v.3.10.10
- Angular2 v.2.4.6
- Angular2 Bootstrap v.1.3.3
- Twitter Bootstrap v.4.0.0-alpha.2
- TsLint v.4.0.2
- TypeScript v.2.0.6
- Angular-l10n v.2.0.2
- Angular2-cookie v.1.2.6

  0.1.0 - Начало

- Основная структура панели управления
- Сборка в трех режимах (dev, prod, prod.exp)
- Механизм unit-тестирования на основе karma (2 реальных теста)
- Механизм e2e-тестирования на основе protracktor (1 пробный тест)
- Оформление в лучших традициях JS, TS и Angular2
 
  0.2.0 - Базовая часть
 
- обновлены основные компоненты работы и сборки
- добавлены механизмы тестирования
- весь проект переработан в соотвествии с Angular2 style guide и проектной схемой
- обновлена проектная схема

  0.3.0 - Авторизация
  
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

  0.3.1

- добавлены в объект сессии сслыки на пользователя и агенство
- проверка обращений по адресам с параметрами данных (для разных пользователей)
- приложение адаптировано к Json-api
- изменен формат перечислений и перебор типов объектов
- доведен до ума сервис авторизации
- задокументированы: главный модуль, типы, модуль админ-панели
- переделаны конструкторы объектов
- мелкие недочеты

  0.4.0 - Локализация

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