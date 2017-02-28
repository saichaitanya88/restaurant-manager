import { Injectable } from "@angular/core";

@Injectable()
export class MenuService {
    menu: MenuItem[] = [];
    categorizedMenu: { name: string, items: MenuItem[] }[];
    constructor() {
        this.menu = [
            { type: 0, name: "Gnocchi", description: "Ricotta Gnocchi, Four Cheese Sauce", price: 20, code: 101 },
            { type: 0, name: "Orechiette", description: "Spicy Sausage, Rapini, Ricotta Salata, Aglio Olio", price: 19, code: 102 },
            { type: 0, name: "Cesare", description: "Romaine,Parmigiano Reggiano, Pancetta, herbed croutons with dressing", price: 11, code: 103 },
            { type: 0, name: "Mista mare", description: "Pea shoots, Calamari,Shrimp, Scallops with dressing", price: 21, code: 104 },
            { type: 0, name: "Galletto con funghi", description: "Oven-Roasted Free-Range Chicken Breast, Wild Forest Mushroom Jus", price: 21, code: 105 },

            { type: 1, name: "Gnocchi", description: "Ricotta Gnocchi, Four Cheese Sauce", price: 21, code: 201 },
            { type: 1, name: "Orechiette", description: "Spicy Sausage, Rapini, Ricotta Salata, Aglio Olio", price: 19, code: 202 },
            { type: 1, name: "Paccheri", description: "Paccheri, Fresh Ricotta, Sweet Peas, Cherry Tomato, Basil", price: 22, code: 203 },
            { type: 1, name: "Raviolini alla salvia", description: "Stuffed Veal Raviolini, Sicilian Pistachio, Sage, Brown Butter, White Truffle Oil", price: 27, code: 204 },
            { type: 1, name: "Lombata di vitello", description: "Grilled Provimi Veal Chop, Sage Pan Jus", price: 51, code: 205 },

            { type: 2, name: "Classic Cosmo", description: "Vodka, Cranberry Juice, Triple Sec & Lime14", price: 14, code: 300 },
            { type: 2, name: "Classic Negroni", description: "Gin, Campari, Martini Rosso, Soda & Orange Slice", price: 14, code: 301 },
            { type: 2, name: "Amalfitana", description: "Citron Vodka, Limoncello, Lemon Juice, Sugar Rim, Twist", price: 15, code: 302 },
            { type: 2, name: "Pear Te", description: "Grey Goose Vodka, St. Germain, Pear Juice, Lime & Pear Garnish", price: 16, code: 303 },
            { type: 2, name: "Café Martini", description: "Vodka, Shot of Espresso, Kahlua & Espresso Bean Garnish", price: 14, code: 304 },
            { type: 2, name: "Sour Apple", description: "Apple Vodka, Sourz, Triple Sec, Fresh Lime, Apple Garnish", price: 14, code: 305 },
        ]
        this.initCategorizedMenu();
    }

    initCategorizedMenu() {
        this.categorizedMenu = [{
            name: "Lunch",
            items: this.menu.filter(m => m.type == MenuCategory.Lunch)
        }, {
            name: "Dinner",
            items: this.menu.filter(m => m.type == MenuCategory.Dinner)
        }, {
            name: "Liquor",
            items: this.menu.filter(m => m.type == MenuCategory.Liquor)
        }];
    }

    generateRandomMenuItem() {
        let menuItem = new MenuItem();
        menuItem.name = Math.random().toString(36).substring(7);
        menuItem.description = Array(8).fill(1).map(w => {
            let n = Math.random() * 20;
            return Math.random().toString(36).substring(7).substring(n);
        }).join(", ");
        menuItem.type = MenuCategory[MenuCategory[Math.floor(Math.random() * 3)]];
        menuItem.price = Math.floor(Math.random() * 20);
        menuItem.code = Math.floor(Math.random() * 25) + 100;
        return menuItem;
    }
}

export class MenuItem {
    type: MenuCategory;
    name: string;
    description: string;
    price: number;
    code: number;
}

export enum MenuCategory {
    Lunch, Dinner, Liquor
}