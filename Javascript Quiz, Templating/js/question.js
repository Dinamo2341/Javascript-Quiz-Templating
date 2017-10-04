'use strict';

var data = [
    {
        question : 'С помощью чего обычно визуализируют анимацию?',
        answer: [
            'С помощью кривых Безье',
            'С помощью линейных функций',
            'С помощью экспоненциальных функций',
            'С помощью квадратичных функций'
        ],
    },
    {
        question : 'Зачем используется ключевое слово var?',
        answer: [
            'Для вывода результатов программы на экран',
            'Для выполнения написанного выше кода',
            'Для создания новой переменной',
            'Для вывода сообщения в отдельном окне'
        ],

    },
    {
        question : 'Какое название переменной верное с точки зрения общепринятого в javascript стиля названия переменных?',
        answer: [
            'myvariable',
            'myVariable',
            'my_variable',
            'MyVariable'
        ],
    },
    {
        question : 'Выберите правильно созданный объект',
        answer: [
            'var obj = {prop1: 1; prop2: 2}',
            'var obj = [prop1: 1, prop2: 2]',
            'var obj = {prop1: 1, prop2: 2}',
            'var obj = {prop1 = 1, prop2 = 2}'
        ],
    },
    {
        question : 'Какого типа данных нет в JavaScript?',
        answer: [
            'Array',
            'Boolean',
            'String',
            'Decimal'
        ]
    },
];

var correct = [1, 7, 10, 15, 20]
var str_ls = JSON.stringify(data)
localStorage.setItem('questions', (str_ls))


str_ls = localStorage.getItem('questions');
var gen = JSON.parse(str_ls);
