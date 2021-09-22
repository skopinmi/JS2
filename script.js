const goods = [
  { title: 'Shirt', price: 150 },
  { title: 'Socks', price: 50 },
  { title: 'Jacket', price: 350 },
  { title: 'Shoes', price: 250 },
];

const renderGoodsItem = (item = {title: 'NoNamed', price: 100}) => {
  let {title, price} = item;
  return `<div class="goods-item"><h3>${title}</h3><p>${price}</p></div>`;
};

const renderGoodsList = (list) => {
  let goodsList = list.map(renderGoodsItem).join('');
  document.querySelector('.goods-list').innerHTML = goodsList;
}

renderGoodsList(goods);