# Estate valuation

Front-end приложение для оценки жилой недвижимости с помощью ИИ. Сайт: [https://estate-valuation.tech/#/](https://estate-valuation.tech/#/)

# Стек технологий:

-   react + React Hooks;
-   zustand;
-   typeScript;
-   react Query;
-   tailwind;
-   jest/vitest;
-   formik, Yup.

# Запуск приложения
1. Установить Docker, запустить Docker engine.
2. `docker build -t react-app -f Dockerfile.dev .`
3. `docker run -p "3000:3000" react-app run dev`
   
Для тестирования приложения данные были замоканы с помощью библиотеки `axios-mock-adapter` в файле tests/MockApi.ts. Для отключения удалить из файла app/main.tsx строку `MockAPI.initializeMocks();`

# Архитектура
Веб-приложение разработано по методолгии FSD. Преимущства этого подхода (взято с официального сайта: https://feature-sliced.design/ru/docs/get-started/overview):
-   Единообразие. Код распределяется согласно области влияния (слой), предметной области (слайс) и техническому назначению (сегмент). Благодаря этому архитектура стандартизируется и становится более простой для ознакомления.

-   Контролируемое переиспользование логики. Каждый компонент архитектуры имеет свое назначение и предсказуемый список зависимостей. Благодаря этому сохраняется баланс между соблюдением принципа DRY и возможностью адаптировать модуль под разные цели.

-   Устойчивость к изменениям и рефакторингу. Один модуль не может использовать другой модуль, расположенный на том же слое или на слоях выше. Благодаря этому приложение можно изолированно модифицировать под новые требования без непредвиденных последствий.

-   Ориентированность на потребности бизнеса и пользователей. Разбиение приложения по бизнес-доменам помогает глубже понимать, структурировать и находить фичи проекта.

# Дополнительно
Информация из форм хранится в хранилище Formik. Zustand использовался только для хранения данных результата ИИ в слое processes. Данные из запросов хранятся с помощью библиотеки React Query. 

# Тестирование проекта
Unit тесты функций хелперов. Для запуска:
`npm run test`

# Полезные статьи
- [https://habr.com/ru/companies/elbrusbootcamp/articles/651033/](https://habr.com/ru/companies/elbrusbootcamp/articles/651033/)
- [https://www.youtube.com/watch?v=y2emL1fMRyY&ab_channel=UlbiTV](https://www.youtube.com/watch?v=y2emL1fMRyY&ab_channel=UlbiTV)
- [https://feature-sliced.design/ru/docs/get-started/overview](https://feature-sliced.design/ru/docs/get-started/overview)
