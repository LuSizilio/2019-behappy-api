exports.seed = function(knex, Promise) {
  return knex('tasks').del()
    .then(function () {
      return knex('tasks').insert([
        {title: 'Bom dia', description: 'Você deu bom dia para alguém há 1 dia'},
        {title: 'Ligação', description: 'Você ligou para seus amigos há 2 dias'},
        {title: 'Zapzap', description: 'Envie um zapzapson aos seus amigos em 2 horas'},
      ]);
    });
};
