# 🚀 Browser Extensions Manager UI

<div align="center">
  <img src="./preview.jpg" alt="Browser Extensions Manager UI Preview" width="800px">
  
  <p align="center">
    <strong>Элегантный и удобный менеджер браузерных расширений с поддержкой темной и светлой темы</strong>
  </p>
  
  <p align="center">
    <a href="https://github.com/Yazi939/Browser-extension-manager-ui"><img src="https://img.shields.io/github/stars/Yazi939/Browser-extension-manager-ui?style=for-the-badge&color=C7231A" alt="GitHub stars"></a>
    <a href="#"><img src="https://img.shields.io/badge/HTML5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5"></a>
    <a href="#"><img src="https://img.shields.io/badge/CSS3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3"></a>
    <a href="#"><img src="https://img.shields.io/badge/JavaScript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"></a>
  </p>
</div>

## ✨ Основные возможности

- 🌗 **Переключение тем** – элегантный переход между светлой и темной темой с анимацией
- 📊 **Фильтрация расширений** – быстрое переключение между активными и неактивными расширениями
- 🔄 **Управление состоянием** – включение/отключение расширений в один клик
- 🗑️ **Удаление расширений** – легкое удаление ненужных расширений
- 📱 **Адаптивный дизайн** – выглядит отлично на любом устройстве: от мобильных до больших мониторов

## 🖥️ Демонстрация

<div align="center">
  <img src="./preview.jpg" alt="Демонстрация интерфейса" width="600px">
</div>

## 🛠️ Технологии

- **HTML5** – семантическая структура для лучшей доступности
- **CSS3** – современные стили с использованием переменных, flexbox и grid
- **JavaScript** – интерактивная функциональность без фреймворков
- **LocalStorage** – сохранение предпочтений пользователя между сессиями

## 🎯 Особенности реализации

### Элегантные анимации

```css
.theme-block.theme-toggle-active {
    animation: theme-toggle-pulse 0.5s ease-out;
}

@keyframes theme-toggle-pulse {
    0% {
        transform: scale(1);
        box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4);
    }
    50% {
        transform: scale(1.2);
        box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
    }
    100% {
        transform: scale(1);
        box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
    }
}
```

### Умная система фильтрации

```javascript
function filterCards(filterType) {
    const cards = document.querySelectorAll('.extension-card');
    
    cards.forEach(card => {
        const checkbox = card.querySelector('input[type="checkbox"]');
        const isActive = checkbox?.checked || false;
        
        const shouldDisplay = 
            filterType === 'All' || 
            (filterType === 'Active' && isActive) ||
            (filterType === 'Inactive' && !isActive);
            
        card.style.display = shouldDisplay ? 'flex' : 'none';
    });
}
```

### Переключение темы с сохранением

```javascript
themeToggle.addEventListener('click', () => {
    // Переключаем класс темы
    bodyElement.classList.toggle('light-theme');
    
    // Обновляем иконку и сохраняем настройку
    const isLight = bodyElement.classList.contains('light-theme');
    updateThemeIcon(isLight);
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    
    // Запускаем анимацию
    animateThemeToggle();
});
```

## 🚀 Запуск проекта

1. Клонируйте репозиторий
   ```bash
   git clone https://github.com/Yazi939/Browser-extension-manager-ui.git
   ```

2. Откройте проект
   ```bash
   cd Browser-extension-manager-ui
   ```

3. Запустите `index.html` в вашем браузере
   ```bash
   # На Windows
   start index.html
   
   # На macOS
   open index.html
   
   # На Linux
   xdg-open index.html
   ```

## 📐 Архитектура проекта

```
browser-extensions-manager-ui/
├── assets/
│   ├── css/
│   │   └── style.css        # Основные стили
│   ├── fonts/               # Шрифты
│   ├── images/              # Изображения и иконки
│   └── script/
│       └── script.js        # JavaScript функциональность
├── index.html               # Главная страница
├── data.json                # Данные о расширениях
└── README.md                # Документация
```

## 🔜 Планы на будущее

- [ ] Добавление новых расширений через форму
- [ ] Группировка расширений по категориям
- [ ] Экспорт/импорт списка расширений
- [ ] Синхронизация с облачным хранилищем
- [ ] Дополнительные темы оформления

## 📄 Лицензия

Этот проект распространяется под лицензией MIT. Подробности в файле [LICENSE](LICENSE).

## 👨‍💻 Автор

**Yazi939** • [GitHub](https://github.com/Yazi939) 

---

<div align="center">
  <p>Сделано с ❤️ и ☕</p>
  
</div>
