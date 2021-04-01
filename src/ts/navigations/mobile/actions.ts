import { gsap } from 'gsap';

export const openMenu = (menu: HTMLElement, menuItems: Element[]) => {
    const timeline = gsap.timeline();

    timeline.to(menu, {
        opacity: 1,
    });

    menuItems.forEach((item) => {
        timeline.to(item, {
            x: 0,
            opacity: 1,
        });
    });

    menu.classList.remove('mobileMenu--close');
};

export const closeMenu = (menu: HTMLElement, menuItems: Element[]) => {
    const timeline = gsap.timeline();

    timeline.to(menu, {
        opacity: 0,
    });

    menuItems.forEach((item) => {
        timeline.set(item, {
            x: 20,
            opacity: 0,
        });
    });

    menu.classList.add('mobileMenu--close');
};

export const backgroundTextChange = (
    item: Element,
    backgroundText: HTMLElement
) => {
    backgroundText.textContent = item.textContent;
};
