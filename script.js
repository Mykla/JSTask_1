'use strict';

// Определение входных параметров:
var monthBuget;
monthBuget = prompt('Ваш бюджет на месяц?','');

var formatedData = prompt('Введите дату в формате YYYY-MM-DD','1900-01-01');

let appData = {
    budget : monthBuget,
    timeData : formatedData,
    expenses : {},
    optionalExpenses : {},
    income : [],
    saving : false
};

// Определение статей расходов
 let articleFirst = prompt('Введите обязательную статью расходов в этом месяце','');
 let articleFirstValue = prompt('Сколько это будет стоить?','');
 
 appData.expenses.articleFirst = articleFirstValue; 
 
 let articleSecond = prompt('Введите обязательную статью расходов в этом месяце','');
 let articleSecondValue = prompt('Сколько это будет стоить?','');
 
 appData.expenses.articleSecond = articleSecondValue;
 
 // Бюджет на 1 день с учетом обязательных расходов
 alert('Ваш бюджет на 1 день (с учетом обязательных расходов): '  
 + (monthBuget-articleFirstValue-articleSecondValue/30));