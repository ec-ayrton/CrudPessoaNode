const { validarCampos } = require('../src/validators/PessoaValidator');

describe('validarCampos', () => {
    it('deve retornar uma exceção com mensagem de erro quando nome não é informado', async () => {
        expect.assertions(2);

        const pessoa = {
            email: 'test@test.com',
            cpf: '12345678901'
        };

        try {
            await validarCampos(pessoa);
        } catch (error) {
            expect(error.message).toEqual('{"motivo":"Erro na validacao","mensagem":"O campo nome é obrigatório.\\n"}');
            expect(error instanceof Error).toBe(true);
        }
    });

    it('deve retornar uma exceção com mensagem de erro quando email não é informado', async () => {
        expect.assertions(2);

        const pessoa = {
            nome: 'Teste',
            cpf: '12345678901'
        };

        try {
            await validarCampos(pessoa);
        } catch (error) {
            expect(error.message).toEqual('{"motivo":"Erro na validacao","mensagem":"O campo email é obrigatório.\\n"}');
            expect(error instanceof Error).toBe(true);
        }
    });

    it('deve retornar uma exceção com mensagem de erro quando email está em formato inválido', async () => {
        expect.assertions(2);

        const pessoa = {
            nome: 'Teste',
            email: 'test',
            cpf: '12345678901'
        };

        try {
            await validarCampos(pessoa);
        } catch (error) {
            expect(error.message).toEqual('{"motivo":"Erro na validacao","mensagem":"O formato do email é inválido.\\n"}');
            expect(error instanceof Error).toBe(true);
        }
    });

    it('deve retornar uma exceção com mensagem de erro quando cpf não é informado', async () => {
        expect.assertions(2);

        const pessoa = {
            nome: 'Teste',
            email: 'test@test.com'
        };

        try {
            await validarCampos(pessoa);
        } catch (error) {
            expect(error.message).toEqual('{"motivo":"Erro na validacao","mensagem":"O campo cpf é obrigatório.\\n"}');
            expect(error instanceof Error).toBe(true);
        }
    });

    it('deve retornar uma exceção com mensagem de erro quando cpf não tem 11 caracteres', async () => {
        expect.assertions(2);

        const pessoa = {
            nome: 'Teste',
            email: 'test@test.com',
            cpf: '1234567890'
        };

        try {
            await validarCampos(pessoa);
        } catch (error) {
            expect(error.message).toEqual('{"motivo":"Erro na validacao","mensagem":"O campo cpf deve ter 11 caracteres.\\n"}');
            expect(error instanceof Error).toBe(true);
        }
    });

    it('deve passar quando todos os campos obrigatórios são informados e em formato válido', async () => {
        const pessoa = {
            nome: 'Teste',
            email: 'test@test.com',
            cpf: '12345678901'
        };

        await expect(validarCampos(pessoa)).resolves.not.toThrow();
    });
});
