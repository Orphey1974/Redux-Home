# Redux-Home

## Краткое описание

Учебный проект по освоению роутинга и управления состоянием в React с использованием Redux. Проект реализует базовые страницы (Login, Register, HomePage, 404), демонстрирует работу с react-router, Redux и сторонними UI-библиотеками.

## Установка и запуск

```powershell
# 1. Создайте проект с допустимым именем (например, redux-home)
npm create vite@latest redux-home -- --template react

# 2. Перейдите в созданную папку
Set-Location redux-home

# 3. Установите зависимости
npm install react-router-dom @reduxjs/toolkit react-redux @mui/material @emotion/react @emotion/styled

# 4. Запустите проект
npm run dev
```

## Используемые технологии

- React
- React Router
- Redux
- UI-библиотека (Bootstrap или Material UI)

## Структура проекта

- `src/` — исходный код приложения
- `src/pages/` — страницы (Login, Register, HomePage, NotFound)
- `src/store/` — конфигурация Redux
- `src/components/` — переиспользуемые компоненты

## Задание

Домашнее задание
Роутинг и управление стейтом с React

Цель:
Научиться писать сложный фронтенд с роутингом и управлением стейтом
Разобраться с подключением сторонних плагинов и UI компонентов

Описание/Пошаговая инструкция выполнения домашнего задания:
Установить react-router;
Добавить отдельные компоненты страниц - Login / Register / HomePage / 404;
Добавить стейт-менеджемент с Redux;
Найти возможное дублирование кода и применить HOC паттерн.

Критерии оценки:
4 балла: В React проект добавлен react-router;
3 балла: В React проект добавлен Redux;
2 балла: В React проект добавлена библиотека UI компонентов (Bootstrap / material design);
1 балл: CodeStyle, грамотная архитектура, все замечания проверяющего исправлены.

Минимальный проходной балл: 8