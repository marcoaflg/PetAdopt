import Knex from "knex";

export async function seed(knex: Knex) {
    await knex("items").insert([
    { title: 'Doguinho', image: 'dog.jpg' },
    { title: 'Cato', image: 'cat.jpg' },
    { title: 'Sarinho', image: 'parrot.jpg' },
    { title: 'Chão', image: 'floor.jpg' },
    { title: 'Hamtaro', image: 'hamster.jpg' },
    { title: 'Racoon', image: 'racoon.jpg' }
    ]);
    // await knex('items')
    //   .del().where('id', '!=', 'null')
}
