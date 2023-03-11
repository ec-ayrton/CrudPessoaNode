module.exports = {
    development: {
        client: 'pg',
        connection: {
            host: 'localhost',
            port: '5432',
            database: 'NodePessoa',
            user: 'postgres',
            password: '123'
        },
        migrations: {
            tableName: 'knex_migrations',
            directory: './migrations',
        },
    },
};
