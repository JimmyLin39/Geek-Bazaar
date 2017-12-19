
exports.seed = function(knex, Promise) {
  const products = [
    {
      id: 1,
      name: '10 Days in Africa', 
      category: 'Travel', 
      thumbnail: 'https://cf.geekdo-images.com/images/pic1229634_t.jpg', 
      image: 'https://cf.geekdo-images.com/images/pic1229634.jpg', 
      description: 'You have 10 DAYS IN AFRICA™ – touring by plane, car, and on foot.'
    },
    {
      id: 2,
      name: '10 Days in Europe', 
      category: 'Travel', 
      thumbnail: 'https://cf.geekdo-images.com/images/pic1229641_t.jpg', 
      image: 'https://cf.geekdo-images.com/images/pic1229641.jpg', 
      description: 'There is much to be discovered in Europe!'
    },
    {
      id: 3,
      name: '10 Days in the Americas', 
      category: 'Travel', 
      thumbnail: 'https://cf.geekdo-images.com/images/pic1229649_t.jpg', 
      image: 'https://cf.geekdo-images.com/images/pic1229649.jpg', 
      description: 'Gather your sunglasses, snowshoes and mosquito spray - it’s time to travel to new destinations with the 10 Days Series - the Americas!'
    },
  ];

  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products')
        .insert(products)
        .then(() => 
          knex.raw(`ALTER SEQUENCE products_id_seq RESTART WITH ${products.length + 1}`)
        );
    });
};
