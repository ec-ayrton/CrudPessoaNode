module.exports = {
    development: {
        client: 'mysql',
        connection: {
            host: '127.0.0.1',
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
