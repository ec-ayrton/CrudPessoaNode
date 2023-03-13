module.exports = {
    development: {
        client: 'mysql',
        connection: {
            host: 'db',
            user: 'root',
            password: 'ayrtondocker',
            database: 'NodePessoa'
        },
        migrations: {
            tableName: 'knex_migrations',
            directory: './migrations'
        }
    }
};
