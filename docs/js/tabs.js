//tabs
const list = document.querySelector('.choice__list'),
      items = document.querySelectorAll('.choice__photo'),
      listItems = document.querySelectorAll('.choice__item');

function filter() {
    list.addEventListener('click', event => {
        const targetId = event.target.dataset.id;
        const target = event.target;

        if(target.classList.contains('choice__item')) {
            listItems.forEach(listitem => {
                listitem.classList.remove('choice__item--active');
            });
            target.classList.add('choice__item--active');
        };

        switch(targetId) {
            case 'econom':
                getItems(targetId);
                break
            case 'small':
                getItems(targetId);
                break
            case 'classic':
                getItems(targetId);
                break
            case 'hightech':
                getItems(targetId);
                break
            case 'scandinavian':
                getItems(targetId);
                break
            case 'minimalism':
                getItems(targetId);
                break
            case 'loft':
                getItems(targetId);
                break
            case 'provence':
                getItems(targetId);
                break
        }
    });
};
filter();

function getItems(className) {
    items.forEach(item => {
        if (item.classList.contains(className)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}